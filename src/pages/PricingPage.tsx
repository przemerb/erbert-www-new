import { motion } from "framer-motion";
import { Stethoscope, Activity, Syringe, Check, Plus } from "lucide-react";
import SEO from "../components/SEO";

export default function PricingPage() {
  return (
    <>
      <SEO
        title="Cennik Usług"
        description="Cennik wizyt endokrynologicznych w Kluczborku. Wizyta pierwszorazowa, wizyta kontrolna oraz biopsja tarczycy. Prywatna praktyka lekarska Grzegorz Erbert."
        canonical="https://erbert.pl/cennik"
      />
    <div className="w-full pb-24 pt-12 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
          >
            Cennik Usług
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-1.5 bg-brand mx-auto rounded-full mb-8"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pakiet 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl sm:rounded-[40px] shadow-xl overflow-hidden border border-slate-100 flex flex-col"
          >
            <div className="p-6 sm:p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Wizyta Pierwszorazowa
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Konsultacja + USG tarczycy
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mb-8 py-6 bg-slate-50 rounded-3xl">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand mb-2">
                    <Stethoscope size={28} />
                  </div>
                </div>
                <Plus className="text-slate-300" size={20} />
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand mb-2">
                    <Activity size={28} />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold text-brand text-center">
                  350<span className="text-xl text-slate-500 ml-1">zł</span>
                </div>
              </div>

              <ul className="space-y-4 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-600 text-sm">
                    Szczegółowy wywiad medyczny
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-600 text-sm">
                    Pełne USG tarczycy z opisem
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Pakiet 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl sm:rounded-[40px] shadow-xl overflow-hidden border border-slate-100 flex flex-col"
          >
            <div className="p-6 sm:p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Wizyta Kontrolna
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Monitorowanie przebiegu leczenia
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 mb-8 py-6 bg-slate-50 rounded-3xl">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand mb-2">
                    <Stethoscope size={32} />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold text-brand text-center">
                  300<span className="text-xl text-slate-500 ml-1">zł</span>
                </div>
              </div>

              <ul className="space-y-4 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-600 text-sm">
                    Analiza nowych wyników badań
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-600 text-sm">
                    Dostosowanie dawki leków
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Pakiet 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl sm:rounded-[40px] shadow-xl overflow-hidden border border-slate-100 flex flex-col"
          >
            <div className="p-6 sm:p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Biopsja
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Precyzyjne badanie guzków (BACC)
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 mb-8 py-6 bg-slate-50 rounded-3xl">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand mb-2">
                    <Syringe size={32} />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold text-brand text-center">
                  400<span className="text-xl text-slate-500 ml-1">zł</span>
                </div>
              </div>

              <ul className="space-y-4 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-600 text-sm">
                    Pobranie materiału pod kontrolą USG
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                    <Check size={16} />
                  </div>
                  <span className="text-slate-600 text-sm">
                    Badanie histopatologiczne
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-6">
            Płatność w gabinecie jest możliwa gotówką oraz kartą płatniczą.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
