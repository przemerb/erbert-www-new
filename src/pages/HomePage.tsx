import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Stethoscope,
  Activity,
  Syringe,
  ExternalLink,
  Heart,
} from "lucide-react";
import SEO from "../components/SEO";
import LocalBusinessSchema from "../components/LocalBusinessSchema";

export default function HomePage() {
  const reviews = [
    {
      name: "Barbara Juszczak",
      text: "Pan Doktor Erbert to przemiły, rzetelny, profesjonalny lekarz z powołania. Z sercem i zaangażowaniem oraz troską podchodzi do pacjenta, wszystko wytłumaczy. Polecam z całego serca.",
      stars: 5,
    },
    {
      name: "Barbara Matusiak",
      text: "Polecam Pana doktora Grzegorza Erberta. Daję 5 gwiazdek, ale Pan doktor zasługuje na więcej. Jest bardzo miły, wysłucha pacjenta, wytłumaczy jeśli się pacjent o coś zapyta.",
      stars: 5,
    },
    {
      name: "Beata",
      text: "Fantastyczny lekarz. Bardzo fajnie wszystko wytłumaczył i o wszystkim poinformował. Polecam !!!",
      stars: 5,
    },
    {
      name: "Monika Oso",
      text: "Wszystko w najlepszym porządku. Co najważniejsze wysłucha i doradzi. Polecam !!!",
      stars: 5,
    },
    {
      name: "Grzegorz Lepszy",
      text: "Byłem z matką na poradzie i biopsji tarczycy. Pan doktor pod każdym względem jest mistrzem w swoim podejściu do pacjenta i zawodu który wykonuje. Kultura i podejście do człowieka 6+.",
      stars: 5,
    },
    {
      name: "Basia Grygier",
      text: "Polecam serdecznie bardzo miły lekarz, wysłucha doradzi. Po tylu endokrynologach w końcu chyba znalazłam właściwego.",
      stars: 5,
    },
    {
      name: "Marta Pałyga",
      text: "Pan Doktor to Profesjonalista w każdym calu. Rzeczowo i zrozumiale odpowiada na każde pytanie, bez pośpiechu wyjaśniając Pacjentowi wszystkie niejasności. Wieloletnia już współpraca.",
      stars: 5,
    },
    {
      name: "Mos Kit",
      text: "Przemiły lekarz i bardzo dobry specjalista, serdecznie polecam.",
      stars: 5,
    },
    {
      name: "Sławomir Jurczyk",
      text: "Szczerze, otwarcie można porozmawiać, na każde pytanie odpowie bardzo obszernie, zrozumiale, bardzo polecam, świetny lekarz.",
      stars: 5,
    },
    {
      name: "Natalia Parzonka",
      text: "Lekarz z którym można od serca porozmawiać, bardzo okej. Polecam.",
      stars: 5,
    },
  ];

  return (
    <>
      <SEO
        title="Endokrynolog Grzegorz Erbert"
        description="Grzegorz Erbert – Endokrynolog w Kluczborku. Specjalizuję się w diagnozowaniu i leczeniu schorzeń hormonalnych, oferując indywidualne podejście do każdego pacjenta."
        canonical="https://erbert.pl/"
      />
      <LocalBusinessSchema />
      <div className="w-full pb-16">
      {/* Hero Section */}
      <section className="relative -mt-20 md:-mt-24 min-h-[85vh] md:min-h-[90vh] flex items-end md:items-center overflow-hidden mb-12 md:mb-20">
        <img
          src="/assets/images/background.jpg"
          alt="Tło gabinetu"
          className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/20 md:bg-gradient-to-r md:from-slate-900/80 md:via-slate-900/50 md:to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 md:pb-24 pt-36 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Prywatna Praktyka Endokrynologiczna
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed drop-shadow-md">
              Kompleksowa opieka w zakresie diagnostyki i leczenia zaburzeń
              hormonalnych. USG i biopsja tarczycy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+48576672014"
                onClick={(e) => {
                  if (window.innerWidth >= 768) {
                    e.preventDefault();
                    window.dispatchEvent(new Event("openPhoneModal"));
                  }
                }}
                className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-colors font-bold text-lg shadow-lg"
              >
                <Phone size={20} />
                Zadzwoń
              </a>
              <a
                href="#services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-colors font-bold text-lg border border-white/30"
              >
                Zobacz usługi
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Usługi Section */}
      <section
        id="services"
        className="py-20 bg-white scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Moje Usługi
            </h2>
            <div className="w-24 h-1.5 bg-brand mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Stethoscope size={48} />,
                title: "Konsultacja Endokrynologiczna",
                desc: "Kompleksowa ocena stanu zdrowia, analiza wyników badań i dobór odpowiedniego leczenia.",
              },
              {
                icon: <Activity size={48} />,
                title: "USG Tarczycy",
                desc: "Nowoczesna diagnostyka obrazowa pozwalająca na precyzyjną ocenę struktury tarczycy.",
              },
              {
                icon: <Syringe size={48} />,
                title: "Biopsja Tarczycy",
                desc: "Małoinwazyjne badanie guzków tarczycy wykonywane pod kontrolą USG.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 sm:p-10 rounded-[30px] flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="w-24 h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O mnie */}
      <section
        id="about_me"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 md:scroll-mt-28"
      >
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand/10 rounded-[30px] md:rounded-[40px] transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"></div>
              <img
                src="/assets/images/profile_picture.jpg"
                alt="Grzegorz Erbert"
                className="relative rounded-[30px] md:rounded-[40px] shadow-lg max-w-md w-full object-cover aspect-square"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Kilka słów o mnie
            </h2>
            <div className="w-20 h-1.5 bg-brand rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Nazywam się <strong>Grzegorz Erbert</strong> i jestem
              endokrynologiem oraz specjalistą chorób wewnętrznych. Ukończyłem
              studia na Uniwersytecie Medycznym we Wrocławiu. Posiadam
              doświadczenie w diagnozowaniu i leczeniu zaburzeń hormonalnych.
              Moim celem jest zapewnienie pacjentom kompleksowej opieki
              zdrowotnej. Serdecznie zapraszam do kontaktu!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opinie */}
      <section
        id="reviews"
        className="py-20 bg-slate-800 text-white overflow-hidden scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Co mówią pacjenci
            </h2>
            <div className="w-24 h-1.5 bg-brand mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden mb-12">
          <div className="flex gap-6 animate-marquee w-max">
            {[...reviews, ...reviews].map((review, idx) => (
              <div
                key={idx}
                className="bg-slate-700/50 p-8 rounded-3xl backdrop-blur-sm border border-slate-600 flex flex-col h-full w-[320px] sm:w-[400px] shrink-0"
              >
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-300 italic mb-8 flex-grow">
                  "{review.text}"
                </p>
                <div className="font-bold text-lg">{review.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.google.com/search?q=Endokrynolog+Grzegorz+Erbert+Kluczbork+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Star size={20} fill="currentColor" />
              <span className="font-bold text-lg">Google Maps</span>
              <ExternalLink
                size={18}
                className="opacity-70 group-hover:opacity-100"
              />
            </a>

            <a
              href="https://www.znanylekarz.pl/grzegorz-erbert/endokrynolog-internista/kluczbork"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Heart size={20} />
              <span className="font-bold text-lg">ZnanyLekarz</span>
              <ExternalLink
                size={18}
                className="opacity-70 group-hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Lokalizacja */}
      <section
        id="location"
        className="pt-20 pb-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 md:scroll-mt-28"
      >
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100 p-4 lg:p-0">
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Lokalizacja gabinetu
            </h2>
            <div className="w-20 h-1.5 bg-brand rounded-full mb-10"></div>

            <div className="flex items-start gap-4 mb-8">
              <div className="bg-brand/10 p-3 rounded-2xl text-brand shrink-0">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Adres</h4>
                <p className="text-lg text-slate-600">
                  ul. Waryńskiego 4/4
                  <br />
                  46-200 Kluczbork
                </p>
                <p className="text-slate-500 mt-2 italic text-sm">
                  (wejście za przychodnią "Medyk")
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand/10 p-3 rounded-2xl text-brand shrink-0">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  Godziny przyjęć
                </h4>
                <p className="text-lg text-slate-600">
                  Zgodnie z wcześniejszą rejestracją telefoniczną.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-auto relative rounded-3xl overflow-hidden shadow-inner">
            <iframe
              title="Mapa dojazdu do gabinetu endokrynologicznego Grzegorz Erbert w Kluczborku"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.196297179876!2d18.20852197658837!3d50.9755621716972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47106105c84ea6a9%3A0xa4637ae05c2bea27!2sEndokrynolog%20-%20lek.%20med.%20Grzegorz%20Erbert!5e0!3m2!1sen!2spl!4v1721225228999!5m2!1sen!2spl"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
