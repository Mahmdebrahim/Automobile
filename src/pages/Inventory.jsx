import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import carsData from "../data/cars.json";

const Inventory = () => {
  const [cars] = useState(carsData);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-very-light-blue py-20 text-center">
        <div className="container mx-auto px-4 lg:px-12">
          <h1 className="mb-6">Unsere verfügbaren Fahrzeuge</h1>
          <p className="text-dark-mauve text-lg">
            Entdecken Sie unser sorgfältig ausgewähltes Sortiment an
            Qualitätsfahrzeugen.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-light-lavender">
            <div className="text-charcoal mb-4 md:mb-0">
              <strong className="text-primary-navy">{cars.length}</strong>{" "}
              Fahrzeuge gefunden
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inventory;
