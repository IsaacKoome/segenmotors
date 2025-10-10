import { NextResponse } from "next/server";

export async function GET() {
  // Later we’ll fetch from Firebase, but for now return static demo data.
  const cars = [
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
    },
    {
  id: "3",
  name: "Nissan NV 350",
  price: "2.8M",
  imageUrl: "/cars/nv350.jpeg",
  altText: "Nissan NV 350",
  year: "2018",
  engine: "2500cc",
  mileage: "Low Mileage",
  transmission: "Manual",
  fuelType: "Diesel",
  linkSlug: "nv-350-2018",
},
{
  id: "4",
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
},
  ];

  return NextResponse.json(cars);
}
