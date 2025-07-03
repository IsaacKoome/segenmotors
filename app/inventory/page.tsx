// app/inventory/page.tsx
import { CarCard } from "@/components/CarCard"; // Import your CarCard component

// Define your static car data
const cars = [
  {
    id: "1",
    name: "SUBARU IMPREZA",
    price: "1.25M",
    imageUrl: "/cars/white-subaru.jpeg",
    altText: "White Subaru Impreza",
    year: "2014",
    engine: "2000cc",
    mileage: "low mireage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "Subaru-Impreza-2014",
  },
  {
    id: "2",
    name: "NISSAN ADVAN",
    price: "480K",
    imageUrl: "/cars/nissanadvan.jpeg",
    altText: "Red Mazda Demio hatchback",
    year: "2011",
    engine: "1300cc",
    mileage: "low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "Nissan-Advan-2011",
  },
  {
    id: "3",
    name: "NISSAN NV350",
    price: "2.8M",
    imageUrl: "/cars/nissan-NV350.jpeg", // Assuming this is the correct path for "nissan note.jpeg"
    altText: "White Nissan NV350 hatchback",
    year: "2018",
    engine: "1500cc",
    mileage: "low mileage",
    transmission: "Manual",
    fuelType: "Diesel",
    linkSlug: "Nissan-NV350-2018",
  },
  
  {
    id: "4",
    name: "TOYOTA VITZ",
    price: "1.28M",
    imageUrl: "/cars/vitz-blue.jpeg", // Make sure you have this image
    altText: "Blue Toyota Compact",
    engine: "1000cc",
    year: "2018",
    mileage: "low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "Toyota-Vitz-2017",
  },
  {
    id: "5",
    name: "DAIHATSU MIRA",
    price: "630K",
    imageUrl: "/cars/dai-mira.jpeg", // Make sure you have this image
    altText: "White Daihatsu Mira",
    year: "2017",
    engine: "650cc",
    mileage: "low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "DAI-MIRA-2017",
  },
  
  {
    id: "6",
    name: "NISSAN JUKE",
    price: "1.15",
    imageUrl: "/cars/nissan-juke.jpeg", // Make sure you have this image
    altText: "Black Nissan Juke",
    year: "2018",
    engine: "1200",
    mileage: "low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "nissan-juke-2018",
  },
   {
    id: "7",
    name: "HONDA FIT",
    price: "1.09M",
    imageUrl: "/cars/honda-fit.jpeg", // Make sure you have this image
    altText: "Black Nissan Juke",
    year: "2014",
    engine: "1200cc",
    mileage: "low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "Honda-Fit-2014",
  },
 {
    id: "8",
    name: "TOYOTA VITZ",
    price: "630K",
    imageUrl: "/cars/toyota-vitz-2012.jpeg", // Make sure you have this image
    altText: "White Toyota Vitz",
    year: "2012",
    engine: "1000cc",
    mileage: "low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "Toyota-Vitz-2012",
  },
  {
    id: "9",
    name: "SUZUKI",
    price: "570K",
    imageUrl: "/cars/suzuki.jpeg",
    altText: "White Suzuki",
    engine: "1300cc",
    year: "2011",
  }
];

export const metadata = {
  title: "Segen Motors - Available Inventory",
  description: "Explore our wide selection of quality used cars for sale.",
};


export default function InventoryPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Our Available Vehicles 🚗</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}