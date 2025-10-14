// lib/carData.ts
// Centralized car data source - Single source of truth for all car information

export interface Car {
  id: string;
  name: string;
  price: string;
  imageUrl: string; // Main/thumbnail image
  altText: string;
  year: string;
  engine: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  linkSlug: string;
  description?: string;
  images?: string[]; // ✅ NEW: Array of additional image URLs for gallery
}

export const allCars: Car[] = [
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
    images: [
      "/cars/nissannote.jpeg",
      "/cars/nissannote1.jpeg",
      "/cars/nissannote2.jpeg",
      "/cars/nissannote3.jpeg",
      "/cars/nissannote4.jpeg",
      "/cars/nissannote5.jpeg",
      "/cars/nissannote6.jpeg",
      "/cars/nissannote7.jpeg",
      "/cars/nissannote8.jpeg",
      "/cars/nissannote9.jpeg",
      "/cars/nissannote10.jpeg",
      "/cars/nissannote11.jpeg",
      "/cars/nissannote12.jpeg",
      
    ],
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
    images: [
      "/cars/pradokbe.jpeg",
      "/cars/pradokbe1.jpeg",
      "/cars/pradokbe2.jpeg",
      "/cars/pradokbe3.jpeg",
      "/cars/pradokbe4.jpeg",
      "/cars/pradokbe5.jpeg",
      "/cars/pradokbe6.jpeg",
      "/cars/pradokbe7.jpeg",
      "/cars/pradokbe8.jpeg",
      "/cars/pradokbe9.jpeg",
      "/cars/pradokbe10.jpeg",
      "/cars/pradokbe11.jpeg",
      "/cars/pradokbe12.jpeg",
      "/cars/pradokbe13.jpeg",
      "/cars/pradokbe14.jpeg",
      "/cars/pradokbe15.jpeg", 

    ],
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
    images: [
      "/cars/nv350.jpeg",
      "/cars/nv3501.jpeg",
      "/cars/nv3502.jpeg",
      "/cars/nv3503.jpeg",
      "/cars/nv3504.jpeg",
      "/cars/nv3505.jpeg",
      "/cars/nv3506.jpeg",
      "/cars/nv3507.jpeg",
      "/cars/nv3508.jpeg",
      "/cars/nv3509.jpeg",
      "/cars/nv35010.jpeg",
      "/cars/nv35011.jpeg",
      "/cars/nv35012.jpeg",
      "/cars/nv35013.jpeg",
      "/cars/nv35014.jpeg",
      "/cars/nv35015.jpeg",

      
    ],
  },
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
    images: [
      "/cars/white-subaru.jpeg",
      "/cars/subaru-impreza-interior.jpeg", // You'll need to add this image
      "/cars/subaru-impreza-rear.jpeg",     // You'll need to add this image
      "/cars/subaru-impreza-side.jpeg",     // You'll need to add this image
    ],
  },
  {
    id: "5",
    name: "Subaru Stella",
    price: "790,000(Negotiable)",
    imageUrl: "/cars/subarustella.jpeg",
    altText: "Subaru Stella",
    year: "2017",
    engine: "650cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "subaru-stella-2017",
    description: "Spacious and affordable family car ideal for city and long drives.",
    images: [
      "/cars/subarustella.jpeg",
      "/cars/subarustella1.jpeg",
      "/cars/subarustella2.jpeg",
      "/cars/subarustella3.jpeg", 
      "/cars/subarustella4.jpeg",
      "/cars/subarustella5.jpeg",
      "/cars/subarustella6.jpeg", 
      "/cars/subarustella7.jpeg",
      "/cars/subarustella8.jpeg",
      "/cars/subarustella9.jpeg", 
      "/cars/subarustella10.jpeg",
      "/cars/subarustella11.jpeg",
      "/cars/subarustella12.jpeg",
      
    
    ],
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
    images: [
      "/cars/vitz-blue.jpeg",
      "/cars/vitz-interior.jpeg",    // You'll need to add this image
      "/cars/vitz-rear.jpeg",        // You'll need to add this image
      "/cars/vitz-dashboard.jpeg",   // You'll need to add this image
    ],
  },
  {
    id: "7",
    name: "TOYOTA PRADO J120",
    price: "1.2M",
    imageUrl: "/cars/pradoj120.jpg",
    altText: "Toyota Prado J120",
    year: "2005",
    engine: "3500cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "toyota-prado-j120",
    description: "Rugged SUV built for adventure and family trips.",
    images: [
      "/cars/pradoj120.jpg",
      "/cars/pradoj1201.jpeg", // You'll need to add this image
      "/cars/pradoj1202.jpeg",     // You'll need to add this image
      "/cars/pradoj1203.jpeg", 
      "/cars/pradoj1204.jpeg",
      "/cars/pradoj1205.jpeg",
      "/cars/pradoj1206.jpeg",  
      "/cars/pradoj1207.jpeg", 
      "/cars/pradoj1208.jpeg",
      "/cars/pradoj1209.jpeg", 
      "/cars/pradoj12010.jpeg",
      "/cars/pradoj12011.jpeg",// You'll need to add this image
    ],
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
    images: [
      "/cars/mazda-cx5.jpg",
      "/cars/mazda-cx5-interior.jpeg", // You'll need to add this image
      "/cars/mazda-cx5-rear.jpeg",     // You'll need to add this image
      "/cars/mazda-cx5-side.jpeg",     // You'll need to add this image
    ],
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
    images: [
      "/cars/nissan-xtrail.jpg",
      "/cars/nissan-xtrail-interior.jpeg", // You'll need to add this image
      "/cars/nissan-xtrail-rear.jpeg",     // You'll need to add this image
      "/cars/nissan-xtrail-cargo.jpeg",    // You'll need to add this image
    ],
  },
  {
    id: "10",
    name: "Honda Fit Hybrid",
    price: "650k",
    imageUrl: "/cars/hondafit15.jpeg",
    altText: "White Honda Fit Hybrid",
    year: "2012",
    engine: "1300cc (Hybrid)",
    mileage: "Medium Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "honda-fit-hybrid-2012",
    description: "Compact, stylish and reliable. Clean Inside out. Perfect for city and long drives.",
    images: [
      "/cars/hondafit17.jpeg",
      "/cars/hondafit1.jpeg",
      "/cars/hondafit2.jpeg",
      "/cars/hondafit3.jpeg",
      "/cars/hondafit4.jpeg",
      "/cars/hondafit5.jpeg",
      "/cars/hondafit6.jpeg",
      "/cars/hondafit7.jpeg",
      "/cars/hondafit8.jpeg",
      "/cars/hondafit9.jpeg",
      "/cars/hondafit10.jpeg",
      "/cars/hondafit11.jpeg",
      "/cars/hondafit12.jpeg",
      "/cars/hondafit13.jpeg",
      "/cars/hondafit14.jpeg",
      "/cars/hondafit15.jpeg",
      "/cars/hondafit16.jpeg",

     
    ],
  },
];

// Export the legacy carList for backward compatibility (if needed)
// This can be removed once all references are updated to use allCars
export const carList = allCars.slice(4, 7); // Nissan Advan, Toyota Vitz, Toyota Prado J120

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
