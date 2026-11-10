export type Development = {
  slug: string;
  name: string;
  location: string;
  category: string;
  image: string;
  logo: string;
  introduction: string;
  overviewTitle: string;
  overview: string[];
  highlights: string[];
};

export const developments: Development[] = [
  {
    slug: "villa-maalum",
    name: "Villa Maalum",
    location: "Diani Beach, Kenya",
    category: "Villa Development",
    image: "",
    logo: "",
    introduction:
      "Discover Villa Maalum, one of the developments featured in the Wakusini portfolio.",
    overviewTitle: "A closer look at Villa Maalum.",
    overview: [
      "Add the verified project description here.",
      "Use this space to explain the development, its design and any relevant project details.",
    ],
    highlights: [],
  },
  {
    slug: "villa-kaya",
    name: "Villa Kaya",
    location: "Diani Beach, Kenya",
    category: "Villa Development",
    image: "",
    logo: "",
    introduction:
      "Discover Villa Kaya, one of the developments featured in the Wakusini portfolio.",
    overviewTitle: "A closer look at Villa Kaya.",
    overview: [
      "Add the verified project description here.",
      "Use this space to explain the development, its design and any relevant project details.",
    ],
    highlights: [],
  },
  {
    slug: "tulia-house",
    name: "Tulia House",
    location: "Diani Beach, Kenya",
    category: "Property Development",
    image: "",
    logo: "",
    introduction:
      "Discover Tulia House, one of the developments featured in the Wakusini portfolio.",
    overviewTitle: "A closer look at Tulia House.",
    overview: [
      "Add the verified project description here.",
      "Use this space to explain the development, its design and any relevant project details.",
    ],
    highlights: [],
  },
];

export function getDevelopmentBySlug(slug: string) {
  return developments.find((development) => development.slug === slug);
}
