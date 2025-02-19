import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Audio1 from '../assets/audio/Page4.mp3'


function Page4() {
  // Define the page data, which includes multiple images
  const pageData = {
    title: 'किल्ले विजयदुर्ग',
    description: '',
    images: [
      'https://tourmet.com/wp-content/uploads/2014/05/vijaydurg-fort2.jpg',
      'https://durgbharari.in/wp-content/uploads/2020/11/Vijaydurg.jpg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhiEuyaKk4l_Fprud-Nf_hR0csDjWs8rCuArqY1pQF9NqGzE9JhRJKs4eg33jIDcHiVzLjTcG4gJ7030dEUzCim1K1OuyGKd096paa6KMer6KSYWoRFdXOEVwEFiaO59LCuuSdNScab_1-H8WCR8P-5ED-nb6HUql4IG2_mMyPyRuyPyUKQVLyfEWAX5Rg/w400-h248/Vijaydurg%20Fort%203.jpg',
      'https://hindi.holidayrider.com/wp-content/uploads/2019/08/compressed-xcz9.jpg',  // Add more images as needed
    ],
    audioUrl:Audio1,
    fullInfo: `सिंधुदुर्ग जिल्हातील देवगड तालुक्यात 'विजयदुर्ग" हा अतिशय बळकट किल्ला उभा आहे. तीन बाजूना पाणी आणि एका बाजूला खुक्कीचा म्हणजे जमिनीचा मार्ग, अशी विशिष्ट भौगोलिक रचना असल्यामुळे हा विजयदुर्ग नैसर्गिकरीत्या बेलाग झाला आहे. विजयदुर्गाची बांधणी ही रेखीव आहे एकापाठोपाठ एक अशी तिहेरी तटबंदी किल्ल्याला अधिकाधिक मजबूत करत आहे. सत्तावीस बुलंद बुरुजांनी हा किल्ला वेढलेला आहे. ह्यातील काही बुरूज तर तिमजली आहेत. घनचक्कर, गोविंद, मनरंजन, सदारिव, सर्जा, व्यंकट, शाह, रिकरा, दर्या, राम, गणेश अशी त्यांतील काहीं बुरुजांची नावे आहेत.

विजयदुर्गला छुपे दरवाजे आहेत. त्यातलाच आहे जिभीचा दरवाजा जिभी म्हणजे लाकडी दरवाजापुढे रचलेली दगडाची तटबंदी. द्याला हस्तीनख असेही म्हणतात. दहा-बारा एकर क्षेत्रफळात हा दुर्ग सामावला आहे. विजयदुर्गला पूर्वेकडील जिब्राल्टर असेही म्हणत कारण हा एक अजिंक्य किल्ला होता. ४० किलोमीटर लांब असलेली वाघोटन खाडी हे या किल्ल्याचे बलस्थान आहे.

विजयदुर्ग हा किल्ला ११ व्या शतकाच्या अखेरीस शिलाहार घराण्यातील राजा भोजने बांधला. पुढे तो बहामनी व नंतर आदिलशाहीच्या ताब्यात होता. छत्रपती शिवाजी महाराजांनी १६६४ च्या ऑक्टोबर-नोव्हेंबरमध्ये विजयदुर्ग किल्ला जिंकला आणि त्याचं नामकरण केलं, 'विजयदुर्ग'. गिर्याचा किल्ला म्हणुन ह्या दुर्गाला 'घेरिया' असेही म्हणत.

लंडन नावाचं चाळीस तोफांचं लढाऊ, चाळीस तोफांचीच चांडोस, सव्वीस तोफांचं व्हिक्टरी, सव्वीस तोफांचं व्हिक्टरी, अठरा तोफांचं रिव्हेंज, १६ तोफांचं पेलहॅम तसंच १६ तोफांचं डिफायन्स, टेरिबल बॉम्ब नावाचं एक बॉम्ब फेकणारं जहाज आणि इतर अनेक गलबतं, शिबाड, तिरकाट्या, अश्या कित्येक लढाऊ जहाज घेऊन इंग्रज, डच, पोर्तुगीजांनीविजयदुर्गाला वेढा घातला. पण त्यांना कधीच विजयदुर्ग जिकंता आला नाही.

सरखेल कान्होजी आंग्रे आणि त्यांचे पुत्र संभाजी आंग्रे व तुळोजी आंग्रे यांच्या ताब्यात हा किल्ला इ.स. १७५६ पर्यंत होता. पेशवे व इंग्रज यांच्या संयुक्त सैन्याने १३ फेब्रुवारी १७५६ रोजी तुळाजी आंग्रे यांच्या सैन्याचा पराभव करून विजयदुर्ग ताब्यात घेतला. इंग्रज-पेशवे करारानुसार विजयदुर्ग पेशव्यांना देण्याचे ठरले होते परंतु इंग्रज सहजासहजी त्याला तयार झाले नाहीत. अखेर बाणकोट किल्ला व त्या जवळील सात गावे पेशव्यांकडून घेऊन इंग्रजांनी विजयदुर्ग आठ महिन्यानंतर पेशव्यांना दिला. पेशव्यांनी विजयदुर्गाचा प्रांत व सुभेदारी आनंदराव धुळप यांना दिली. १६६४ ते १८१८ पर्यंत या किल्ल्यावर मराठी अंमल होता. त्यानंतर हा किल्ला इंग्रजांनी ताब्यात घेतला.
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

export default Page4;
