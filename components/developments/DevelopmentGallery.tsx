import Image from "next/image";

import type { GalleryImage } from "@/data/developments";

type DevelopmentGalleryProps = {
  images: GalleryImage[];
  name: string;
};

export default function DevelopmentGallery({
  images,
  name,
}: DevelopmentGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow">The gallery</p>
          <h2 className="font-display text-4xl sm:text-5xl">A closer look.</h2>
        </div>

        <span className="text-xs tracking-[0.15em] text-[var(--muted)]">
          {String(images.length).padStart(2, "0")} IMAGES
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="group relative aspect-square overflow-hidden bg-[var(--sandstone)]"
          >
            <Image
              src={image.src}
              alt={image.alt || `${name} gallery photograph ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
