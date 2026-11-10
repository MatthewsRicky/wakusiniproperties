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
    title: "Construction",
    shortTitle: "Build",
    summary:
      "Bringing property concepts into reality through a considered approach to construction and building.",
    description:
      "Explore construction services for clients looking to turn their property plans into completed spaces.",
    heroTitle: "Turning ideas into built spaces.",
    heroDescription:
      "Explore construction as part of a connected approach to property development along Kenya's South Coast.",
    image: "",
    overviewTitle: "From design to construction.",
    overview: [
      "Construction is where a property's design takes physical form. It requires coordination between the project's requirements, its design direction and the practical realities of building.",
      "Wakusini's construction service forms part of its wider property offering, helping connect the planning and building stages of a project.",
    ],
    sections: [
      {
        title: "Project requirements",
        description:
          "Understanding the scope and priorities that define the intended construction project.",
      },
      {
        title: "Design coordination",
        description:
          "Keeping the project's design direction and construction requirements connected.",
      },
      {
        title: "Building the vision",
        description:
          "Working towards a completed property that reflects the project's agreed requirements.",
      },
    ],
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
