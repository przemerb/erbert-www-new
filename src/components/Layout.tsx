import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const openModal = () => setShowPhoneModal(true);
    window.addEventListener('openPhoneModal', openModal);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openPhoneModal', openModal);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    
    if (location.hash) {
      // Krótkie opóźnienie, aby pozwolić Reactowi wyrenderować nową stronę (np. przechodząc z /cennik)
      setTimeout(() => {
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const navLinks = [
    { name: 'O mnie', path: '/#about_me' },
    { name: 'Opinie', path: '/#reviews' },
    { name: 'Lokalizacja', path: '/#location' },
    { name: 'Dokumenty', path: '/dokumenty' },
    { name: 'Cennik', path: '/cennik' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-roboto bg-slate-50">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm lg:h-20 h-16' : 'bg-white lg:h-28 h-20 lg:rounded-b-[40px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center h-full py-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/assets/images/logo_ciemne.svg" 
              alt="Logo Endokrynolog Grzegorz Erbert" 
              width={518}
              height={151}
              className={`transition-all duration-300 ${scrolled ? 'h-10 lg:h-12' : 'h-14 lg:h-20'}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-slate-600 hover:text-brand font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={() => setShowPhoneModal(true)}
              className="bg-brand hover:bg-brand-hover transition-colors text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <Phone size={18} />
              Zadzwoń
            </button>
          </nav>

          <button
            className="lg:hidden p-2 text-slate-600 hover:text-brand transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-4 flex flex-col"
          >
            <nav className="flex flex-col gap-2 items-center text-xl mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-bold text-slate-800 hover:text-brand transition-colors py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+48576672014"
                className="mt-8 bg-brand text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-brand-hover shadow-lg flex items-center gap-3 w-full justify-center"
              >
                <Phone size={24} />
                Zadzwoń
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phone Modal */}
      <AnimatePresence>
        {showPhoneModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPhoneModal(false)}
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[40px] p-8 md:p-16 max-w-lg w-full text-center shadow-2xl relative my-auto"
            >
              <button 
                onClick={() => setShowPhoneModal(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-slate-800 transition-colors bg-slate-100 p-2 rounded-full"
                aria-label="Zamknij okno"
              >
                <X size={24} />
              </button>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                <Phone size={32} className="md:w-10 md:h-10" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">Rejestracja Telefoniczna</h2>
              <p className="text-slate-500 mb-6">Zadzwoń, aby umówić się na wizytę.</p>
              <div className="text-3xl md:text-5xl font-bold text-brand tracking-wider mb-8">
                576 672 014
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 text-slate-800 bg-slate-50 py-4 sm:py-5 px-6 sm:px-8 rounded-[2rem] mx-auto w-fit border border-slate-100 shadow-sm">
                <div className="bg-brand/10 p-3 rounded-full text-brand">
                  <Clock size={28} />
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Godziny rejestracji</span>
                  <span className="font-medium text-slate-700 text-lg">
                    Pon. - Pt. <strong className="text-slate-900 ml-1">8:00 - 16:00</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20 md:pt-24">
        <Outlet />
      </main>

      <footer className="bg-slate-800 text-white mt-24 md:mt-32 lg:rounded-t-[50px] pt-16 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <Link 
              to="/" 
              className="flex items-center h-full"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="/assets/images/logo_jasne.svg" 
                alt="Logo Endokrynolog Grzegorz Erbert" 
                width={336}
                height={115}
                className="h-16 lg:h-20 opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <ul className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-4 md:gap-x-8 md:gap-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-brand transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} Prywatna Praktyka Lekarska Grzegorz Erbert.</p>
            <p>Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
