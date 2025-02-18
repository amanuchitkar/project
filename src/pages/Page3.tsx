import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Audio1 from '../assets/audio/Page3.mp3'


function Page3() {
  // Define the page data, which includes multiple images
  const pageData = {
    title: 'दर्यापती',
    description: 'ज्याचे आरमार त्याचा समुद्र',
    images: [
      'https://braintordigitallibrary.wordpress.com/wp-content/uploads/2012/10/navy1.jpg',  // Add more images as needed
    ],
    audioUrl: Audio1,
    fullInfo: `ई. स. १६५७ मध्ये शिवाजीमहाराजांनी कल्याण भिवंडी घेतल्यावर कल्याणच्या खाडीत सुमुहूर्तावर आपल्या आरमाराची पठाणे तरती केली. महाराजांच्या आरमाराची सुरुवात केली.

वसईत जहाजे बांधणारे कुशल पोर्तुगीज कारागीर होते. त्यांच्या मदतीने शिवाजी महाराजांनी पहिली वीस लढाऊ गलबते बांधण्यास सुरुवात केली ही जहाजे आपण सिध्या विरुद्ध वापरण्याकरीता बांधीत आहोत असे शिवाजी महाराजांनी जाहीर केले. कारण असे जाहीर केल्याशिवाय पोर्तुगीज त्यांच्या जहाजांना कल्याण भिवंडीच्या खाडीतुन बाहेर समुद्रात पडू देणे शक्य नव्हते. इ.स १६५७ ते इ.स. १६५९ च्या दरम्यान शिवाजी महाराजांची वीस जहाजे तयार झाली शेवटपर्यंत लहान मोठी पाचशे जहाजे तयार करण्यात आली होती.

शिवाजीमहाराजांच्या आरमारात गुराबा, तरोडी, तारवे, गलबते, शिबाड, पगार या प्रकारची जहाजे असल्याचे कृष्णाजी अनंत सभासद यांनी सांगितले आहे. लढाऊ 'जहाजात गलबत, गुराबा, बाभोर, तिरकती व पाल ही प्रमुख होती. गलबतापेक्षा गुराबा मोठ्या प्रमाणावर असत आणि पाल सर्वात भारी असे ही सर्व उथळ बांधणीची म्हणजे लांबीच्या प्रमाणात अधिक रुंदीची

शिवाजी महाराजांच्या आरमारी व्यवस्थेत दोनशे जहाजांचा एक सुभा केला जात असे. मायनाक भंडारी व दौलतखान हे महाराजांच्या आरमाराचे आरमारी अधिकारी होते.

शिवप्रतिष्ठान DBATU
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

export default Page3;
