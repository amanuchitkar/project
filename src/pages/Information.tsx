import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

function Information() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSpeech, setCurrentSpeech] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if (isPlaying) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlaying]);

  const sections = [
    {
      id: 'early-life',
      title: 'Early Life',
      content: 'Born in 1630 at Shivneri Fort, Shivaji was named after the local goddess Shivai. Under the guidance of his mother Jijabai and his guardian Dadoji Konddev, he learned warfare strategies, martial arts, and administrative skills from an early age.'
    },
    {
      id: 'military-achievements',
      title: 'Military Achievements',
      content: 'Shivaji Maharaj\'s military genius was evident in his guerrilla warfare tactics. He captured numerous forts, including the dramatic capture of Torna Fort at age 16. His naval fleet protected the western coastline and challenged foreign powers.'
    },
    {
      id: 'administration',
      title: 'Administration',
      content: 'He established a progressive administration system called Ashta Pradhan Mandal (Council of Eight Ministers). His governance emphasized justice, religious tolerance, and welfare of all subjects regardless of religion or caste.'
    }
  ];

  const stopCurrentSpeech = useCallback(() => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentSpeech(null);
    }
  }, [isPlaying]);

  const handleTextClick = (content: string) => {
    if (isPlaying && currentSpeech?.text === content) {
      stopCurrentSpeech();
      return;
    }

    stopCurrentSpeech();

    const utterance = new SpeechSynthesisUtterance(content);
    utterance.rate = 0.9; // Slightly slower for better clarity
    utterance.pitch = 1;
    utterance.volume = 1;

    // Get available voices and set a good English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => 
      voice.lang.startsWith('en') && voice.name.includes('Male')
    ) || voices[0];
    
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onend = () => {
      setIsPlaying(false);
      setCurrentSpeech(null);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setCurrentSpeech(null);
      console.error('Speech synthesis error');
    };

    setCurrentSpeech(utterance);
    setIsPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-title text-center"
      >
        The Life of Shivaji Maharaj
      </motion.h1>

      <div className="space-y-12">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="section-title">{section.title}</h2>
            <p 
              className="content-text audio-text"
              onClick={() => handleTextClick(section.content)}
            >
              {section.content}
            </p>
            {isPlaying && currentSpeech?.text === section.content && (
              <div className="mt-4 text-royal-500 flex items-center gap-2">
                <span className="animate-pulse">▶</span> Reading text...
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Information;