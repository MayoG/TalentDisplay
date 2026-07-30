import type { GalleryImage } from "./types";
import { seagullPhotoByFile } from "./seagull";

const galleryPicks: Array<{ file: string; span: GalleryImage["span"]; alt: string }> = [
  {
    file: "Z61_1000Tami_Shaham.jpg",
    span: "tall",
    alt: "Hadar Pnini as Nina in The Seagull — red costume with skull prop. Photo by Tami Shaham",
  },
  {
    file: "Z62_5173Tami_Shaham.jpg",
    span: "wide",
    alt: "Hadar Pnini as Nina in The Seagull — kitchen scene with co-star. Photo by Tami Shaham",
  },
  {
    file: "Z61_1082Tami_Shaham.jpg",
    span: "tall",
    alt: "Hadar Pnini as Nina in The Seagull — expressive solo moment. Photo by Tami Shaham",
  },
  {
    file: "Z62_4937Tami_Shaham.jpg",
    span: "normal",
    alt: "Hadar Pnini as Nina in The Seagull — joyful embrace on stage. Photo by Tami Shaham",
  },
  {
    file: "Z61_1249Tami_Shaham.jpg",
    span: "tall",
    alt: "Hadar Pnini as Nina in The Seagull — tender embrace under cool stage light. Photo by Tami Shaham",
  },
  {
    file: "Z62_4902Tami_Shaham.jpg",
    span: "wide",
    alt: "Hadar Pnini as Nina in The Seagull — seated in red opposite a purple-suited co-star. Photo by Tami Shaham",
  },
  {
    file: "Z62_5018Tami_Shaham.jpg",
    span: "normal",
    alt: "Hadar Pnini as Nina in The Seagull — warm embrace by the door. Photo by Tami Shaham",
  },
  // {
  //   file: "Z62_5446Tami_Shaham.jpg",
  //   span: "normal",
  //   alt: "Hadar Pnini as Nina in The Seagull — production still. Photo by Tami Shaham",
  // },
];

export const galleryImages: GalleryImage[] = galleryPicks.flatMap((pick, index) => {
  const photo = seagullPhotoByFile(pick.file);
  if (!photo) return [];
  return [
    {
      id: `sg${index + 1}`,
      src: photo.src,
      alt: pick.alt,
      span: pick.span,
    },
  ];
});
