import type { GalleryImage, GallerySpan, RolePhoto } from "./types";
import { babyBathwaterPhotoByFile } from "./baby-bathwater";
import { clearConsciencePhotoByFile } from "./clear-conscience";
import { dybbukPhotoByFile } from "./dybbuk";
import { fishermanGoldfishPhotoByFile } from "./fisherman-goldfish";
import { imaginaryInvalidPhotoByFile } from "./imaginary-invalid";
import { seagullPhotoByFile } from "./seagull";

type GalleryPick = {
  resolve: (file: string) => RolePhoto | undefined;
  file: string;
  span: GallerySpan;
  alt: string;
  /** Focal point for crop and zoom (e.g. "center 30%") */
  imagePosition?: string;
  /** Tile zoom factor — 1 is default; zooms toward imagePosition */
  imageZoom?: number;
};

/** Spans tuned for the 1–2 column mobile / sm grid */
const galleryPicksMobile: GalleryPick[] = [
  {
    resolve: seagullPhotoByFile,
    file: "Z61_1000Tami_Shaham.jpg",
    span: "tall",
    alt: "Hadar Pnini in The Seagull — red costume with skull prop. Photo by Tami Shaham",
  },
  {
    resolve: fishermanGoldfishPhotoByFile,
    file: "AGADA TAU fixed-24.jpg",
    span: "normal",
    alt: "Hadar Pnini in Fisherman and Goldfish — sharing blue fabric with co-star",
    imageZoom: 1.35,
  },
  {
    resolve: imaginaryInvalidPhotoByFile,
    file: "Z61_1918-Enhanced-NR.jpg",
    span: "tall",
    alt: "Hadar Pnini in The Imaginary Invalid — striped costume on stage",
    imagePosition: "22%",
    imageZoom: 1.15,
  },
  {
    resolve: clearConsciencePhotoByFile,
    file: "Z61_2240-Enhanced-NRTami_Shaham.jpg",
    span: "wide",
    alt: "Hadar Pnini in In Clear Conscience — breakroom table scene. Photo by Tami Shaham",
    imageZoom: 1.35,
  },
  {
    resolve: babyBathwaterPhotoByFile,
    file: "Z61_0738-Enhanced-NR.jpg",
    span: "wide",
    alt: "Hadar Pnini in Baby with the Bathwater — confrontation across the desk",
    imagePosition: "center 20%",
  },
  {
    resolve: seagullPhotoByFile,
    file: "Z62_5041Tami_Shaham.jpg",
    span: "normal",
    alt: "Hadar Pnini in Baby with the Bathwater — confrontation across the desk",
    imagePosition: "78% 25%",
    imageZoom: 2.7,
  },
];

/** Spans tuned for the 4-column md+ masonry grid */
const galleryPicksDesktop: GalleryPick[] = [
  {
    resolve: seagullPhotoByFile,
    file: "Z61_1000Tami_Shaham.jpg",
    span: "tall",
    alt: "Hadar Pnini in The Seagull — red costume with skull prop. Photo by Tami Shaham",
  },
  {
    resolve: imaginaryInvalidPhotoByFile,
    file: "Z62_1451-Enhanced-NR.jpg",
    span: "wide",
    alt: "Hadar Pnini in The Imaginary Invalid — close moment with co-star",
    imagePosition: "center 30%",
  },
  {
    resolve: dybbukPhotoByFile,
    file: "Z62_7720Tami_Shaham.jpg",
    span: "tall",
    alt: "Hadar Pnini in The Dybbuk — cream dress with long braids. Photo by Tami Shaham",
    imageZoom: 1.65,
    imagePosition: "45%",
  },
  {
    resolve: babyBathwaterPhotoByFile,
    file: "Z61_0669-Enhanced-NR.jpg",
    span: "tall",
    alt: "Hadar Pnini in Baby with the Bathwater — crocheting on stage",
    imageZoom: 1.1,
    imagePosition: "10% 30%",
  },
  {
    resolve: fishermanGoldfishPhotoByFile,
    file: "AGADA TAU fixed-24.jpg",
    span: "normal",
    alt: "Hadar Pnini in Fisherman and Goldfish — sharing blue fabric with co-star",
    imageZoom: 1.35,
  },
  {
    resolve: imaginaryInvalidPhotoByFile,
    file: "Z61_1918-Enhanced-NR.jpg",
    span: "tall",
    alt: "Hadar Pnini in The Imaginary Invalid — striped costume on stage",
    imagePosition: "22%",
    imageZoom: 1.15,
  },
  {
    resolve: clearConsciencePhotoByFile,
    file: "Z61_2240-Enhanced-NRTami_Shaham.jpg",
    span: "wide",
    alt: "Hadar Pnini in In Clear Conscience — breakroom table scene. Photo by Tami Shaham",
  },
  {
    resolve: babyBathwaterPhotoByFile,
    file: "Z61_0738-Enhanced-NR.jpg",
    span: "wide",
    alt: "Hadar Pnini in Baby with the Bathwater — confrontation across the desk",
    imagePosition: "center 20%",
  },
  {
    resolve: seagullPhotoByFile,
    file: "Z62_5041Tami_Shaham.jpg",
    span: "normal",
    alt: "Hadar Pnini in Baby with the Bathwater — confrontation across the desk",
    imagePosition: "78% 25%",
    imageZoom: 2.7,
  },
];

function toGalleryImages(picks: GalleryPick[], idPrefix: string): GalleryImage[] {
  return picks.flatMap((pick, index) => {
    const photo = pick.resolve(pick.file);
    if (!photo) return [];
    return [
      {
        id: `${idPrefix}${index + 1}`,
        src: photo.src,
        alt: pick.alt,
        span: pick.span,
        imagePosition: pick.imagePosition,
        imageZoom: pick.imageZoom,
      },
    ];
  });
}

export const galleryImagesMobile = toGalleryImages(galleryPicksMobile, "gal-m");
export const galleryImagesDesktop = toGalleryImages(galleryPicksDesktop, "gal-d");
