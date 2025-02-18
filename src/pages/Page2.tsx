import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Audio2 from '../assets/audio/Page2.mp3'


function Page2() {
  // Define the page data, which includes multiple images
  const pageData = {
    title: 'जलपती',
    description: 'ज्याचे आरमार त्याचा समुद्र',
    images: [
      'https://i.pinimg.com/736x/59/9a/9a/599a9a53fa8444e6b57a606b72752612.jpg',  // Add more images as needed
    ],
    audioUrl: Audio2,
    fullInfo: `आरमार म्हणजे स्वतंत्र येक राज्यांगच आहे. जैसे ज्यास अश्वबल त्याची पृथ्वी प्रजा आहे. तसेच ज्याजवळ आरमार त्याचा समुद्र.... याकरिता आरमार अवश्यमेव करावे..

कोकणात स्वराज्य विस्तार करताना तिथल्या व्यापारांवर जर मराठी अंमल हवा तर मराठी आरमार मजबुत हवे. ही आरमार निर्मिती धारणा असावी.

सुरुवातीच्या काळात थेट समुद्र किनाऱ्यावरील बंदर आणि जलदुर्ग स्वराज्याच्या ताब्यात नसल्याने, समुद्रातून ४० कि.मी. आत वसईच्या खाडीत उल्हास नदीच्या काठावर दुर्गाडी इथ आणि नंतर धरमतर खाडीतून आत भोगावती नदीच्या किनारी पेण इथे महाराजांनी आरमार निर्मितीची मुहूर्त वेढ रोवली

स्वराज्यातील किनारी प्रदेशा व्यतिरिक्त व्यापारासाठीही आरमाराचा उपयोग झाला. आपल्या आरमाराच्या संरक्षणात महाराजांना आपली बंदरे महाड, संगमेश्वर तसेच राजापुरी, इ. बंदरांचा विकास करत एकुण व्यापार वाढवायचा होता. त्यासाठी इतर व्यापारांचे स्वराज्याच्या बंदरात स्वागत होते.

सिंधुदुर्ग, सुवर्णदुर्ग, कुलाबा, खांदेरी इ. बेटांवरील किल्ले तसेच गोपाळगड, बाणकोट, कोरलाई, रेवदंडा, अरणाला, वसई, भोपाळगड, देवगड, जयगड व पुर्णगड इ. सीमेवरील दुर्ग बांधून किनारा सुरक्षित केला. आरमारच्या दृष्टीने कोकणातील खाड्या जहाजांसाठी उत्कृष्ठ आसरा होत्या. आरमारी संरक्षणाच्या दृष्टीने गिरीदुर्ग आणि जलदुर्गाची बांधणी आणि नवी संरक्षक स्थळे निर्माण करण्यासाठी किनारपट्टीवरील बेटे आणि समुद्रापर्यंत घुसलेले डोंगरसुळके मोक्याचा जागा पुरवायला सज्ज होते.

`
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
    newAudio.play().then(() => setIsPlaying(true)).catch(err => console.log("Playback failed:", err));
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

export default Page2;
