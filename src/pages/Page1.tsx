import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Page2 from './Page2';
import Page3 from './Page3';
import Audio1 from '../assets/audio/Page1.mp3'


function Page1() {
  // Define the page data, which includes multiple images
  const pageData = {
    title: 'सह्याद्रीपती',
    description: 'इतिहास सह्याद्रीतील घाटवाटाचा.',
    images: [
      'https://2.bp.blogspot.com/-bvTn7pcq0Zw/U79l08jtelI/AAAAAAAAC_w/AuGZrthCUhs/s720/Image_4.jpg',
      'https://i0.wp.com/footlooseinme.com/wp-content/uploads/2019/08/dsc_0228.jpg?fit=4288%2C2848&ssl=1',
      'https://images.indianexpress.com/2021/08/Aug11-Bom-tiger-3col.jpg?w=389',  // Add more images as needed
    ],
    audioUrl: Audio1,
    fullInfo: `" समंदे तलाश बेकयास"

'आमच्या या कठीण मुलुखात कल्पनेचा घोडा नाचवणे ही अशक्य आहे.

या छत्रपती शिवरायांनी औरंगजेबास लिहिलेल्या एक फारसी पत्रात हा वाक्प्रचार आहे. त्यावरून महाराजांना सह्याद्री प्रती अभिमान दिसून येतो.

साधक्षात इंद्राच्या राजधानीला लाजवेल असे सौंदर्य, असणारा आणि हिमालयाच्या पण खांद्याला खांदा लावायची हिंमत असणारा हाच तो सह्याद्री.

पोर्तुगीज, इंग्रज आणि डच आक्रमकांपासून देशाला वाचविण्यासाठी, स्वराज्याला पूर्णत्व आणण्यासाठी स्वतःच्या सामर्थ्यशाली आरमाराची आवश्यकता महाराजांना जाणवलेली होती. भौगोलिकतेचा अचूक फायदा घेत राजांनी जमिनीवर गनिमी कावा तंत्र अवलंबिलेलं.

सह्याद्रीतील घाटवाटा म्हणजे महाराष्ट्राच्या धमण्या आणि रक्तवाहिन्या, महाराष्ट्राच्या सर्वांगिण विकासात या घाटवाटांचा अतिशय महत्त्वाचा वाटा मग तो प्राचीन अर्थकारणाच रसा व वारसा सांगणारा, दख्खनच्या पठाराची नाळ जगाशी जोडणारा नानेघाट असो वा इगतपूरीचा कसारा, खंडाळा, ताम्हिणी ते अगदी कोल्हापूरच्या फोंडा, आंबोली सह सह्याद्री आणि सातपुड्यातील उभ्या आडव्या घाटवाटांचे जाळे आजही आपले महत्त्व अबाधीत ठेवून आहे.
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
        <h1 className='p-6 text-3xl font-medieval font-bold'>दऱ्याचा राजा</h1>
        {pageData.title}
      
      </motion.h1>
      <div>
        <p className="text-xs text-royal-500 font-serif">{pageData.description}</p>
      </div>
      
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
      <Page2/>
      <Page3/>
    </div>
  );
}

export default Page1;
