"use client";

import React, { useState } from "react";
import { data } from "../../utils/data";
import Link from "next/link";
import Image from "next/image";

export default function WhatWeHave() {
  interface DataItem {
    id: number;
    name: string;
    category: {
      id: number;
      text: string;
      items: {
        id: number;
        name: string;
        year1: string;
        year2: string;
        color: string;
        image: string;
      }[];
    }[];
  }

  interface Category {
    id: number;
    text: string;
    items: {
      id: number;
      name: string;
      year1: string;
      year2: string;
      color: string;
      image: string;
    }[];
  }

  const [selectedItem, setSelectedItem] = useState<null | DataItem>(null);
  const [selectedCategory, setSelectedCategory] = useState<null | Category>(null);

  const handleSelectItem = (item: DataItem) => {
    setSelectedItem(item);
    setSelectedCategory(null);
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Бидний тухай</h2>
          <p className="mt-2 text-gray-600">Тайлбар 5-10 үг</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 mt-6">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelectItem(item)}
              className="flex items-center justify-center text-center border-[1px] h-[50px] border-gray-500 rounded-[5px]"
            >
              <p className="text-[15px] font-semibold text-gray-800">{item.name}</p>
            </div>
          ))}
        </div>

        {selectedItem && !selectedCategory && (
          <div className="mt-8 bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Сонгосон элемент</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedItem.category.map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleSelectCategory(category)}
                  className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-center cursor-pointer"
                >
                  <h5 className="text-lg font-semibold text-gray-800">{category.text}</h5>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory && (
          <div className="mt-8 bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Дэлгэрэнгүй мэдээлэл</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.items.map((item, index) => (
                <Link href={`/car-detail/${item.id}`} key={index}>
                  <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 text-center">
                    <Image src={item.image} alt={item.name} width={500} height={200} className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h5 className="text-lg font-semibold text-gray-800">{item.name}</h5>
                    <p className="text-sm text-gray-600">
                      Он: {item.year1} - {item.year2}
                    </p>
                    <p className="text-sm text-gray-600">Өнгө: {item.color}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
