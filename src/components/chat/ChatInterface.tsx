import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Mic, MicOff, RefreshCw, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveBall from '../3d/InteractiveBall';
import { callOpenRouterAPI, callElevenLabsAPI } from '../../services/api';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

interface ChatInterfaceProps {
  maxRequests?: number;
  enableVoice?: boolean;
}

function ChatInterface({ maxRequests = 5, enableVoice = true }: ChatInterfaceProps) {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    { id: '0', text: t('chat.greeting'), isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [requestsLeft, setRequestsLeft] = useState(maxRequests);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastResponseRef = useRef<string>('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.onended = () => setIsSpeaking(false);
    
    // Load requests count from localStorage
    const storedCount = localStorage.getItem('ki-helpbot-requests');
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem('ki-helpbot-requests-date');
    
    if (storedCount && storedDate === today) {
      setRequestsLeft(maxRequests - parseInt(storedCount, 10));
    } else {
      localStorage.setItem('ki-helpbot-requests', '0');
      localStorage.setItem('ki-helpbot-requests-date', today);
      setRequestsLeft(maxRequests);
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [maxRequests]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const updateRequestCount = () => {
    const count = parseInt(localStorage.getItem('ki-helpbot-requests') || '0', 10) + 1;
    localStorage.setItem('ki-helpbot-requests', count.toString());
    setRequestsLeft(maxRequests - count);
  };

  const simulateTyping = async (text: string): Promise<string> => {
    setIsTyping(true);
    
    // Return the full text after a delay to simulate typing
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsTyping(false);
        resolve(text);
      }, 1500);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoading || !input.trim() || requestsLeft <= 0) return;
    
    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    const userMessageObj: Message = {
      id: Date.now().toString(),
      text: userMessage,
      isUser: true
    };
    
    setMessages(prevMessages => [...prevMessages, userMessageObj]);
    setIsLoading(true);
    
    try {
      // Call OpenRouter API
      const response = await callOpenRouterAPI(userMessage);
      const typedResponse = await simulateTyping(response);
      
      const botMessageObj: Message = {
        id: (Date.now() + 1).toString(),
        text: typedResponse,
        isUser: false
      };
      
      setMessages(prevMessages => [...prevMessages, botMessageObj]);
      lastResponseRef.current = typedResponse;
      
      // Speak if voice is enabled
      if (voiceEnabled && enableVoice) {
        speakText(typedResponse);
      }
      
      updateRequestCount();
    } catch (error) {
      console.error('Error calling API:', error);
      setMessages(prevMessages => [
        ...prevMessages,
        {
          id: (Date.now() + 1).toString(),
          text: t('chat.error'),
          isUser: false
        }
      ]);
    } finally {
      setIsLoading(false);
      if (inputRef.current) inputRef.current.focus();
    }
  };

  const speakText = async (text: string) => {
    if (!text) return;
    
    try {
      setIsSpeaking(true);
      const audioBlob = await callElevenLabsAPI(text);
      if (audioRef.current) {
        const audioUrl = URL.createObjectURL(audioBlob);
        audioRef.current.src = audioUrl;
        audioRef.current.play();
      }
    } catch (error) {
      console.error('Error generating speech:', error);
      setIsSpeaking(false);
    }
  };

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
    
    // If enabling voice and we have a last response, speak it
    if (!voiceEnabled && lastResponseRef.current && !isSpeaking) {
      speakText(lastResponseRef.current);
    }
    
    // If disabling voice and currently speaking, stop it
    if (voiceEnabled && isSpeaking && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsSpeaking(false);
    }
  };

  const resetChat = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    setIsSpeaking(false);
    setMessages([{ id: '0', text: t('chat.greeting'), isUser: false }]);
    lastResponseRef.current = '';
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <motion.div 
            className="absolute inset-0 rounded-full bg-primary-400/20 filter blur-xl"
            animate={{ 
              scale: isSpeaking ? [1, 1.1, 1] : 1,
              opacity: isSpeaking ? [0.5, 0.7, 0.5] : 0.5
            }}
            transition={{
              duration: 2,
              repeat: isSpeaking ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
          <InteractiveBall 
            isSpeaking={isSpeaking}
            onClick={voiceEnabled && lastResponseRef.current ? () => speakText(lastResponseRef.current) : undefined}
            size={300}
          />
          
          {/* Status indicator */}
          <motion.div 
            className="absolute bottom-4 right-4 bg-white dark:bg-dark-200 rounded-full px-3 py-1 shadow-md border border-gray-100 dark:border-gray-700 text-xs font-medium flex items-center gap-1.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className={`inline-block w-2 h-2 rounded-full ${isSpeaking ? 'bg-green-500 animate-pulse' : 'bg-blue-500'}`}></span>
            {isSpeaking ? 'Spricht...' : 'Bereit'}
          </motion.div>
        </div>
      </div>
      
      <div className="rounded-xl bg-white/10 dark:bg-dark-200/30 backdrop-blur-md shadow-xl border border-white/20 overflow-hidden">
        {/* Chat header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <h3 className="font-medium">KI-Helpbot Assistent</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
              {requestsLeft} / {maxRequests} Anfragen
            </span>
            <button
              onClick={resetChat}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Reset chat"
            >
              <RefreshCw size={16} />
            </button>
          </div>
        </div>
        
        {/* Chat messages area */}
        <div className="h-96 md:h-80 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-dark-300/50">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!message.isUser && (
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-2 flex-shrink-0">
                  <Bot size={16} className="text-primary-600 dark:text-primary-400" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.isUser
                    ? 'bg-primary-600 text-white rounded-tr-none'
                    : 'bg-white dark:bg-dark-200 text-gray-800 dark:text-gray-200 shadow-sm rounded-tl-none'
                }`}
              >
                <p className="text-sm md:text-base">{message.text}</p>
              </div>
              {message.isUser && (
                <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center ml-2 flex-shrink-0">
                  <span className="text-white text-xs font-bold">
                    {message.isUser ? 'Du' : 'AI'}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
          
          {/* Loading/typing indicator */}
          <AnimatePresence>
            {(isLoading || isTyping) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-2 flex-shrink-0">
                  <Bot size={16} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-white dark:bg-dark-200 text-gray-800 dark:text-gray-200 shadow-sm rounded-tl-none">
                  <div className="flex space-x-1">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.25 }}
                      className="w-2 h-2 rounded-full bg-primary-400"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.25, delay: 0.1 }}
                      className="w-2 h-2 rounded-full bg-primary-400"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.25, delay: 0.2 }}
                      className="w-2 h-2 rounded-full bg-primary-400"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input area */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-dark-200">
          {requestsLeft > 0 ? (
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                placeholder={t('chat.placeholder')}
                className="chat-input flex-grow px-4 py-2.5 rounded-full bg-gray-100 dark:bg-dark-100 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
                disabled={isLoading || requestsLeft <= 0}
              />
              
              {enableVoice && (
                <button
                  type="button"
                  onClick={toggleVoice}
                  className={`p-3 rounded-full ${
                    voiceEnabled
                      ? 'bg-secondary-500 text-white'
                      : 'bg-gray-200 dark:bg-dark-100 text-gray-600 dark:text-gray-300'
                  } transition-colors hover:shadow-md`}
                  disabled={isLoading || requestsLeft <= 0}
                  aria-label={voiceEnabled ? 'Disable voice' : 'Enable voice'}
                >
                  {voiceEnabled ? <Mic size={20} /> : <MicOff size={20} />}
                </button>
              )}
              
              <button
                type="button"
                onClick={resetChat}
                className="p-3 rounded-full bg-gray-200 dark:bg-dark-100 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-200 transition-colors hover:shadow-md"
                aria-label="Reset chat"
              >
                <RefreshCw size={20} />
              </button>
              
              <button
                type="submit"
                className="p-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || !input.trim() || requestsLeft <= 0}
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </form>
          ) : (
            <div className="text-center py-3 px-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg border border-red-100 dark:border-red-800/30">
              <Sparkles className="inline-block mr-2 size-4" />
              {t('demo.requestLimit')}
            </div>
          )}
          
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-right">
            {t('demo.requestsLeft', { count: requestsLeft })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;