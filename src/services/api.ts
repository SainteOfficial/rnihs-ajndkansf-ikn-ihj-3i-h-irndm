import axios from 'axios';

// OpenRouter API configuration
const OPENROUTER_API_KEY = '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';
const OPENROUTER_MODEL = 'deepseek/deepseek-chat-v3-0324:free';

// ElevenLabs API configuration
const ELEVENLABS_API_KEY = 'sk_656b7d0fdf834e9024243f845a99e9f832c9b640e';
const ELEVENLABS_VOICE_ID_MALE = 'FTNCalFNG5bRnkkaP5Ug';
const ELEVENLABS_VOICE_ID_FEMALE = '7eVMgwCnXydb3CikjV7a';

export async function callOpenRouterAPI(message: string): Promise<string> {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: OPENROUTER_MODEL,
        messages: [
          { role: 'system', content: 'Du bist ein hilfreicher KI-Assistent eines deutschen Unternehmens namens KI-Helpbot, das sich auf KI-gestützte Kommunikationslösungen spezialisiert. Deine Antworten sollten informativ, freundlich und auf Deutsch sein. Du hilfst Kunden, die Interesse an Chatbots und Voicebots für ihre Unternehmen haben.' },
          { role: 'user', content: message }
        ],
        max_tokens: 500
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'KI-Helpbot Demo'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    throw new Error('Failed to get response from AI service');
  }
}

export async function callElevenLabsAPI(text: string): Promise<Blob> {
  try {
    // Use female voice by default
    const voiceId = ELEVENLABS_VOICE_ID_FEMALE;
    
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY
        },
        responseType: 'blob'
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error calling ElevenLabs API:', error);
    throw new Error('Failed to generate speech');
  }
}