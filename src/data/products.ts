export interface Product {
  id: string;
  name: string;
  price: number;
  category: "JEANS" | "HOODIES";
  videoPreview: string;
  mainImage: string;
  description: string;
  sizes: string[];
  color: string;
  priceNote: string;
}

export const products: Product[] = [
  {
    id: "wide-jeans-black",
    name: "WIDE JEANS — BLACK",
    price: 249,
    category: "JEANS",
    videoPreview: "/media/1795736651489162.mp4",
    mainImage: "/images/logo.png",
    description: "Wide-leg washed black jeans featuring a circular graphic/embroidery detail on the back right pocket and a brown back patch.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    color: "Black",
    priceNote: "249 MAD (excl. delivery)"
  },
  {
    id: "wide-jeans-indigo-pearl",
    name: "WIDE JEANS — INDIGO PEARL",
    price: 299,
    category: "JEANS",
    videoPreview: "/media/1795736684671324.mp4",
    mainImage: "/images/logo.png",
    description: "Wide-leg indigo jeans featuring a prominent pink/pearl spiral design on the back right pocket.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    color: "Indigo",
    priceNote: "299 MAD (excl. delivery)"
  },
  {
    id: "wide-jeans-black-koi-blossom",
    name: "WIDE JEANS — BLACK KOI BLOSSOM",
    price: 299,
    category: "JEANS",
    videoPreview: "/media/1795736736643808.mp4",
    mainImage: "/images/logo.png",
    description: "Wide-leg black jeans with pink koi fish & cherry blossom embroidery on the back right pocket.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    color: "Black",
    priceNote: "299 MAD (excl. delivery)"
  },
  {
    id: "cropped-zip-hoodie-pink",
    name: "CROPPED ZIP HOODIE — PINK",
    price: 240,
    category: "HOODIES",
    videoPreview: "/media/Pink_hoodie_walking_forward_727d1664.mp4",
    mainImage: "/images/logo.png",
    description: "Light pink full-zip cropped hoodie with streetwear typography and graffiti-style chest artwork.",
    sizes: ["S", "M", "L", "XL"],
    color: "Pink",
    priceNote: "240 MAD (excl. delivery)"
  }
];