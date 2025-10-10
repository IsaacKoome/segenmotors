// lib/carData.ts
// Centralized car data source - Single source of truth for all car information

export interface Car {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  altText: string;
  year: string;
  engine: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  linkSlug: string;
  description?: string;
}

export const allCars: Car[] = [
  {
    id: "1",
    name: "SUBARU IMPREZA",
    price: "1.25M",
    imageUrl: "/cars/white-subaru.jpeg",
    altText: "White Subaru Impreza",
    year: "2014",
    engine: "2000cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "subaru-impreza-2014",
    description: "Reliable AWD sedan with sporty performance and fuel efficiency.",
  },
  {
    id: "2",
    name: "TOYOTA PRADO KBE",
    price: "880,000",
    imageUrl: "/cars/pradokbe.jpeg",
    altText: "Toyota Prado KBE",
    year: "2001",
    engine: "3000cc",
    mileage: "Medium Mileage",
    transmission: "Automatic",
    fuelType: "Diesel",
    linkSlug: "toyota-prado-kbe",
    description: "Rugged SUV built for adventure and off-road capabilities.",
  },
  {
    id: "3",
    name: "NISSAN NV 350",
    price: "2.8M",
    imageUrl: "/cars/nv350.jpeg",
    altText: "Nissan NV 350",
    year: "2018",
    engine: "2500cc",
    mileage: "Low Mileage",
    transmission: "Manual",
    fuelType: "Diesel",
    linkSlug: "nv-350-2018",
    description: "Spacious commercial van ideal for business and cargo transport.",
  },
  {
    id: "4",
    name: "NISSAN NOTE E-POWER",
    price: "1.25M",
    imageUrl: "/cars/nissannote.jpeg",
    altText: "Nissan Note E-power",
    year: "2018",
    engine: "1200cc (Hybrid)",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "nissan-note-e-power-2018",
    description: "Innovative hybrid technology with excellent fuel economy.",
  },
  {
    id: "5",
    name: "NISSAN ADVAN",
    price: "480K",
    imageUrl: "/cars/nissanadvan.jpeg",
    altText: "Nissan Advan Station Wagon",
    year: "2011",
    engine: "1300cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "nissan-advan-2011",
    description: "Spacious and affordable family car ideal for city and long drives.",
  },
  {
    id: "6",
    name: "TOYOTA VITZ",
    price: "1.28M",
    imageUrl: "/cars/vitz-blue.jpeg",
    altText: "Blue Toyota Vitz",
    year: "2018",
    engine: "1000cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "toyota-vitz-2018",
    description: "Compact and economical hatchback perfect for daily commuting.",
  },
  {
    id: "7",
    name: "TOYOTA PRADO J120",
    price: "4.8M",
    imageUrl: "/cars/pradoj120.jpg",
    altText: "Toyota Prado J120",
    year: "2005",
    engine: "3500cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "toyota-prado-j120",
    description: "Rugged SUV built for adventure and family trips.",
  },
  {
    id: "8",
    name: "MAZDA CX-5",
    price: "2.8M",
    imageUrl: "/cars/mazda-cx5.jpg",
    altText: "Mazda CX-5",
    year: "2018",
    engine: "2500cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "mazda-cx5-2018",
    description: "Stylish crossover with premium features and comfort.",
  },
  {
    id: "9",
    name: "NISSAN X-TRAIL",
    price: "3.2M",
    imageUrl: "/cars/nissan-xtrail.jpg",
    altText: "Nissan X-Trail",
    year: "2017",
    engine: "2500cc",
    mileage: "Low Mileage",
    transmission: "CVT",
    fuelType: "Petrol",
    linkSlug: "nissan-xtrail-2017",
    description: "Versatile SUV with advanced safety features.",
  },
  {
    id: "10",
    name: "MERCEDES-BENZ GLE 350",
    price: "3.4M",
    imageUrl: "/cars/benz-gle-350.avif",
    altText: "Silver Mercedes GLE 350",
    year: "2016",
    engine: "2000cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "mercedes-gle-350-2020",
    description: "Luxury SUV with premium features and exceptional comfort.",
  },
];

// Export the legacy carList for backward compatibility (if needed)
// This can be removed once all references are updated to use allCars
export const carList = allCars.slice(4, 7); // Nissan Advan, Toyota Vitz, Toyota Prado J120
