import React from "react";
import { wedid } from "../../utils/data";
import Image from "next/image";

interface WedidItem {
  img: string;
  title: string;
  description: string;
}

export default function WhatWeDid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Бидний хийсэн ажил</h2>
        <p className="mt-4 text-gray-600">2006 оноос өнөөдрийг хүртэл тогтвортой үйл ажиллагаа явуулж байна.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {wedid.map((item: WedidItem, index: number) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src={item.img} width={100} height={100} alt="hello" className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title || "Default Title"}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description || "Default description."}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
