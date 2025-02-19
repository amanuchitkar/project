import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Audio1 from '../assets/audio/Page7.mp3'


function Page7() {
  // Define the page data, which includes multiple images
  const pageData = {
    title: 'विजयदुर्गाच्या साक्षीने इंग्रज-आंग्रे संघर्ष',
    description: '',
    images: [
      'https://www.hindujagruti.org/wp-content/uploads/2017/01/sindudurg1.jpg',  // Add more images as needed
    ],
    audioUrl: Audio1,
    fullInfo: `वॉल्टर ब्राऊन मुंबईहून 'लंडन', 'व्हिक्टोरिया' व 'रिव्हेंज' ही जहाजे घेऊन निघाला व दोन दिवसांत विजयदुर्गासमोर येऊन उभा ठाकला. त्यानंतर १५ दिवसांत 'डिफेन्स', 'एलिझाबेथ', 'फ्राहम' ही आणखी तीन जहाजे पहिल्या जहाजांना येऊन मिळाली. परंतु विजयदुर्गाचे तटबंदीचे दगड सरळ उभे बसवले होते, तसेच समुद्राच्या सान्निध्यामुळे घसरडे झाले होते. त्यामुळे शिड्या लावून सैनिक वर चढवणे इंग्रजांना शक्यच नव्हते. दोन दिवसांच्या निष्फळ तोफमाऱ्यानंतर गॉर्डन आपले ५० सैनिक घेऊन जमिनीवर पायउतार झाला. जरा दूरच्या रस्त्याने विजयदुर्गाकडे येऊ लागला. त्याचवेळी फ्राहम है जहाज किल्ल्याच्या जवळ येऊन, तोफगोळ्यांचा जोरदार हल्ला करण्यासाठी पाठवण्यात आले. टेकडीवरील इमारतीचा ताबा घेणाऱ्या गार्डनच्या सैनिकांनी शेवटी माघार घेतली. 'फ्राहम' या जहाजाच्या बेडर सैनिकांनी आंग्ग्रांची दोन मोठी व कित्येक लहान जहाजे जाळून टाकली, ही जहाजे सुरक्षित स्थळी हलवण्यास आंग्रे यांना अवधी मिळाला नव्हता. फ्राहमने केलेल्या माऱ्यामुळे आंग्ग्रांच्या एका मोठ्या जहाजावरील दारुगोळ्याने पेट घेतला. त्यात आंग्ग्रांची एक पलटण नष्ट झाली. इतके झाले तरी विजयदुर्गावरून जो तिखट प्रतिकार इंग्रजांना होत होता त्यात थोडाही बदल झाला नाही. याव्यतिरिक्त आंग्ग्रांची छोटी जहाजे इंग्रज जहाजांना सतत त्रास देत होतीच. दिवसेंदिवस इंग्रजांचे नुकसान वाढत होते.

त्याचवेळी वाडीच्या खेमसावंतांनी ५०० पायदळ व ५०० घोडदळ घेऊन आंग्ग्रांच्या मुलुखावर हल्ला केला. खेमसावंतानी हल्ला केला तर ब्राऊनला जादा कुमक मुंबईहून पाठवून द्यायची अशी मुंबईच्या गव्हर्नरची आज्ञा होती. ठरल्याप्रमाणे खेमसावंतानी आंग्ग्रांच्या मुलूखावर हल्ला करून आजूबाजूचा प्रदेश बेचिराख केला. आंग्ग्रांची चार जहाजे बुडवली. इतके झाले तरी कान्होजीवर काही परिणाम झाला नव्हता. आंग्ग्रांच्या प्रतिकारात जरासुद्धा डळमळीतपणा आला आहे असे इंग्रजांना जाणवेना. सरतेशेवटी विजयदुर्गाचा वेढा उठविण्याचा निर्णय गव्हर्नर बूनने घेतला.
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

export default Page7;
