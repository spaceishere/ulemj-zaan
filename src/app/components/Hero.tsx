import React from "react";

const heroData = [
  {
    title: "10+ жилийн зах зээлийн туршлагатай",
  },
  {
    title: "Түргэн шуурхай чанарын өндөр түвшинд нийлүүлэхийг зорилгоо болгон ажилладаг",
  },
  {
    title: "Хэрэглэгчийн сэтгэл ханамж бол бидний нэн тэргүүний зорилт юм",
  },
  {
    title: "100+ Ажлын туршлага",
  },
];

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Бидний Давуу Талууд</h2>
        <p className="mt-4 text-gray-600">Манай байгууллага нь зах зээлд олон жилийн туршлагатай бөгөөд чанарыг эрхэмлэн ажилладаг.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {heroData.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
