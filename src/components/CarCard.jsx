import React from "react";
import { Zap, Calendar, Road } from "lucide-react";

const CarCard = ({ car }) => {
  // التعامل مع الصورة
  const imageUrl = new URL(`../assets/${car.bild}.jpg`, import.meta.url).href;

  const isNew = car.kilometerstand < 100000 || car.jahr === 2026;

  return (
    <div className="overflow-hidden p-2 flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="relative h-[220px] w-full bg-gray-100">
        <img
          src={imageUrl}
          alt={`${car.marke} ${car.modell}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {isNew && (
          <div className="absolute top-3 right-3 bg-primary-navy text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            Neu
          </div>
        )}
      </div>

      {/* قسم التفاصيل */}
      <div className="p-5 flex flex-col grow">
        {/* العنوان */}
        <h3 className="text-lg font-bold text-gray-800 leading-tight mb-2 line-clamp-2 min-h-12">
          {car.marke} {car.modell}
        </h3>

        {/* بيانات سريعة بالألماني */}
        <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={18} /> {car.erstzulassung}
          </span>
          <span className="flex items-center gap-1">
            <Road size={18} /> {car.kilometerstand.toLocaleString("de-DE")} km
          </span>
          <span className="flex items-center gap-1">
            <Zap size={18} /> {car.leistung}
          </span>
        </div>

        {/* الفاصل السفلي */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          {/* السعر */}
          <div className="text-xl font-bold text-primary-navy">
            {car.preis.toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </div>

          {/* زر التفاصيل */}
          <button className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
