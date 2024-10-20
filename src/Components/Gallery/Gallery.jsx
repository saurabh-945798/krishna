// src/components/Gallery.js
import React from 'react';

const images = [
  'https://i.postimg.cc/WbfFh4HM/f.jpg',
  'https://i.postimg.cc/K861DHFj/g.jpg',
  'https://i.postimg.cc/26w3mjWL/h.jpg',
  'https://i.postimg.cc/G3X952rZ/i.jpg',
  'https://i.postimg.cc/xCTnvvkq/i1.jpg',
  'https://i.postimg.cc/XNtXbPG8/99.jpg',
];

const Gallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
  <span className="text-orange-500 italic text-4xl">कला की छवि</span>, आपकी भावना
</h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image} 
              alt={`Gallery ${index + 1}`} 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-bold">छवि {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
