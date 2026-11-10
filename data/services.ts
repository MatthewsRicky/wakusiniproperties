export type ServiceSection = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  image: string;
  overviewTitle: string;
  overview: string[];
  sections: ServiceSection[];

  heroCtaLabel?: string;
  editorialSections?: ServiceEditorialSection[];
  trustSection?: ServiceTrustSection;
};


export type ServiceEditorialSection = {
  headingTop: string;
  headingBottom: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
};

export type ServiceTrustSection = {
  headingTop: string;
  headingBottom: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
};


export const services: Service[] = [
  {
    slug: "architecture-design",
    number: "01",
    title: "Architectural Design",
    shortTitle: "Design",
    summary:
      "Thoughtful architectural design shaped around the property, its purpose and the way people experience a space.",
    description:
      "Explore architectural design as the starting point for creating considered, functional and visually coherent properties.",
    heroTitle: "Designing spaces with purpose.",
    heroDescription:
      "Good architecture brings together the way a space looks, feels and functions. Explore architectural design shaped by the needs of each project and the character of the Kenyan coast.",
    image: "",
    overviewTitle: "A thoughtful approach to every design.",
    overview: [
      "Every property begins with an idea and a set of requirements. The design process is an opportunity to bring those elements together into a coherent vision for the space.",
      "From the relationship between indoor and outdoor areas to the practical needs of everyday use, architectural decisions influence how a property is experienced over time.",
      "Wakusini's architectural design service forms part of its wider property offering, connecting the design stage with the broader process of developing and caring for a property.",
    ],
    sections: [
      {
        title: "Understanding the brief",
        description:
          "Establishing the purpose of the project, the client's priorities and the requirements that should guide the design.",
      },
      {
        title: "Responding to the setting",
        description:
          "Considering the site's context, orientation and relationship with its surroundings when shaping a design.",
      },
      {
        title: "Balancing form and function",
        description:
          "Bringing visual character together with practical layouts and spaces that support the way people intend to use the property.",
      },
      {
        title: "Planning for the next stage",
        description:
          "Developing a considered design direction that can inform the wider property development and construction process.",
      },
    ],
  },
  {
    slug: "land-acquisition",
    number: "02",
    title: "Land Acquisition",
    shortTitle: "Land",
    summary:
      "Support with the process of identifying and acquiring land for property development and investment.",
    description:
      "Find out how Wakusini can support your land acquisition requirements along Kenya's South Coast.",
    heroTitle: "The right foundation starts with the land.",
    heroDescription:
      "Explore land acquisition support for clients considering property opportunities along Kenya's South Coast.",
    image: "",
    overviewTitle: "Starting with the right opportunity.",
    overview: [
      "Land is the starting point for any property development. Understanding the intended use and requirements of a site is an important part of making an informed decision.",
      "Wakusini's land acquisition service is intended to support clients exploring land opportunities as part of their property plans.",
    ],
    sections: [
      {
        title: "Understanding your requirements",
        description:
          "Clarifying the intended use, location preferences and priorities for the land search.",
      },
      {
        title: "Exploring opportunities",
        description:
          "Considering available land opportunities in relation to the client's stated requirements.",
      },
      {
        title: "Planning the next step",
        description:
          "Connecting the land acquisition stage with the wider property development process where appropriate.",
      },
    ],
  },

  {
    slug: "construction",
    number: "03",
    title: "Construction & Building",
    shortTitle: "Build",
    summary:
      "Professional construction services for projects ranging from private villas to larger resort-style properties.",
    description:
      "Explore Wakusini's construction and building services in Diani.",
    heroTitle: "Building your vision on the Kenyan coast.",
    heroDescription:
      "From individual villas to larger resort-style properties, discover construction services shaped around your project and the coastal setting.",
    heroCtaLabel: "Discuss your project",
    image: "/images/services/construction/11-1024x614.jpg",
    overviewTitle: "Construction in Diani.",
    overview: [
      "Wakusini's construction service supports clients looking to bring their property plans to life along Kenya's South Coast.",
    ],
    sections: [],
    editorialSections: [
      {
        headingTop: "BUILD IN",
        headingBottom: "DIANI",
        description:
          "Diani has become one of the most popular growing places in Africa to invest in holiday properties. Named the best destination in the world by TripAdvisor, Diani offers tropical living at affordable prices with a tranquil beach lifestyle.",
        image: "/images/services/construction/ceilingguy.jpg",
        imageAlt: "Diani Beach and the Kenyan coastline",
        imagePosition: "right",
      },
      {
        headingTop: "DIANI",
        headingBottom: "CONSTRUCTION",
        description:
          "Our construction team can handle any project, from a tiny villa to larger resort-style villas. No villa project is too big or too small.",
        image: "",
        imageAlt: "Villa construction project in Diani",
        imagePosition: "left",
      },
      {
        headingTop: "BUILDING IN",
        headingBottom: "DIANI",
        description:
          "Our building and construction team are experienced and efficient. They work to the highest specifications to create impressive villas for all of our clients.",
        image: "/images/services/construction/ceilingtimber.jpg",
        imageAlt: "Modern villa architecture in Diani",
        imagePosition: "right",
      },
      {
        headingTop: "RULES &",
        headingBottom: "REGULATIONS",
        description:
          "When building in Diani, there are local rules and regulations that must be followed in order to ensure legal compliance. Our team can help take care of all of the legal obligations for your new villa in Diani.",
        imagePosition: "left",
      },
    ],
    trustSection: {
      headingTop: "TRUSTED",
      headingBottom: "DIANI BUILDERS",
      description:
        "Wakusini is a fast-growing property development and villa design brand in Diani. For trusted and professional construction services in Diani, get in touch today.",
      images: [
        {
          src: "/images/services/construction/site1-1024x783.jpg",
          alt: "Wakusini construction and property development project",
        },
        {
          src: "/images/services/construction/site2-1024x783.jpg",
          alt: "Completed villa by Wakusini",
        },
      ],
    },
  },

  {
    slug: "villa-management",
    number: "04",
    title: "Property & Villa Management",
    shortTitle: "Management",
    summary:
      "Property and villa management services to help owners look after their properties beyond construction.",
    description:
      "Discover property management support for owners seeking ongoing care and management of their villas.",
    heroTitle: "Care for the property beyond completion.",
    heroDescription:
      "A property needs attention beyond the day it is completed. Explore Wakusini's property and villa management offering.",
    image: "",
    overviewTitle: "Looking after your property.",
    overview: [
      "Owning a property involves ongoing responsibilities. A considered management approach helps owners address the needs of their property beyond the initial development stage.",
      "Wakusini's property and villa management service extends its involvement into the ongoing care of properties along the Kenyan South Coast.",
    ],
    sections: [
      {
        title: "Property care",
        description:
          "Considering the ongoing needs of a property and the attention required to look after it.",
      },
      {
        title: "Villa management",
        description:
          "Supporting owners with the management needs associated with their villas.",
      },
      {
        title: "Long-term ownership",
        description:
          "Taking a considered approach to the responsibilities that continue after a property is completed.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
