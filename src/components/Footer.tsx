function Footer() {
  return (
    <footer className="bg-royal-800 text-royal-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medieval text-xl mb-4">About</h3>
            <p className="text-royal-200">
              Dedicated to preserving and sharing the legacy of Chhatrapati Shivaji Maharaj,
              a legendary warrior king and visionary leader.
            </p>
          </div>
          <div>
            <h3 className="font-medieval text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-royal-300 transition-colors">Home</a></li>
              <li><a href="/information" className="hover:text-royal-300 transition-colors">Information</a></li>
              <li><a href="/gallery" className="hover:text-royal-300 transition-colors">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medieval text-xl mb-4">Contact</h3>
            <p className="text-royal-200">
              For historical inquiries and contributions, please reach out to us.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-royal-700 text-center">
          <p className="text-royal-300">
            © {new Date().getFullYear()} Shivaji Maharaj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;