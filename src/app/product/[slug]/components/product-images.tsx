"use client";
import Image from "next/image";
import { FunctionComponent, useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages: FunctionComponent<ProductImagesProps> = ({
  name,
  imageUrls,
}) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div>
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[95%] w-auto max-w-[95%]"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            onClick={() => handleImageClick(imageUrl)}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent
              ${
                imageUrl === currentImage &&
                "border-2 border-solid border-primary"
              }
            `}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[90%] w-auto max-w-[90%]"
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
