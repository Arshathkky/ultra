import { Branch } from '../types/branch';
import { sampleImages } from './sampleImages';

export const branches: Branch[] = [
  {
    id: 1,
    name: "Ultra Aluminium",
    description: "Premium aluminum solutions for modern architecture",
    image: sampleImages.extrusion,
    link: "/aluminium"
  },
  {
    id: 2,
    name: "Ultra Tiles",
    description: "High-quality tiles for every space",
    image: sampleImages.casting,
    link: "/tiles"
  },
  {
    id: 3,
    name: "Ultra Roof",
    description: "Premium amona sheet roofing solutions",
    image: sampleImages.anodizing,
    link: "/roof"
  }
];