// lib/carData.ts

// ✅ Updated Car interface to support multiple images
export interface Car {
  id: string;
  name: string;
  price: string;
  imageUrl: string; // Main/thumbnail image
  altText: string;
  engine?: string;
  year?: string;
  mileage?: string;
  transmission?: string;
  fuelType?: string;
  linkSlug: string;
  description?: string;
  images?: string[]; // Array of additional image URLs for gallery
}

// ✅ Centralized car data with multiple images support
export const allCars: Car[] = [
  {
    id: "1",
    name: "SUBARU IMPREZA",
    price: "1.25M",
    imageUrl: "/cars/white-subaru.jpeg",
    altText: "White Subaru Impreza",
    year: "2014",
    engine: "2000cc",
    mileage: "Low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "subaru-impreza-2014",
    description: "Reliable AWD sedan with sporty performance and fuel efficiency. Perfect for both city driving and weekend adventures.",
    images: [
      "/cars/white-subaru.jpeg", // Main image
      "/cars/white-subaru.jpeg", // For demo, using same image
      "/cars/white-subaru.jpeg", // In real app, you'd have different angles
      "/cars/white-subaru.jpeg", // e.g., interior, rear, side views
    ],
  },
  {
    id: "2",
    name: "NISSAN ADVAN",
    price: "480K",
    imageUrl: "/cars/nissanadvan.jpeg",
    altText: "Nissan Advan Station Wagon",
    year: "2011",
    engine: "1300cc",
    mileage: "Low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "nissan-advan-2011",
    description: "Spacious and affordable family car ideal for city and long drives. Excellent fuel economy and reliability.",
    images: [
      "/cars/nissanadvan.jpeg",
      "/cars/nissanadvan.jpeg",
      "/cars/nissanadvan.jpeg",
      "/cars/nissanadvan.jpeg",
    ],
  },
  {
    id: "3",
    name: "TOYOTA VITZ",
    price: "1.28M",
    imageUrl: "/cars/vitz-blue.jpeg",
    altText: "Blue Toyota Vitz",
    year: "2018",
    engine: "1000cc",
    mileage: "Low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "toyota-vitz-2018",
    description: "Compact and economical hatchback perfect for daily commuting. Modern design with excellent fuel efficiency.",
    images: [
      "/cars/vitz-blue.jpeg",
      "/cars/vitz-blue.jpeg",
      "/cars/vitz-blue.jpeg",
      "/cars/vitz-blue.jpeg",
    ],
  },
  {
    id: "4",
    name: "TOYOTA PRADO KBE",
    price: "880,000",
    imageUrl: "/cars/pradokbe.jpeg",
    altText: "Toyota Prado KBE",
    year: "2001",
    engine: "3000cc",
    mileage: "Medium Mileage",
    transmission: "Automatic",
    fuelType: "Diesel",
    linkSlug: "toyota-prado-kbe-2001",
    description: "Rugged and reliable SUV perfect for off-road adventures and family trips. Proven durability and performance.",
    images: [
      "/cars/pradokbe.jpeg",
      "/cars/pradokbe.jpeg",
      "/cars/pradokbe.jpeg",
      "/cars/pradokbe.jpeg",
    ],
  },
  {
    id: "5",
    name: "Nissan NV 350",
    price: "2.8M",
    imageUrl: "/cars/nv350.jpeg",
    altText: "Nissan NV 350",
    year: "2018",
    engine: "2500cc",
    mileage: "Low Mileage",
    transmission: "Manual",
    fuelType: "Diesel",
    linkSlug: "nissan-nv-350-2018",
    description: "Spacious commercial van ideal for business use. Excellent cargo capacity and fuel efficiency for commercial operations.",
    images: [
      "/cars/nv350.jpeg",
      "/cars/nv350.jpeg",
      "/cars/nv350.jpeg",
      "/cars/nv350.jpeg",
    ],
  },
  {
    id: "6",
    name: "Nissan Note E-power",
    price: "1.25M",
    imageUrl: "/cars/nissannote.jpeg",
    altText: "Nissan Note E-power",
    year: "2018",
    engine: "1200cc(hybrid)",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "nissan-note-e-power-2018",
    description: "Innovative hybrid technology with exceptional fuel economy. Perfect blend of efficiency and modern features.",
    images: [
      "/cars/nissannote.jpeg",
      "/cars/nissannote.jpeg",
      "/cars/nissannote.jpeg",
      "/cars/nissannote.jpeg",
    ],
  },
  {
    id: "7",
    name: "TOYOTA PRADO J120",
    price: "1.2M",
    imageUrl: "/cars/pradoj120.jpg",
    altText: "Toyota Prado J120",
    year: "2005",
    engine: "3000cc",
    mileage: "Medium Mileage",
    transmission: "Automatic",
    fuelType: "Diesel",
    linkSlug: "toyota-prado-j120-2005",
    description: "Classic and dependable SUV with proven off-road capabilities. Perfect for families who love adventure.",
    images: [
      "/cars/pradoj120.jpg",
      "/cars/pradoj120.jpg",
      "/cars/pradoj120.jpg",
      "/cars/pradoj120.jpg",
    ],
  },
  {
    id: "8",
    name: "MERCEDES BENZ GLE 350",
    price: "3.5M",
    imageUrl: "/cars/benz-gle-350.jpg",
    altText: "Mercedes Benz GLE 350",
    year: "2016",
    engine: "3000cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "mercedes-benz-gle-350-2016",
    description: "Luxury SUV with premium features and exceptional performance. Experience the pinnacle of automotive excellence.",
    images: [
      "/cars/benz-gle-350.jpg",
      "/cars/benz-gle-350.jpg",
      "/cars/benz-gle-350.jpg",
      "/cars/benz-gle-350.jpg",
    ],
  },
];

// ✅ Helper function to get a car by its linkSlug
export function getCarBySlug(slug: string): Car | undefined {
  return allCars.find((car) => car.linkSlug === slug);
}

// ✅ Helper function to get related cars (excluding the current one)
export function getRelatedCars(currentCarSlug: string, limit: number = 3): Car[] {
  return allCars
    .filter((car) => car.linkSlug !== currentCarSlug)
    .slice(0, limit);
}
