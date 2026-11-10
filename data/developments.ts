export type GalleryImage = {
  src: string;
  alt: string;
  layout: "feature" | "landscape" | "portrait" | "standard";
};



export type PropertyDetails = {
  bedrooms: number;
  bathrooms?: number;
  price: {
    usd: number;
    kes: number;
  };
  investmentLabel: string;
  investmentTitle: string;
  investmentDescription: string[];
  managementDescription: string;
  amenities: string[];
  inclusions: {
    title: string;
    image: string;
    features: string[];
  };
  paymentTerms?: {
    percentage: number;
    description: string;
  }[];
  constructionDuration?: string;
  landSize?: string;
  locationDescription?: string;
  architecturalDescription?: string[];

  buildingCost?: BuildingCost;

  floorPlan?: {
    image: string;
    alt: string;
  };

  roi?: {
    title: string;
    scenarios: RoiScenario[];
    disclaimer?: string;
  };

  locationMap?: LocationMap;
  villaOverview?: string[];
};

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
  gallery: GalleryImage[];
  propertyDetails?: PropertyDetails;
};


export type BuildingCost = {
  title: string;
  rows: {
    label: string;
    amount: string;
    highlight?: boolean;
    note?: string;
  }[];
  disclaimer?: string[];
};

export type RoiScenario = {
  occupancyDays: number;
  nightlyRate: {
    usd: number;
    kes: number;
  };
  monthlyRevenue: {
    usd: number;
    kes: number;
  };
  monthlyExpenses: {
    usd: number;
    kes: number;
  };
  monthlyProfit: {
    usd: number;
    kes: number;
  };
  annualProfit: {
    usd: number;
    kes: number;
  };
  yearsToBreakEven: number;
};

export type LocationMap = {
  image: string;
  googleMapsUrl: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  highlights: string[];
};



export const developments: Development[] = [
  {
    slug: "villa-maalum",
    name: "Villa Maalum",
    location: "Diani Beach, Kenya",
    category: "Villa Development",
    image: "/images/developments/villa-maalum/Villa_Maalum_1web-1536x1075.jpg",
    logo: "/images/logos/VillaMaalum-1-150x150.png",
    introduction:
      "Discover Villa Maalum, one of the developments featured in the Wakusini portfolio.",
    overviewTitle: "A closer look at Villa Maalum.",
    overview: [
      "Add the verified project description here.",
      "Add further details about the property and its design here.",
    ],
    highlights: [],
    gallery: [
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_1web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_2web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_3web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_5web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_6web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_8web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_11web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_12web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_13web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_14web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_16web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_17web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_19web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_20web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_22web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_23web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_24web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_25web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_27web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_29web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-maalum/Villa_Maalum_30web-1536x1075.jpg",
        alt: "Villa Maalum",
        layout: "standard",
      },
    ],

    propertyDetails: {
      bedrooms: 2,
      bathrooms: 2,

      price: {
        usd: 197377,
        kes: 25500000,
      },

      investmentLabel: "INVEST IN OFF-PLAN",
      investmentTitle: "Villa Maalum",

      investmentDescription: [
        "Welcome to Villa Maalum, where the whispers of Swahili culture seamlessly blend with African boho chic design, creating an enchanting retreat. Nestled just a stone's throw away from the renowned Diani Beach and the beautiful Kongo River, this intimate haven boasts 2 bedrooms spread across 168 square meters on an 1/8 of an acre, inviting you to indulge in the coastal lifestyle.",

        "Owning an investment villa in Diani is both easy and profitable when you choose us.",
      ],

      managementDescription:
        "Our dedicated villa management team can handle all your needs from maintenance, cleaning, guest relations to bookings and check-ins.",

      amenities: [
        "Solar Heater",
        "Bio-Digester",
        "Fine Finishing",
        "Private Pool",
        "Outdoor Pavilion",
        "Back up power",
        "Electric Fence",
        "2 Space Parking",
        "Borehole",
        "Inbuilt Wardrobes",
        "A/C In Rooms",
        "Laundry Area",
        "Ceiling Fans",
        "Open Plan Kitchen",
        "Polished Detailing",
        "Ensuite Bedrooms",
        "Gated Secured Complex",
      ],

      inclusions: {
        title: "FEATURES & INCLUSIONS",
        image: "/images/developments/villa-maalum/features.jpg",
        features: [
          "Modern Swahili Design",
          "2 bedroom(s)",
          "2 bathroom(s)",
          "Open plan concept layout",
          "Private pool",
          "168 sqm build area",
          "Double private parking",
          "Construction time 5 months",
        ],
      },

      landSize: "1/8 of an acre",
      constructionDuration: "5 months",

      paymentTerms: [
        {
          percentage: 40,
          description: "Construction commencement",
        },
        {
          percentage: 30,
          description: "Payment during construction",
        },
        {
          percentage: 25,
          description: "Finishing stage",
        },
        {
          percentage: 5,
          description: "At 2 months snag list",
        },
      ],

      architecturalDescription: [
        "Step into our inviting open living space, where Swahili-inspired elegance merges effortlessly with the laid-back vibe of boho chic. The kitchen features charming Swahili patterns and artisanal touches.",

        "Relax in the lounge area, furnished with cozy seating and adorned with earthy African textiles. Step outside to our lush backyard with a refreshing pool and terrace, perfect for gathering under the starlit sky.",

        "The bedroom invites with its serene ambiance and cozy Coastarian fabric. Handcrafted wooden cabinets and Swahili-patterned walls add authenticity.",

        "The ensuite bathroom exudes elegance with sleek lines and earthy tones, reminiscent of coastal sands, paired with modern fixtures for convenience and luxury.",
      ],

      locationDescription:
        "Nestled just 800 meters from the pristine shores of Diani Beach, Villa Maalum offers an idyllic retreat in a serene setting. Conveniently accessible via a well-maintained cabro road, this villa is within a secure and gated community.",
    },
  },

  {
    slug: "villa-kaya",
    name: "Villa Kaya",
    location: "Diani Beach, Kenya",
    category: "Villa Development",
    image: "/images/developments/villa-kaya/2-FrontView-1024x614.jpg",
    logo: "/images/logos/villa-kaya-logo-150x150.png",
    introduction:
      "Discover Villa Kaya, one of the developments featured in the Wakusini portfolio.",
    overviewTitle: "A closer look at Villa Kaya.",
    overview: [
      "Add the verified project description here.",
      "Add further details about the property and its design here.",
    ],
    highlights: [],
    gallery: [
      {
        src: "/images/developments/villa-kaya/2-FrontView-1024x614.jpg",
        alt: "Villa Kaya front view",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/3-Poolclosebbq-1024x614.jpg",
        alt: "Villa Kaya pool and barbecue area",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/4-Terracepool-1024x614.jpg",
        alt: "Villa Kaya terrace and pool",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/4-Terracepool-1024x614 (1).jpg",
        alt: "Villa Kaya terrace and pool",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/6-pavillion-1024x783.jpg",
        alt: "Villa Kaya pavilion",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/7-Gardenview-1024x614.jpg",
        alt: "Villa Kaya garden",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/9-Poolcloseup-1024x614.jpg",
        alt: "Villa Kaya swimming pool",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/10-Dining-1024x614.jpg",
        alt: "Villa Kaya dining area",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/11-roofterrace-1-1024x614.jpg",
        alt: "Villa Kaya roof terrace",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/12-roofterrace-1024x614.jpg",
        alt: "Villa Kaya roof terrace",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/13-Entrycam-1024x614.jpg",
        alt: "Villa Kaya entrance",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/14-FrontView-1024x614.jpg",
        alt: "Villa Kaya exterior",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/15-parking-1024x614.jpg",
        alt: "Villa Kaya parking area",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/16-TopView-1024x717.jpg",
        alt: "Villa Kaya aerial view",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/cam-1-kitchen-1024x614.jpg",
        alt: "Villa Kaya kitchen",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/cam-2-dining-2-1024x723.jpg",
        alt: "Villa Kaya dining area",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/Cam-3-Lounge-1024x614.jpg",
        alt: "Villa Kaya lounge",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/Cam-4-WideLounge-1024x512.jpg",
        alt: "Villa Kaya lounge",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/Cam-5DiningTop-1024x512.jpg",
        alt: "Villa Kaya dining area",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/Cam-6-Bedroom-1024x602.jpg",
        alt: "Villa Kaya bedroom",
        layout: "standard",
      },
      {
        src: "/images/developments/villa-kaya/Cam-8-Bathroom-1024x717.jpg",
        alt: "Villa Kaya bathroom",
        layout: "standard",
      },
    ],

    propertyDetails: {
      bedrooms: 3,
      bathrooms: 5,

      price: {
        usd: 228245,
        kes: 29500000,
      },

      investmentLabel: "INVEST IN UPCOMING",
      investmentTitle: "Villa Kaya",

      investmentDescription: [
        "Own a premium Wakusini 3 Bedroom home in Diani that will generate you capitals with high nightly rates and notable occupancy rates.",
        "Owning an investment villa in Diani is both easy and profitable when you choose us.",
      ],

      managementDescription:
        "Our dedicated villa management can take care of everything from cleaning and maintenance to bookings and check-ins.",

      amenities: [
        "Fully Furnished",
        "Solar Heater",
        "Bio-Digester",
        "Secured",
        "Backup Power",
        "Fine Finishing",
        "Private Pool",
        "Entertainment Pavilion",
        "Walk-in Closet",
        "Scenic Roof Top Sundowner Terrace",
        "Spacious Garden",
        "BBQ Grill",
        "4 Space Parking",
        "Borehole",
        "Private Outdoor Lounge",
        "Cosy Outdoor Dining",
      ],

      inclusions: {
        title: "FEATURES & INCLUSIONS",
        image: "/images/developments/villa-kaya/features.jpg",
        features: [
          "Modern Swahili Design",
          "3 bedroom(s)",
          "5 bathroom(s)",
          "Open concept layout",
          "Private pool",
          "275 sqm build area",
          "Private parking",
          "Construction time 5 months",
        ],
      },

      constructionDuration: "5 months",

      paymentTerms: [
        {
          percentage: 40,
          description: "Deposit",
        },
        {
          percentage: 30,
          description: "Commencement of construction",
        },
        {
          percentage: 25,
          description: "Payment during construction",
        },
        {
          percentage: 5,
          description: "At 2 months snag list",
        },
      ],

      buildingCost: {
        title: "COST OF BUILDING IN DIANI",
        rows: [
          {
            label: "Building + All Amenities",
            amount: "KES 26,500,000",
          },
          {
            label: "Fully Furnished",
            amount: "KES 29,500,000",
            highlight: true,
          },
          {
            label: "Architectural Design",
            amount: "FREE",
            note: "Normally KES 600,000",
          },
          {
            label: "Total Investment - Turn Key",
            amount: "KES 29,500,000",
            highlight: true,
          },
        ],
        disclaimer: [
          "Prices exclude taxes and are based on KSH/USD exchange rates, which may fluctuate.",
          "Building permits and boundary walls are not included.",
          "Land cost is not included.",
          "Free design applies to clients who purchase land and undertake construction with Wakusini.",
        ],
      },

      floorPlan: {
        image: "/images/developments/villa-kaya/Housebuild3-1024x747.jpg",
        alt: "Villa Kaya architectural floor plan and site layout",
      },

      architecturalDescription: [
        "The house is designed to offer maximum privacy so guests can enjoy a peaceful vacation in scenic Diani and its striking landscape with mesmerizing tall baobab trees.",
        "It is located on a private domain in a beautiful and quiet area.",
        "The house has a private swimming pool surrounded by tropical landscaping and a BBQ area.",
        "The property has been designed and fully equipped and furnished with holiday rentals in mind.",
        "There is also a security electric fence to ensure everything is safe and secure.",
      ],

      roi: {
        title: "RETURN ON INVESTMENT",
        scenarios: [
          {
            occupancyDays: 10,
            nightlyRate: { usd: 220, kes: 28000 },
            monthlyRevenue: { usd: 2200, kes: 280000 },
            monthlyExpenses: { usd: 200, kes: 24500 },
            monthlyProfit: { usd: 2000, kes: 255500 },
            annualProfit: { usd: 24000, kes: 3066000 },
            yearsToBreakEven: 9.1,
          },
          {
            occupancyDays: 17,
            nightlyRate: { usd: 220, kes: 28000 },
            monthlyRevenue: { usd: 3740, kes: 476000 },
            monthlyExpenses: { usd: 200, kes: 24500 },
            monthlyProfit: { usd: 3540, kes: 451500 },
            annualProfit: { usd: 42480, kes: 5418000 },
            yearsToBreakEven: 5.2,
          },
          {
            occupancyDays: 25,
            nightlyRate: { usd: 220, kes: 28000 },
            monthlyRevenue: { usd: 5500, kes: 700000 },
            monthlyExpenses: { usd: 200, kes: 24500 },
            monthlyProfit: { usd: 5300, kes: 675500 },
            annualProfit: { usd: 63600, kes: 8106000 },
            yearsToBreakEven: 3.5,
          },
        ],
        disclaimer:
          "These are indicative projections from the original property listing. Actual returns depend on occupancy, operating costs, taxes and management fees.",
      },

      locationDescription:
        "Villa Kaya is located in Diani, within walking distance of the white sandy beaches and close to local amenities and leisure activities.",

      locationMap: {
        image: "/images/developments/villa-kaya/map-1-1024x686.jpg",
        googleMapsUrl: "https://www.google.com/maps?q=-4.3188260,39.5634900",
        coordinates: {
          latitude: -4.318826,
          longitude: 39.56349,
        },
        highlights: [
          "Walking distance to the white sandy beaches",
          "Vibrant greenery",
          "Popular safari escapades",
          "Water sport activities",
          "Local shopping experience",
          "Cafés and restaurants",
          "12 minutes from the airport",
          "Island hopping",
        ],
      },
    },
  },

  {
    slug: "tulia-house",
    name: "Tulia House",
    location: "Diani Beach, Kenya",
    category: "Property Development",
    image: "/images/developments/tulia-house/TuliaWeb-1-1024x683.jpg",
    logo: "/images/logos/tulia-logo-150x150.png",
    introduction:
      "Discover Tulia House, one of the developments featured in the Wakusini portfolio.",
    overviewTitle: "A closer look at Tulia House.",
    overview: [
      "Add the verified project description here.",
      "Add further details about the property and its design here.",
    ],
    highlights: [],
    gallery: [
      {
        src: "/images/developments/tulia-house/TuliaWeb-1-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-03-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-04-1-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-05-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-06-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-07-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-08-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-12-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-13-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-14-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-15-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-16-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-17-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-18-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-19-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-20-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-21-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-22-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-23-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-24-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
      {
        src: "/images/developments/tulia-house/TuliaWeb-25-1024x683.jpg",
        alt: "Tulia House",
        layout: "standard",
      },
    ],

    propertyDetails: {
      bedrooms: 2,
      bathrooms: 4,

      price: {
        usd: 205112,
        kes: 26500000,
      },

      investmentLabel: "INVEST IN OFF-PLAN",
      investmentTitle: "Tulia House",

      investmentDescription: [
        "Introducing a stunning off-plan investment opportunity in Diani – a luxurious 2-bedroom villa that promises exceptional returns on occupancy and nightly rates. This villa is designed with a keen eye for detail and impeccable taste, with modern amenities and facilities that guarantee a comfortable and indulgent stay for guests. Strategically located in the heart of Diani, guests will have easy access to the beach, restaurants, and other exciting activities in the area.",

        "The property is designed with a tropical theme that incorporates the use of warm colors and natural materials to create a relaxing and inviting atmosphere. The name of the property, Tulia, is derived from the Swahili word which means 'chill,' as it reflects the laid-back and tranquil vibe of the place.",

        "This investment opportunity is perfect for anyone looking to expand their investment portfolio, with an opportunity to participate in the holiday rental market.",
      ],

      managementDescription:
        "Our dedicated villa management can take care of everything from cleaning and maintenance to bookings and check-ins.",

      amenities: [
        "Fully Furnished",
        "Solar Heater",
        "Bio-Digester",
        "Secured",
        "Fine Finishing",
        "Private Pool",
        "2 Space Parking",
        "Borehole",
        "Air Conditioning",
        "Outdoor Lounge",
        "Backup Power",
        "Movie Projector",
        "Sunken Lounge",
        "Spacious Cupboard Space",
        "Double Showers",
        "Bathtub",
      ],

      inclusions: {
        title: "FEATURES & INCLUSIONS",
        image: "/images/developments/tulia-house/features.jpg",
        features: [
          "Modern Tropical Design",
          "2 bedroom(s)",
          "4 bathroom(s)",
          "Open concept layout",
          "Private pool",
          "175 sqm build area",
          "Private parking",
          "Construction time 5 months",
        ],
      },

      constructionDuration: "5 months",

      buildingCost: {
        title: "COST OF BUILDING IN DIANI",
        rows: [
          {
            label: "Building + All Amenities",
            amount: "KES 22,500,000",
          },
          {
            label: "Fully Furnished",
            amount: "KES 25,500,000",
            highlight: true,
          },
          {
            label: "Architectural Design",
            amount: "FREE",
            note: "Normally KES 600,000",
          },
          {
            label: "Total Investment - Turn Key",
            amount: "KES 25,500,000",
            highlight: true,
          },
        ],
        disclaimer: [
          "The original listing's construction-cost graphic shows KES 25,500,000, while its headline advertises KES 26,500,000. Confirm the current price with Wakusini.",
          "Prices exclude taxes and are based on KSH/USD exchange rates, which may fluctuate.",
          "Building permits and boundary walls are included.",
          "Land cost is not included.",
          "Free design applies to clients who purchase land and undertake construction with Wakusini.",
        ],
      },

      floorPlan: {
        image: "/images/developments/tulia-house/floorplan-3-1024x747.jpg",
        alt: "Tulia House architectural floor plan and site layout",
      },

      paymentTerms: [
        {
          percentage: 40,
          description: "Deposit",
        },
        {
          percentage: 30,
          description: "Commencement of construction",
        },
        {
          percentage: 25,
          description: "Payment during construction",
        },
        {
          percentage: 5,
          description: "At 2 months snag list",
        },
      ],

      architecturalDescription: [
        "The villa is crafted to provide unparalleled privacy, offering guests an idyllic retreat where they can revel in the serene ambiance of Diani's picturesque landscape. Tucked away in a private domain, the property is located in a stunning and tranquil area, offering guests the perfect sanctuary for a peaceful vacation.",

        "The villa boasts a private swimming pool enveloped by lush tropical landscaping, offering a serene oasis to relax and unwind. Additionally, the property features a cozy outdoor lounge area, perfect for savoring leisurely moments with loved ones amidst the tropical breeze.",

        "Designed with the utmost attention to detail, the villa is fully furnished and equipped with everything needed for an unforgettable holiday experience. For added peace of mind, the property is fitted with a security electric fence, ensuring the safety and security of guests throughout their stay.",
      ],

      villaOverview: [
        "Welcome to your own personal paradise – a tropical villa designed to transport you to a world of serenity and tranquility. This luxurious villa features two spacious bedrooms, both ensuite and equipped with double showers and a bathtub, ensuring that guests can indulge in a pampering and rejuvenating experience.",

        "The open-plan layout of the kitchen, dining, and lounge areas creates a sense of spaciousness and fluidity, allowing guests to easily move from one area to another. The standout feature of the villa is the sunken lounge, which adds an extra level of elegance and sophistication to the space.",

        "The high ceilings of the villa are carefully designed to allow for optimal air flow and natural lighting, creating a sense of comfort and warmth that is unparalleled. The villa is also equipped with a drop-down movie projector, providing guests with a unique and immersive entertainment experience.",

        "Experience the ultimate in luxury and relaxation at this exquisite tropical villa, where every detail has been thoughtfully considered to create a truly unforgettable holiday experience.",
      ],

      roi: {
        title: "RETURN ON INVESTMENT",
        scenarios: [
          {
            occupancyDays: 10,
            nightlyRate: { usd: 180, kes: 21000 },
            monthlyRevenue: { usd: 1800, kes: 210000 },
            monthlyExpenses: { usd: 200, kes: 24500 },
            monthlyProfit: { usd: 1600, kes: 185500 },
            annualProfit: { usd: 19200, kes: 2226100 },
            yearsToBreakEven: 7.5,
          },
          {
            occupancyDays: 17,
            nightlyRate: { usd: 180, kes: 21000 },
            monthlyRevenue: { usd: 3060, kes: 357000 },
            monthlyExpenses: { usd: 200, kes: 24500 },
            monthlyProfit: { usd: 2860, kes: 332500 },
            annualProfit: { usd: 34320, kes: 3990000 },
            yearsToBreakEven: 4.2,
          },
          {
            occupancyDays: 25,
            nightlyRate: { usd: 180, kes: 21000 },
            monthlyRevenue: { usd: 4500, kes: 525000 },
            monthlyExpenses: { usd: 200, kes: 24500 },
            monthlyProfit: { usd: 4300, kes: 500500 },
            annualProfit: { usd: 51600, kes: 6006000 },
            yearsToBreakEven: 2.8,
          },
        ],
        disclaimer:
          "These are indicative projections from the original property listing. Calculations exclude applicable taxes and management fees. Actual returns depend on occupancy, operating costs and market conditions.",
      },

      locationDescription:
        "Tulia House is situated in Diani, offering access to the area's white sandy beaches, restaurants, cafés, shopping and water sport activities.",

      locationMap: {
        image: "/images/developments/tulia-house/map-1024x686.jpg",
        googleMapsUrl: "https://www.google.com/maps?q=-4.3188260,39.5634900",
        coordinates: {
          latitude: -4.318826,
          longitude: 39.56349,
        },
        highlights: [
          "Walking distance to the white sandy beaches",
          "Vibrant greenery",
          "Popular safari escapades",
          "Limitless water sport activities",
          "Local shopping experience",
          "Great selection of cafés and restaurants",
          "Minutes from the airport",
          "Island hopping",
        ],
      },
    },
  },
];

export function getDevelopmentBySlug(slug: string) {
  return developments.find((development) => development.slug === slug);
}
