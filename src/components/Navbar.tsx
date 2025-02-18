import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInfoMenuOpen, setInfoMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    {
      label: 'Information',
      subLinks: [
        { path: '/page1', label: 'दऱ्याचा राजा' },
        { path: '/page2', label: 'जलपती' },
        { path: '/page3', label: 'दर्यापती' },
        { path: '/page4', label: 'किल्ले विजयदुर्ग' },
        { path: '/page5', label: 'तोरणा किल्ला' },
        { path: '/page6', label: 'Page 6' },
        { path: '/page7', label: 'Page 7' },
        { path: '/page8', label: 'Page 8' },
      ],
    },
    { path: '/gallery', label: 'Gallery' },
  ];

  return (
    <nav className="bg-royal-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-medieval text-xl text-royal-800">
            Chhatrapati Shivaji Maharaj
            </Link>
          </div>
          {/* Desktop Links */}
          <div className="hidden sm:flex items-center">
            {links.map((link, index) => (
              link.subLinks ? (
                <div key={index} className="relative">
                  <button
                    onClick={() => setInfoMenuOpen(!isInfoMenuOpen)}
                    className="px-4 py-2 text-royal-800 flex items-center"
                  >
                    {link.label}
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform transform ${isInfoMenuOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isInfoMenuOpen && (
                    <div className="absolute top-full left-0 bg-royal-100 z-10 w-full shadow-lg rounded-md">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          className={`block px-4 py-2 ${location.pathname === subLink.path ? 'bg-royal-500 text-white' : 'text-royal-800 hover:bg-royal-200'}`}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 nav-link"
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-500"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              )
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-royal-800 hover:bg-royal-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-royal-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link, index) => (
              link.subLinks ? (
                <div key={index} className="relative">
                  <button
                    onClick={() => setInfoMenuOpen(!isInfoMenuOpen)}
                    className="block px-3 py-2 text-royal-800 hover:bg-royal-200 w-full text-left flex items-center justify-between"
                  >
                    {link.label}
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform transform ${isInfoMenuOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isInfoMenuOpen && (
                    <div className="pl-4">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === subLink.path ? 'bg-royal-500 text-white' : 'text-royal-800 hover:bg-royal-200'}`}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? 'bg-royal-500 text-white' : 'text-royal-800 hover:bg-royal-200'}`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
