'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse lg:flex-row lg:gap-8">
      {/* Thumbnails */}
      <div className="mt-4 flex gap-4 overflow-x-auto lg:mt-0 lg:flex-col lg:overflow-visible">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border-2 ${
              selectedImage === image ? 'border-indigo-600' : 'border-transparent'
            }`}
          >
            <Image
              src={image}
              alt={`${name} view ${index + 1}`}
              fill
              className="object-cover object-center"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100 lg:flex-1">
        <Image
          src={selectedImage}
          alt={name}
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  );
};

export default ProductGallery;
