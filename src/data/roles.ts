import type { Role } from "./types";
import { seagullCover, seagullPhotos } from "./seagull";

export const roles: Role[] = [
  {
    id: "seagull-2026",
    title: "The Seagull",
    character: "Nina Mikhailovna Zarechnaya",
    venue: "Tel Aviv University Theatre",
    year: "2026",
    image: seagullCover.src,
    imageAlt: seagullCover.alt,
    imagePosition: "center top",
    photos: seagullPhotos,
  },
  {
    id: "1",
    title: "Hedda Gabler",
    character: "Hedda",
    venue: "Riverside Repertory",
    year: "2024",
    image: "/images/role-1.svg",
    imageAlt: "Placeholder portrait for Hedda Gabler",
  },
  {
    id: "2",
    title: "Three Sisters",
    character: "Masha",
    venue: "Northlight Theatre",
    year: "2023",
    image: "/images/role-2.svg",
    imageAlt: "Placeholder portrait for Three Sisters",
  },
  {
    id: "3",
    title: "The Cherry Orchard",
    character: "Ranevskaya",
    venue: "Arcadia Stage",
    year: "2022",
    image: "/images/role-3.svg",
    imageAlt: "Placeholder portrait for The Cherry Orchard",
  },
];
