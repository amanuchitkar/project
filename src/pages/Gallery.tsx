import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [currentAudio]);

  const galleryItems = [
    {
      id: 1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Shivaji_British_Museum.jpg',
      title: 'Portrait of Shivaji Maharaj',
      description: 'A historic portrait of Chhatrapati Shivaji Maharaj from the British Museum collection.',
      audioUrl: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'
    },
    {
      id: 2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Raigad_Fort_Maharashtra.jpg',
      title: 'Raigad Fort',
      description: 'The capital fort of Shivaji Maharaj\'s Maratha Empire, situated in Maharashtra.',
      audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav'
    },
    {
      id: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Pratapgad_fort_maharashtra.jpg',
      title: 'Pratapgad Fort',
      description: 'The site of the famous battle between Shivaji Maharaj and Afzal Khan.',
      audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand60.wav'
    }
  ];

  const stopCurrentAudio = useCallback(() => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsPlaying(false);
    }
  }, [currentAudio]);

  const handleAudioPlayback = async (audioUrl: string) => {
    // If the same audio is playing, stop it.
    if (currentAudio?.src === audioUrl) {
      stopCurrentAudio();
      setCurrentAudio(null);
      return;
    }

    // Stop any currently playing audio.
    stopCurrentAudio();

    try {
      const audio = new Audio(audioUrl);
      await audio.load();
      setCurrentAudio(audio);
      
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentAudio(null);
      });

      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-title text-center"
      >
        Historical Gallery
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div 
              className="relative cursor-pointer"
              onClick={() => handleAudioPlayback(item.audioUrl)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              {currentAudio?.src === item.audioUrl && isPlaying && (
                <div className="absolute bottom-4 right-4 bg-royal-500 text-white px-3 py-1 rounded-full">
                  <span className="animate-pulse">▶</span> Playing
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medieval text-royal-800 mb-2">{item.title}</h3>
              <p className="text-royal-700">{item.description}</p>
              <button
                onClick={() => handleAudioPlayback(item.audioUrl)}
                className="mt-4 w-full bg-royal-500 text-white px-4 py-2 rounded-md hover:bg-royal-600 transition duration-300"
              >
                Click here to listen audio book
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
