import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-red-600 text-white py-3 text-center font-bold text-lg"
      >
        Shivaji Jayanti Special - Celebrating on February 19
      </motion.div>

      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
        {/* Background image with a subtle scale animation */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center
                     bg-[url('https://www.unigreet.com/wp-content/uploads/2020/01/Shivaji-maharaj-banner-pic-768x873.jpg')]
                     md:bg-[url('https://wallpapercollection.net/wp-content/uploads/2018/05/shivaji-maharaj-2.jpg')]"
        />
        {/* Gradient overlay for a dramatic effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl text-white font-extrabold mb-4 text-center"
          >
            Chhatrapati Shivaji Maharaj
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl text-center"
          >
            Honoring the legacy of a visionary leader on this special day.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">The Warrior King</h2>
            <p className="text-base leading-relaxed">
              Chhatrapati Shivaji Maharaj (1630-1680) was the founder of the Maratha Empire, 
              which at its peak covered much of the Indian subcontinent. A skilled warrior and 
              administrator, he established a progressive civil administration and built a powerful 
              naval force.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Legacy</h2>
            <p className="text-base leading-relaxed">
              His legacy continues to inspire millions, embodying the values of courage, 
              justice, and good governance. Shivaji Maharaj's military tactics, administrative 
              systems, and cultural contributions have left an indelible mark on Indian history.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Explore More</h2>
          <p className="text-base leading-relaxed max-w-3xl mx-auto mb-6">
            Discover the fascinating life, achievements, and enduring influence of Chhatrapati Shivaji Maharaj through our comprehensive collection of historical information and media.
          </p>
          <div className="flex flex-col items-center space-y-2">
            <a 
              href="https://en.wikipedia.org/wiki/Shivaji" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              Wikipedia - Chhatrapati Shivaji Maharaj
            </a>
            <a 
              href="https://www.britannica.com/biography/Shivaji" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              Britannica - Chhatrapati Shivaji Maharaj
            </a>
            <a 
              href="https://shivajimaharajfoundation.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              Shivaji Maharaj Foundation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
