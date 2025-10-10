// app/api/cars/route.ts
import { NextResponse } from "next/server";
import { allCars } from "@/lib/carData";

export async function GET() {
  // Return the centralized car data from lib/carData.ts
  // Later this can be easily modified to fetch from Firebase or other database
  // while maintaining the same interface
  
  try {
    // For now, return the static data from our centralized source
    // In the future, you can replace this with:
    // const cars = await fetchCarsFromFirebase();
    // or any other data source
    
    return NextResponse.json(allCars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    
    // Return an error response
    return NextResponse.json(
      { error: "Failed to fetch cars" },
      { status: 500 }
    );
  }
}
