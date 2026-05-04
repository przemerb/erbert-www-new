import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import DocumentsPage from './pages/DocumentsPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Symulacja ładowania dla czystego efektu wejścia
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] bg-slate-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, filter: 'blur(8px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <img 
                src="/assets/images/logo_ciemne.svg" 
                alt="Logo Endokrynolog Grzegorz Erbert" 
                className="h-16 md:h-24 lg:h-28 drop-shadow-sm"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cennik" element={<PricingPage />} />
          <Route path="dokumenty" element={<DocumentsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
