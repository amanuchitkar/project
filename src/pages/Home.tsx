import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[60vh] bg-[url('https://upload.wikimedia.org/wikipedia/commons/b/b1/Shivaji_British_Museum.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white font-medieval text-center"
          >
            Chhatrapati Shivaji Maharaj
          </motion.h1>
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
            <h2 className="section-title">The Warrior King</h2>
            <p className="content-text">
              Chhatrapati Shivaji Maharaj (1630-1680) was the founder of the Maratha Empire, 
              which at its peak covered much of the Indian subcontinent. A skilled warrior and 
              administrator, he established a progressive civil administration and built a powerful 
              naval force.
            </p>
          </div>
          <div>
            <h2 className="section-title">Legacy</h2>
            <p className="content-text">
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
          <h2 className="section-title">Explore More</h2>
          <p className="content-text max-w-3xl mx-auto">
            Discover the fascinating life, achievements, and enduring influence of 
            Chhatrapati Shivaji Maharaj through our comprehensive collection of 
            historical information and media.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;