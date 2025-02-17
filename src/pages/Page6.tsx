import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Page6() {
  // Define the page data, which includes multiple images
  const pageData = {
    title: 'The Legacy of Chhatrapati Shivaji Maharaj',
    description: 'Discover the life and achievements of Shivaji Maharaj, the founder of the Maratha Empire.',
    images: [
      'https://www.citybit.in/wp-content/uploads/2024/07/Raigad-Fort-Photos-1024x576.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUb2ogFfg7gJu0RDQ5OBgYA1fkIXSaxVzDTw&s',
      'https://sanketnow.com/wp-content/swift-ai/images/wp-content/uploads/2020/05/Raigad-Photography-9-jpg.webp',  // Add more images as needed
    ],
    audioUrl: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
    fullInfo: `छत्रपती शिवाजी महाराज हे एक दूरदर्शी नेतृत्व आणि शूर योद्धे होते ज्यांनी १७व्या शतकात मराठा साम्राज्याची स्थापना केली.
    
    त्यांच्या युद्धनीती, प्रगत प्रशासन आणि सर्व धर्मांबद्दलच्या सन्मानामुळे ते प्रसिद्ध होते. रायगड आणि प्रतापगड यांसारखी त्यांची दुर्गे त्यांच्या गौरवशाली इतिहासाचे साक्षीदार आहेत.
    
    त्यांच्या नौदल शक्ती आणि प्रशासनाने मजबूत आणि सशक्त साम्राज्याची पायाभरणी केली.
    
    शिवाजी महाराजांनी हिंदवी स्वराज्याची संकल्पना मांडली आणि ती प्रत्यक्षात आणण्यासाठी अपार मेहनत घेतली.
    
    त्यांनी शिस्तबद्ध सेना निर्माण केली, गनिमी काव्याने शत्रूवर विजय मिळवला आणि शेतकरी, व्यापारी तसेच सामान्य जनतेचे संरक्षण करण्यासाठी ठोस धोरणे आखली.
    
    त्यांचा राज्याभिषेक १६७४ मध्ये रायगड किल्ल्यावर मोठ्या थाटामाटात पार पडला.
    
    त्यांनी मजबूत किल्ले, उत्कृष्ट जलवाहतूक आणि प्रभावी गुप्तचर यंत्रणा विकसित केली.
    
    त्यांचा न्यायप्रिय आणि कणखर स्वभाव मराठा साम्राज्याच्या वाढीस पोषक ठरला.
    
    महाराजांनी प्रशासकीय सुधारणा घडवून आणल्या, विविध जाती-धर्मांच्या लोकांना बरोबर घेऊन साम्राज्य वाढवले.
    
    त्यांच्या पराक्रमामुळे ते आजही भारतीय इतिहासातील प्रेरणादायी नेतृत्व मानले जातात.`
  };

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);  // Start with the first image

  useEffect(() => {
    // Automatically change the image every 5 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pageData.images.length);
    }, 5000); // 5000ms = 5 seconds

    return () => {
      clearInterval(imageInterval);  // Cleanup the interval on unmount
    };
  }, []);  // Empty dependency array to run only once on component mount

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [audio]);

  const handleAudioPlayback = () => {
    if (!pageData.audioUrl) return;

    if (audio) {
      audio.pause();
      setIsPlaying(false);
      setAudio(null);
    } else {
      const newAudio = new Audio(pageData.audioUrl);
      newAudio.play().then(() => setIsPlaying(true));
      newAudio.addEventListener('ended', () => setIsPlaying(false));
      setAudio(newAudio);
    }
  };

  return (
    <div className="max-w-1/2 mx-auto px-4 py-10 text-center bg-[#FAF3E0] min-h-screen flex flex-col items-center">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-medieval font-bold text-royal-800 mb-4"

      >
        {pageData.title}
      </motion.h1>
      
      <div>
        <p className="text-xs text-royal-500 font-serif">{pageData.description}</p>      </div>
      
      <motion.img 
        src={pageData.images[currentImageIndex]}  // Display the current image from the array
        alt={pageData.title} 
        className="w-full max-w-sm h-64 object-cover rounded-lg border-4 border-[#A67B5B] shadow-lg mt-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {pageData.audioUrl && (
        <button 
          onClick={handleAudioPlayback} 
          className="mt-4 bg-[#8B4513] text-white px-5 py-2 rounded-lg hover:bg-[#704214] transition shadow-md text-md w-10/12 max-w-xs font-serif"
        >
          {isPlaying ? 'Stop Audio' : 'Play Audio Book'}
        </button>
      )}
      
      <div className="mt-6 text-left px-3 max-w-lg bg-royal-100 p-3 rounded-lg border-4 border-[#A67B5B] shadow-lg">
        <h2 className="text-lg font-semibold text-[#8B4513] mb-3 text-center font-serif">संपूर्ण माहिती</h2>
        <p className="text-[#5C4033] leading-tight text-justify text-[0.6rem] font-serif whitespace-pre-line">{pageData.fullInfo}</p>
      </div>
    </div>
  );
}

export default Page6;
