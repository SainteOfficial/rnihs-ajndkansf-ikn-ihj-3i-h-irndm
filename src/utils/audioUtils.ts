/**
 * Audio utility functions for handling cross-platform audio playback issues
 * Especially focused on iOS devices which require user interaction to start audio
 */

// Detect if the device is iOS
export const isIOSDevice = (): boolean => {
  // Check for iOS devices including newer iPads that report as MacIntel
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

// Singleton AudioContext to be used throughout the app
let globalAudioContext: AudioContext | null = null;

// Get or create the global AudioContext
export const getAudioContext = (): AudioContext | null => {
  if (globalAudioContext) {
    return globalAudioContext;
  }
  
  // Create a new AudioContext
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      globalAudioContext = new AudioContextClass();
      return globalAudioContext;
    }
  } catch (e) {
    console.error('AudioContext is not supported in this browser', e);
  }
  
  return null;
};

// Unlock audio playback on iOS devices
export const unlockAudioOnIOS = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (!isIOSDevice()) {
      // Not an iOS device, no need to unlock
      resolve(true);
      return;
    }
    
    const audioContext = getAudioContext();
    if (!audioContext) {
      resolve(false);
      return;
    }
    
    // iOS requires user interaction
    if (audioContext.state === 'suspended') {
      try {
        // Create and play a silent sound
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        // Set to minimal volume
        gainNode.gain.value = 0.001;
        
        // Connect nodes
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Play very short sound
        oscillator.start(0);
        oscillator.stop(0.001);
        
        // Resume the audio context
        audioContext.resume().then(() => {
          console.log('AudioContext unlocked successfully');
          resolve(true);
        }).catch(err => {
          console.error('Failed to resume AudioContext', err);
          resolve(false);
        });
      } catch (e) {
        console.error('Error unlocking audio', e);
        resolve(false);
      }
    } else {
      // Already unlocked
      resolve(true);
    }
  });
};

// Helper for playing audio with iOS compatibility
export const playAudio = async (source: string): Promise<HTMLAudioElement | null> => {
  // Try to unlock audio on iOS first
  await unlockAudioOnIOS();
  
  // Create and play the audio
  try {
    const audio = new Audio(source);
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error('Audio playback failed', error);
        // On iOS, most failures are due to lack of user interaction
        // We don't try to recover here since unlockAudioOnIOS should handle it
      });
    }
    
    return audio;
  } catch (e) {
    console.error('Error playing audio', e);
    return null;
  }
}; 