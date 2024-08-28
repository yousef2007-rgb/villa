import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function images({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {images.map((src: string, index: number) => (
        <div key={index} className="relative w-full cursor-pointer h-64">
          <Link className="cursor-pointer" href={`/imageviewer/${src}`}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg cursor-pointer"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
