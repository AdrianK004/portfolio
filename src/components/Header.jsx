import { useState, useEffect } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Statics', href: '#statics' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900 rounded-b-3xl' 
          : 'bg-transparent'
      }`}>
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="flex justify-between items-center py-4">
            <a href="#home" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              AK
            </a>

            <div className="hidden md:flex gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 transition-all duration-200 font-medium text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

        <>
        
        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-20 left-4 right-4 rounded-2xl z-[999] 
                        bg-black/60 
                        backdrop-blur-md 
                        border border-white/5
                        shadow-xl
                        transition-all duration-300 ease-out
                        ${isMobileMenuOpen 
                          ? 'opacity-100 translate-y-0 pointer-events-auto' 
                          : 'opacity-0 -translate-y-8 pointer-events-none '}`}$>
          <div className="flex flex-col items-center gap-5 py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-blue-400 hover:scale-105 transition-all duration-200 font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </>
      </header>
    </>
  );
}

export default Header;