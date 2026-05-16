import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-very-light-blue pt-20 border-t border-light-lavender">
      <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-20">
        <div>
          <h3 className="mb-4">Automobile Schönau</h3>
          <p className="text-dark-mauve">
            Ihr vertrauensvoller Partner für hochwertige Fahrzeuge und
            erstklassigen Service in Chemnitz.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-primary-navy font-bold">Quick Links</h4>
          <ul className="list-none">
            <li className="mb-3">
              <a
                href="/"
                className="text-dark-mauve text-sm hover:text-primary-navy hover:underline transition-all"
              >
                Unsere Fahrzeuge
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/verkaufen"
                className="text-dark-mauve text-sm hover:text-primary-navy hover:underline transition-all"
              >
                Auto verkaufen
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/kontakt"
                className="text-dark-mauve text-sm hover:text-primary-navy hover:underline transition-all"
              >
                Kontakt
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/impressum"
                className="text-dark-mauve text-sm hover:text-primary-navy hover:underline transition-all"
              >
                Impressum
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-primary-navy font-bold">Kontakt</h4>
          <p className="text-dark-mauve text-sm mb-2">
            Blankenauer Str. 59, 09113 Chemnitz, Germany
          </p>
          <p className="text-dark-mauve text-sm">Automobile@fantastic.de</p>
        </div>
      </div>
      <div className="py-6 border-t border-light-lavender text-center text-sm text-dark-mauve bg-white">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Automobile Schönau. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
