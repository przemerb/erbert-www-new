import { motion } from 'framer-motion';
import { ExternalLink, FileText, Download, Shield } from 'lucide-react';

export default function DocumentsPage() {
  const partners = [
    { name: "Laboratorium Diagnostyka", url: "https://diag.pl/pacjent/" },
    { name: "Laboratorium Medicina", url: "https://mojebadanie.pl/" },
    { name: "Laboratorium Alab", url: "https://www.alablaboratoria.pl/" },
    { name: "Szpital w Kluczborku", url: "https://pczszpitalkluczbork.pl/18/strona-glowna.html" },
    { name: "Przychodnia Jagiellonka w Kluczborku", url: "https://jagiellonka.kluczbork.pl/" },
    { name: "Centrum Onkologii w Gliwicach", url: "https://www.io.gliwice.pl/" },
    { name: "Pracownia Histopatologiczna w Opolu", url: "https://hist-pat.opole.pl/" },
    { name: "Pododdział Endokrynologii Szpitala Wojewódzkiego w Opolu", url: "https://szpital.opole.pl/pododdzial-endokrynologii/" },
    { name: "Pododdział Endokrynologii USK w Opolu", url: "https://www.usk.opole.pl/92/pododdzial-chorob-wewnetrznych-endokrynologii-i-diabetologii.html" },
    { name: "Poradnia Medycyny Nuklearnej w Opolu", url: "https://szpital.opole.pl/zaklad-medycyny-nuklearnej/" },
    { name: "Poradnia Genetyczna we Wrocławiu", url: "https://www.fundacjaam.pl/poradnia_genetyczna.html" },
    { name: "Oddział Chirurgiczny MSWiA w Opolu", url: "https://www.gov.pl/web/spzoz-mswia-opole/szpital-sp-zoz-mswia-w-opolu" },
    { name: "Oddział Kliniczny Chirurgii Ogólnej i Endokrynologicznej w Bytomiu", url: "https://www.szpital2.bytom.pl/index.php?option=com_content&view=article&id=134&Itemid=999" },
    { name: "Pracownia Rezonansu Magnetycznego w Opolu", url: "https://www.helimed.pl/" },
  ];

  return (
    <div className="w-full pb-24 pt-12 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
          >
            Dokumenty i Współpraca
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-1.5 bg-brand mx-auto rounded-full mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Ważne informacje dla pacjentów oraz lista współpracujących podmiotów medycznych.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Prawa i Regulaminy */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <a 
              href="/RODO.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white p-6 sm:p-8 rounded-[30px] shadow-lg border border-slate-100 flex flex-col items-center justify-center text-center hover:border-brand hover:shadow-xl transition-all flex-1"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Informacja RODO</h3>
              <p className="text-slate-500 mb-6">Polityka prywatności i przetwarzanie danych osobowych w gabinecie.</p>
              <div className="flex items-center gap-2 text-brand font-bold mt-auto">
                <Download size={20} />
                Pobierz PDF
              </div>
            </a>

            <a 
              href="https://www.nfz.gov.pl/dla-pacjenta/prawa-pacjenta/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white p-6 sm:p-8 rounded-[30px] shadow-lg border border-slate-100 flex flex-col items-center justify-center text-center hover:border-brand hover:shadow-xl transition-all flex-1"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                <FileText size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Prawa Pacjenta</h3>
              <p className="text-slate-500 mb-6">Oficjalne informacje z Narodowego Funduszu Zdrowia.</p>
              <div className="flex items-center gap-2 text-brand font-bold mt-auto">
                <ExternalLink size={20} />
                Strona NFZ
              </div>
            </a>
          </motion.div>

          {/* Podmioty Medyczne */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 bg-white p-6 sm:p-8 md:p-12 rounded-[40px] shadow-xl border border-slate-100"
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-4">
              Podmioty Współpracujące
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {partners.map((partner, idx) => (
                <a 
                  key={idx}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors group"
                >
                  <span className="font-medium text-slate-700 group-hover:text-brand transition-colors">
                    {partner.name}
                  </span>
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-brand" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
