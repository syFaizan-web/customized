import { ImageWithFallback } from "@/components/image-with-fallback";

const instagramUrl = "https://www.instagram.com/faizstudiohandmade/";

export function InstagramGallery({ images }: { images: string[] }) {
  return (
    <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:grid-cols-4">
      {images.map((image, index) => (
        <a
          key={`${image}-${index}`}
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="View Faiz Studio on Instagram"
          className={`${index % 3 === 0 ? "md:row-span-2" : ""} group relative overflow-hidden rounded-[24px] border border-[#ebdcc8] bg-white`}
        >
          <ImageWithFallback src={image} alt="Gallery showcase" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <span className="absolute inset-0 flex items-center justify-center bg-[#2d2724]/0 text-white opacity-0 transition duration-300 group-hover:bg-[#2d2724]/45 group-hover:opacity-100">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-none stroke-current" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
            </svg>
          </span>
        </a>
      ))}
    </div>
  );
}
