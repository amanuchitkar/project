import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Audio1 from '../assets/audio/Page5.mp3';

function Page5() {
  // Define the page data, which includes multiple images
  const pageData = {
    title: 'तोरणा किल्ला',
    description: 'तोरणा हा भारताच्या महाराष्ट्र राज्यातील सह्याद्री पर्वतरांगांमधील डोंगरी किल्ला आहे',
    images: [
      'https://staticimg.amarujala.com/assets/images/2019/02/03/torna-fort_1549185169.jpeg',
      'https://staticimg.amarujala.com/assets/images/2019/02/03/torna-fort_1549185169.jpeg',
      'https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/464302875_27534705986145276_6774211333405175073_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=queZ6l3Td-EQ7kNvgFPuALZ&_nc_oc=Adhh4jj-PT19lsKkx5O1_QiMyV9n063M3rkHQh-7XbhdfFUYF_KRwRamWWu7Q66heBI&_nc_zt=23&_nc_ht=scontent-bom2-2.xx&_nc_gid=AG_enJjHXut9-q3WhKXQewx&oh=00_AYCysXim0rmDrBgCz_vCBNPyK63oEIg-nNy9vxE9ATTdWQ&oe=67BAD0A8',  // Add more images as needed
    ],
    audioUrl: Audio1,
    fullInfo: `छत्रपती शिवाजी महाराजांनी स्वराज्य स्थापना करीत असताना इ.स. १६४७ मध्ये सर्वप्रथम घेतलेला हा किल्ला आहे. छत्रपती शिवाजी महाराजांनी हा किल्ला घेऊन स्वराज्याचे तोरण बांधले म्हणून या किल्ल्याचे नाव तोरणा किल्ला असे ठेवण्यात आले.
 महाराजांनी गडाची पाहणी करताना त्याच्या प्रचंड विस्तारामुळे याचे नाव बदलून 'प्रचंडगड' असे ठेवले. या किल्ल्यावर सापडलेल्या धनाचा उपयोग शिवाजी महाराजांनी राजगडाच्या बांधणीसाठी केला.

तोरणा किल्ला कधी आणि कोणी बांधला याचा पुरावा आज उपलब्ध नाही. येथील लेण्यांच्या आणि मंदिरांच्या अवशेषांवरून हा शैवपंथाचा आश्रम असावा. इ. स. १४७० ते १४८६ च्या दरम्यान बहामनी राजवटीसाठी मलिक अहमद याने हा किल्ला जिंकला. पुढे हा किल्ला निजामशाहीत गेला. नंतर तो शिवाजी महाराजांनी घेतला व याचे नाव प्रचंडगड ठेवले आणि गडावर काही इमारती बांधल्या. महाराजांनी आग्र्याहून आल्यावर अनेक गडांचा जीर्णोद्धार केला. त्यात ५ हजार होन इतका खर्च त्यांनी तोरण्यावर केला. संभाजी महाराजांची निर्घृण हत्या झाल्यावर हा किल्ला मोगलांकडे गेला. शंकराजी नारायण सचिवांनी तो परत मराठ्यांच्या ताब्यात आणला. पुढे इ. स. १७०४ मध्ये औरंगजेबाने याला वेढा घातला व लढाई करून आपल्या ताब्यात आणला व याचे नाव फुतुउल्गैब म्हणजे दैवी विजय ठेवले. पण परत चार वर्षांनी सरनोबत नागोजी कोकाटे यांनी गडावर लोक चढवून गड पुन्हा मराठ्यांच्या ताब्यात आणला व यानंतर तोरणा कायम स्वराज्यातच राहिला. पुरंदरच्या तहात जे किल्ले मोगलांना दिले त्यामध्ये तोरणा महाराजांकडेच राहिला होता. विशेष म्हणजे औरंगजेब बादशहाने लढाई करून जिंकलेला असा हा मराठ्यांचा एकमेव किल्ला होय. तोरणा गडावर मेंगाई देवीचे प्राचीन मंदिर आहे.
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

export default Page5;
