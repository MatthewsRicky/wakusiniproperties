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
  midPageCta?: ServiceMidPageCta;
  heroCtaLabel?: string;
  editorialSections?: ServiceEditorialSection[];
  trustSection?: ServiceTrustSection;
  managementPackage?: ServicePackage;
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

export type ServiceMidPageCta = {
  headingTop: string;
  headingBottom: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export type ServicePackage = {
  title: string;
  image: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const services: Service[] = [
  {
    slug: "architecture-design",
    number: "01",
    title: "Architecture & Design",
    shortTitle: "Architecture",
    summary:
      "Thoughtful architectural design combining modern convenience with the character of coastal and Swahili architecture.",
    description: "Discover Wakusini's architectural design services in Diani.",
    heroTitle: "Designing beautiful villas for coastal living.",
    heroDescription:
      "From initial concepts to detailed architectural designs and realistic renderings, our team helps bring your vision to life.",
    heroCtaLabel: "Discuss your design",
    image: "/images/services/architecture/16-TopView-1-1024x717.jpg",
    overviewTitle: "Architecture & Design in Diani.",
    overview: [
      "Wakusini's architecture and design service helps clients create beautiful, functional properties along Kenya's South Coast.",
    ],
    sections: [],
    editorialSections: [
      {
        headingTop: "ARCHITECTS",
        headingBottom: "IN DIANI",
        description:
          "Worry no more about your budget. Our experienced architects can design the ideal property for you within your financial plan.\n\nOur team can combine the perfect blend of modern design with Swahili style to create a beautiful coastal villa.\n\nWe make sure our architectural team uses the latest in design, materials and smart home integration to create functional villas with modern convenience and style.",
        image: "/images/developments/tulia-house/TuliaWeb-06-1024x683.jpg",
        imageAlt: "Architectural design of a coastal villa in Diani",
        imagePosition: "right",
      },
      {
        headingTop: "ARCHITECTURAL",
        headingBottom: "DESIGNED VILLAS",
        description:
          "Regardless of your budget and requirements, our experienced architects can design the ideal property for you. Our architects can combine the perfect blend of modern design with Swahili style to create a beautiful tropical villa.",
        image: "/images/services/architecture/Cam-8-Bathroom-1-1024x717.jpg",
        imageAlt: "Modern tropical villa with Swahili architectural influences",
        imagePosition: "left",
      },
      {
        headingTop: "DIANI",
        headingBottom: "ARCHITECTS",
        description:
          "Our in-house architecture team uses the latest in design, materials and smart home integration to create functional villas with modern convenience and style.",
        image: "/images/services/architecture/cam-2-dining-2-1-1024x723.jpg",
        imageAlt: "Architectural concept and villa design in Diani",
        imagePosition: "right",
      },
      {
        headingTop: "RULES &",
        headingBottom: "REGULATIONS",
        description:
          "When building in Diani, there are local rules and regulations that must be followed to ensure legal compliance. Our team can help coordinate the necessary requirements and approvals for your new villa in Diani.",
        image:
          "/images/services/architecture/PXL_20221020_055906232.PORTRAIT-1024x562.jpg",
        imageAlt: "Architectural planning and building documentation",
        imagePosition: "left",
      },
      {
        headingTop: "PREMIUM",
        headingBottom: "ARCHITECTURAL RENDERINGS",
        description:
          "Our experienced design team will provide you with premium, hyper-realistic renderings to give you a lifelike view of what your villa design will look like once complete.\n\nImagine being able to see your finished concept before construction begins.",
        image: "/images/services/architecture/premiumrenderings-1024x871.jpg",
        imageAlt: "Photorealistic architectural rendering of a luxury villa",
        imagePosition: "right",
      },
    ],
    trustSection: {
      headingTop: "TRUSTED",
      headingBottom: "DIANI ARCHITECTS",
      description:
        "Our team of architects has years of experience creating extensive designs throughout Kenya and around the world.",
      images: [
        {
          src: "/images/services/architecture/p1-1024x783.jpg",
          alt: "Wakusini architectural design project",
        },
        {
          src: "/images/services/architecture/p2-1024x783.jpg",
          alt: "Completed architectural design by Wakusini",
        },
      ],
    },
  },
  {
    slug: "land-acquisition",
    number: "02",
    title: "Land Acquisition",
    shortTitle: "Land",
    summary:
      "Find and acquire the right plot of land in Diani for your villa, resort or commercial development.",
    description:
      "Explore Wakusini's land acquisition services and available property opportunities in Diani.",

    heroTitle: "Find the right land in Diani.",
    heroDescription:
      "From identifying suitable plots to navigating the acquisition process, Wakusini helps make finding land on the Kenyan coast easier.",
    heroCtaLabel: "Find land in Diani",
    image: "/images/services/land/land-2-1024x537.jpg",

    overviewTitle: "Land acquisition in Diani.",
    overview: [
      "Finding and acquiring land in Diani can involve several important considerations. Wakusini helps clients identify suitable properties and navigate the process of purchasing or leasing land for their development plans.",
    ],

    sections: [],

    editorialSections: [
      {
        headingTop: "FIND DIANI LAND",
        headingBottom: "FOR SALE",
        description:
          "Buying land in Diani can be an overwhelming task, but our land acquisition team can help take care of the process for you. From finding the ideal plot to advising on different purchase options and helping verify the authenticity of the land, we are here to guide you.\n\nLet our team help you find the perfect plot for your new villa, resort or commercial project. Simply share your requirements and let Wakusini help identify suitable properties.",
        image: "/images/services/land/land-3-1024x537.jpg",
        imageAlt: "Land available for development in Diani",
        imagePosition: "right",
      },
      {
        headingTop: "DIANI LAND",
        headingBottom: "PROFESSIONALS",
        description:
          "There are important rules and regulations that must be followed when legally purchasing or leasing land in Diani. Our property experts can help you identify and acquire a suitable plot while coordinating the necessary legal and regulatory requirements throughout the process.",
        image:
          "/images/services/land/2f8322ea3dc06a432fb14feb37a1fa0d288379ef.jpg",
        imageAlt: "Land and property development opportunities in Diani",
        imagePosition: "left",
      },
    ],

    midPageCta: {
      headingTop: "LOOKING FOR LAND?",
      headingBottom: "GET IN TOUCH FOR OUR LISTINGS HERE",
      description:
        "Tell us what you are looking for and let our team help you explore available land opportunities in Diani.",
      buttonLabel: "Get in touch",
      buttonHref: "/contact",
    },
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
    title: "Villa Management",
    shortTitle: "Management",
    summary:
      "Comprehensive villa management, property maintenance and holiday rental services throughout Diani.",
    description: "Discover Wakusini's villa management services in Diani.",
    heroTitle: "Exceptional care for your villa in Diani.",
    heroDescription:
      "Whether you own a holiday rental or a private residence, Wakusini provides tailored property management services to keep your villa running smoothly.",
    heroCtaLabel: "Enquire about management",
    image: "/images/services/villa management/14-FrontView-3-1024x336.jpg",
    overviewTitle: "Villa Management in Diani.",
    overview: [
      "Wakusini provides comprehensive villa management services for property owners throughout Diani, with solutions tailored to each property and owner's requirements.",
    ],
    sections: [],
    editorialSections: [
      {
        headingTop: "VILLA MANAGEMENT",
        headingBottom: "DIANI",
        description:
          "Wakusini provides a full and comprehensive villa management service throughout Diani.\n\nWe oversee the ongoing maintenance of every aspect of your property, from housekeeping, gardening and security services to payment of monthly bills and successful holiday rental management.\n\nOur services are tailored to your exact needs, ensuring that your villa is well monitored and cared for in your absence.",
        image: "/images/services/villa management/bedshot-1007x1024.jpg",
        imageAlt: "Villa management and property care in Diani",
        imagePosition: "right",
      },
      {
        headingTop: "DIANI MANAGEMENT",
        headingBottom: "VILLAS",
        description:
          "As well as managing the properties we design and build, our Diani villa management services are available to all property owners.\n\nOur services can be tailored to the unique requirements of your villa and its guests.",
        image: "/images/services/villa management/chef-997x1024.jpg",
        imageAlt: "A managed private villa in Diani",
        imagePosition: "left",
      },
      {
        headingTop: "VILLA MANAGEMENT",
        headingBottom: "FEATURES",
        description:
          "Below are our villa management packages, designed to make managing your villa as easy as possible.\n\nOur Basic Management plan is ideal if you already have your own staff for cleaning, cooking, airport transfers and general villa maintenance. The Complete Management plan takes care of a wider range of tasks, from bookings and guest management to staff coordination and property maintenance.",
        image:
          "/images/services/villa management/Cam-4-WideLounge.jpgwide-1024x328.jpg",
        imageAlt: "Villa management services and property maintenance",
        imagePosition: "right",
      },
      {
        headingTop: "EASY VILLA",
        headingBottom: "MANAGEMENT",
        description:
          "Our villa management services can take care of everything. Whether you want to rent out your investment or simply need a cleaner and gardener to keep your home in great shape, our team can provide a tailored service to suit your needs.",
        image:
          "/images/services/villa management/niyama_private_islands_maldives_property_amenity_sandbank_couple_walks_1920x550-1024x293.webp",
        imageAlt: "Well-maintained tropical villa and garden",
        imagePosition: "left",
      },
      {
        headingTop: "HOLIDAY",
        headingBottom: "RENTALS",
        description:
          "Many owners rent out their holiday villa when they are away. We can manage every aspect of your holiday rental, from booking guests to helping ensure they enjoy a five-star experience.\n\nOur team can work with your preferred booking platforms, such as Booking.com or Airbnb, or recommend suitable platforms based on your property's needs, potential returns and booking demand.",
        image: "/images/services/villa management/villamanagment3-1024x745.jpg",
        imageAlt: "Holiday rental villa prepared for guests",
        imagePosition: "right",
      },
    ],
    managementPackage: {
      title: "Complete Management",
      image: "",
      features: [
        "Listing Creation/Optimisation",
        "Listing Management",
        "Calendar Sync & Updates",
        "Dynamic Pricing",
        "Guest Communication",
        "Booking & Payment Processing",
        "Coordination with Villa Staff",
        "House Manual & Neighbourhood Guide",
        "5-Star Reviews",
        "24/7 Support & Assistance",
        "Concierge Service Guest Support",
        "Guest Airport Transfers",
        "Personal Guest Check-in",
        "24/7 Guest Support",
        "Professional Cleaning",
        "Restocking of Amenities",
        "Property Inspection & Maintenance",
        "Staff Hiring & Management",
        "Handyman & Emergency Support",
        "Marketing Content Manager",
      ],
      ctaLabel: "Enquire",
      ctaHref: "/contact?service=villa-management",
    },
    trustSection: {
      headingTop: "TRUSTED VILLA",
      headingBottom: "MANAGEMENT",
      description:
        "Drawing on our experience in hotel management, we aim to deliver a five-star experience for your guests. Our services can be tailored to your villa management needs, whether you require complete holiday rental management or ongoing property care.",
      images: [
        {
          src: "/images/services/villa management/villamanagment2-1024x745.jpg",
          alt: "Wakusini villa management property",
        },
        {
          src: "/images/services/villa management/villamanagment-1024x745.jpg",
          alt: "A beautifully presented managed villa",
        },
      ],
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
