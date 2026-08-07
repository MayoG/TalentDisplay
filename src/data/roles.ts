import type { Role } from "./types";
import { babyBathwaterCover, babyBathwaterPhotos } from "./baby-bathwater";
import { clearConscienceCover, clearConsciencePhotos } from "./clear-conscience";
import { dybbukCover, dybbukPhotos } from "./dybbuk";
import { fishermanGoldfishCover, fishermanGoldfishPhotos } from "./fisherman-goldfish";
import { imaginaryInvalidCover, imaginaryInvalidPhotos } from "./imaginary-invalid";
import { seagullCover, seagullPhotos } from "./seagull";

const VENUE = "Tel Aviv University Theatre";

export const roles: Role[] = [
  {
    id: "seagull-2026",
    title: "The Seagull",
    character: "Nina Mikhailovna Zarechnaya",
    venue: VENUE,
    year: "2026",
    image: seagullCover.src,
    imageAlt: seagullCover.alt,
    imagePosition: "center 22%",
    photos: seagullPhotos,
  },
  {
    id: "dybbuk-2026",
    title: "The Dybbuk",
    character: "Hadar Pnini",
    venue: VENUE,
    year: "2026",
    image: dybbukCover.src,
    imageAlt: dybbukCover.alt,
    imagePosition: "center 25%",
    imageZoom: 1.35,
    photos: dybbukPhotos,
  },
  {
    id: "baby-bathwater-2025",
    title: "Baby with the Bathwater",
    character: "Hadar Pnini",
    venue: VENUE,
    year: "2025",
    image: babyBathwaterCover.src,
    imageAlt: babyBathwaterCover.alt,
    imagePosition: "center 12%",
    imageFlipHorizontal: true,
    photos: babyBathwaterPhotos,
  },
  {
    id: "clear-conscience-2025",
    title: "Beyond Caring",
    character: "Hadar Pnini",
    venue: VENUE,
    year: "2025",
    image: clearConscienceCover.src,
    imageAlt: clearConscienceCover.alt,
    imagePosition: "center 10%",
    imagePositionMobile: "45% 10%",
    imageZoom: 1.35,
    imageFlipHorizontal: true,
    photos: clearConsciencePhotos,
  },
  {
    id: "imaginary-invalid-2024",
    title: "The Imaginary Invalid",
    character: "Hadar Pnini",
    venue: VENUE,
    year: "2024",
    image: imaginaryInvalidCover.src,
    imageAlt: imaginaryInvalidCover.alt,
    imagePosition: "center 28%",
    imageFlipHorizontal: true,
    photos: imaginaryInvalidPhotos,
  },
  {
    id: "fisherman-goldfish-2023",
    title: "Fisherman and Goldfish",
    character: "Hadar Pnini",
    venue: VENUE,
    year: "2023",
    image: fishermanGoldfishCover.src,
    imageAlt: fishermanGoldfishCover.alt,
    imagePosition: "left 60%",
    imagePositionMobile: "55%",
    imageZoom: 1.05,
    photos: fishermanGoldfishPhotos,
    photographer: "Guy Mayo",
  },
];
