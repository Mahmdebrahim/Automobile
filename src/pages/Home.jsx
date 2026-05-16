import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import BrandMarquee from "../components/BrandMarquee";
import heroImg from "../assets/17.jpg";
import { useNavigate } from "react-router-dom";
import carsData from "../data/cars.json";
import { useState } from "react";
import CarCard from "../components/CarCard";
import { Link } from "react-router-dom";
import { MapPinPlusInside } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [cars] = useState(carsData);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-linear-to-b from-very-light-blue to-white">
        <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div>
            <h1 className="mb-6">Ihre KFZ-Ankaufstation in Chemnitz</h1>
            <p className="mb-8 text-dark-mauve text-xl">
              In wenigen Schritten bewerten wir Ihr Fahrzeug und garantieren
              Ihnen einen fairen Ankaufspreis in Chemnitz.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/fahrzeuge")}
              >
                Unsere Fahrzeuge
              </button>
              <button className="btn btn-secondary">
                <a href="#kontakt" className="scroll-smooth">
                  Kontakt
                </a>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-full overflow-hidden shadow-elevation-2 aspect-square max-w-[500px]">
              <img
                src={heroImg}
                alt="Auto Ankauf Chemnitz"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-12 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-premium-red font-bold tracking-[2px] text-sm mb-4 uppercase">
              Service
            </p>
            <h2 className="mb-6 text-4xl md:text-5xl">
              Ihr Rundum-Sorglos-Paket
            </h2>
            <p className="text-dark-mauve text-lg">
              Erleben Sie bei Automobile Schönau ein einzigartiges Kauferlebnis,
              bei dem Auswahl, Transparenz und persönlicher Service Ihr
              Fahrzeugkauf zu einem unvergesslichen Abenteuer machen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-light-lavender rounded-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="w-16 h-16 bg-premium-red rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(229,36,33,0.3)] shrink-0 border-[3px] border-red-100">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">
                  telefonische Beratung
                </h3>
                <p className="text-dark-mauve leading-relaxed text-sm md:text-base">
                  Unser Team steht Ihnen gerne telefonisch zur Verfügung, um Sie
                  umfassend zu beraten und Ihnen bei der Auswahl Ihres perfekten
                  Fahrzeugs zu helfen.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-light-lavender rounded-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="w-16 h-16 bg-premium-red rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(229,36,33,0.3)] shrink-0 border-[3px] border-red-100">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">
                  flexible Finanzierung
                </h3>
                <p className="text-dark-mauve leading-relaxed text-sm md:text-base">
                  Genießen Sie die Freiheit mit unseren flexiblen
                  Finanzierungsoptionen, die Ihnen maßgeschneiderte Lösungen
                  bieten, um Ihr Wunschauto zu besitzen.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-light-lavender rounded-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="w-16 h-16 bg-premium-red rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(229,36,33,0.3)] shrink-0 border-[3px] border-red-100">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.4-1.7-1-2l-3-4c-.3-.4-.7-.6-1.2-.6H7.2c-.5 0-.9.2-1.2.6l-3 4c-.6.3-1 1.1-1 2v3c0 .6.4 1 1 1h2"></path>
                  <circle cx="7" cy="17" r="2"></circle>
                  <path d="M9 17h6"></path>
                  <circle cx="17" cy="17" r="2"></circle>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">
                  Ankauf ihres Fahrzeuges
                </h3>
                <p className="text-dark-mauve leading-relaxed text-sm md:text-base">
                  Möchten Sie Ihr aktuelles Fahrzeug verkaufen? Wir bieten einen
                  reibungslosen Ankaufsprozess, bei dem Sie den besten Wert für
                  Ihr Auto erhalten.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-light-lavender rounded-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <div className="w-16 h-16 bg-premium-red rounded-2xl flex items-center justify-center shadow-[0_8px_20px_rgba(229,36,33,0.3)] shrink-0 border-[3px] border-red-100">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">
                  1 Jahr Garantie auf jedes Auto
                </h3>
                <p className="text-dark-mauve leading-relaxed text-sm md:text-base">
                  Bei uns erhalten Sie zu jedem Fahrzeug automatisch eine
                  umfassende 1-jährige Garantie, damit Sie sorgenfrei und
                  geschützt auf den Straßen unterwegs sind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <p className="text-premium-red font-bold tracking-[2px] text-sm mb-4 uppercase">
            Unsere Fahrzeuge
          </p>
          <h2 className="mb-12">Entdecken Sie unser Sortiment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.slice(0, 3).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          <button
            className="btn btn-primary mt-12"
            onClick={() => {
              navigate("/fahrzeuge");
              window.scrollTo(0, 0);
            }}
          >
            Alle Fahrzeuge
          </button>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <p className="text-premium-red font-bold tracking-[2px] text-sm mb-4 uppercase">
            Unser Verkaufsprozess
          </p>
          <h2 className="mb-12">Geld erhalten in 1, 2, 3</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-30 h-30 bg-red-50 rounded-full flex items-center justify-center text-5xl font-bold text-premium-red mx-auto mb-8">
                1
              </div>
              <h3 className="mb-4">Bilder per WhatsApp oder Email senden</h3>
              <p className="text-dark-mauve">
                Starten Sie Ihren Verkauf bequem von Zuhause. Senden Sie uns
                einfach Bilder und Papiere Ihres Fahrzeugs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30 bg-red-50 rounded-full flex items-center justify-center text-5xl font-bold text-premium-red mx-auto mb-8">
                2
              </div>
              <h3 className="mb-4">Gratis Fahrzeugbewertung bekommen</h3>
              <p className="text-dark-mauve">
                Erfahren Sie den wahren Wert Ihres Fahrzeugs durch unsere
                kostenlose Bewertung – fair, transparent und ohne
                Verhandlungsstress.
              </p>
            </div>
            <div className="text-center">
              <div className="w-30 h-30 bg-red-50 rounded-full flex items-center justify-center text-5xl font-bold text-premium-red mx-auto mb-8">
                3
              </div>
              <h3 className="mb-4">Geld erhalten und Auto abholen lassen</h3>
              <p className="text-dark-mauve">
                Nach Zustimmung zu unserem Angebot erhalten Sie sofort Ihr Geld,
                während wir Ihr Fahrzeug bequem abholen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-premium-red py-24 md:py-32">
        <div className="container mx-auto px-4 text-center lg:px-12 max-w-5xl">
          <h2 className="mb-12 text-4xl md:text-5xl font-bold text-white leading-tight">
            Besuchen Sie uns und entdecken Sie unsere Fahrzeuge vor Ort!
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            {/* WhatsApp Card */}
            <a
              href="#"
              className="flex items-center bg-white rounded-3xl p-3 pr-8 shadow-elevation-2 hover:-translate-y-1 transition-transform duration-300 w-full md:w-auto"
            >
              <div className="w-20 h-20 bg-premium-red rounded-[20px] flex items-center justify-center shadow-[0_8px_20px_rgba(229,36,33,0.4)] mr-6 shrink-0 border-[3px] border-red-200/30">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <a href="https://wa.me/491712084467" className="text-left">
                <p className="text-dark-mauve text-lg mb-1 font-normal">
                  WhatsApp:
                </p>
                <p className="text-premium-red font-bold text-xl md:text-xl leading-tight">
                  24/ über whatsapp erichpaas
                </p>
              </a>
            </a>

            {/* Email Card */}
            <a
              href="#"
              className="flex items-center bg-white rounded-3xl p-3 pr-12 shadow-elevation-2 hover:-translate-y-1 transition-transform duration-300 w-full md:w-auto"
            >
              <div className="w-20 h-20 bg-premium-red rounded-[20px] flex items-center justify-center shadow-[0_8px_20px_rgba(229,36,33,0.4)] mr-6 shrink-0 border-[3px] border-red-200/30">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-dark-mauve text-lg mb-1 font-normal">
                  Email:
                </p>
                <p className="text-premium-red font-bold text-xl leading-tight">
                  Automobile @fantastic.de
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="mb-4">Warum Automobile Schönau?</h2>
            <p className="text-dark-mauve">
              Vertrauen und Qualität stehen bei uns an erster Stelle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              variant="borderless"
              title="Geprüfte Qualität"
              description="Jedes Fahrzeug in unserem Bestand wird einer strengen Qualitätskontrolle unterzogen."
              icon={
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              }
            />
            <ServiceCard
              variant="borderless"
              title="Faire Preise"
              description="Wir bieten marktgerechte Preise sowohl beim Verkauf als auch beim Ankauf."
              icon={
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              }
            />
            <ServiceCard
              variant="borderless"
              title="Schnelle Abwicklung"
              description="Wir garantieren eine unkomplizierte und schnelle Abwicklung Ihres Autokaufs oder -verkaufs."
              icon={
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Contact Direct Section */}
      <section className="py-24 bg-very-light-blue" id="kontakt">
        <div className="container mx-auto px-4 lg:px-12 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl md:text-4xl text-primary-navy font-bold">
              Sie wollen uns direkt erreichen?
            </h2>
            <p className="text-dark-mauve text-lg">
              Teilen Sie uns Ihr Anliegen mit, und wir werden uns
              schnellstmöglich bei Ihnen melden:
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            {/* Email Card */}
            <a
              href="mailto:Automobile@fantastic.de"
              className="flex items-center bg-white rounded-3xl p-3 pr-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform duration-300 w-full md:w-auto border border-gray-100"
            >
              <div className="w-20 h-20 bg-premium-red rounded-[20px] flex items-center justify-center shadow-[0_8px_20px_rgba(229,36,33,0.3)] mr-6 shrink-0 border-[3px] border-red-200/30">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-dark-mauve text-lg mb-1 font-normal">
                  Email:
                </p>
                <p className="text-premium-red font-bold text-xl md:text-xl leading-tight">
                  Automobile@fantastic.de
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <div className="flex items-center bg-white rounded-3xl p-3 pr-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-premium-red rounded-[20px] flex items-center justify-center shadow-[0_8px_20px_rgba(229,36,33,0.3)] mr-6 shrink-0 border-[3px] border-red-200/30">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <MapPinPlusInside size={26} className="text-white" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-dark-mauve text-lg mb-1 font-normal">
                  Adresse:
                </p>
                <p className="text-premium-red font-bold text-xl md:text-xl leading-tight">
                  annaberger str. 271, 09125 chemnitz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
