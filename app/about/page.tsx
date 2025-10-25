import { Shield, DollarSign, Users, Wrench, MapPin, Clock, Car } from "lucide-react";
import React from "react";

// Reusable component for the feature cards
const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] text-center h-full flex flex-col justify-start items-center group border border-gray-100">
    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed flex-grow">
      {description}
    </p>
  </div>
);

// Data for the "Why Choose Us" section on the About page
const missionValues = [
  {
    icon: Shield,
    title: "Our Mission: Trust and Quality",
    description: "To be the most trusted source for quality used vehicles in Nairobi, ensuring every car meets the highest standards of safety and performance. We sell peace of mind, not just cars.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing Promise",
    description: "We believe in honesty. Our pricing is straightforward, with no hidden costs or last-minute surprises. We offer the best value for your investment.",
  },
  {
    icon: Users,
    title: "Customer-First Service",
    description: "Your satisfaction is our drive. Our team is dedicated to providing personalized, friendly, and expert guidance from your first inquiry to post-sale support.",
  },
  {
    icon: Wrench,
    title: "Certified Vehicle Inspection",
    description: "Every vehicle is rigorously inspected by certified mechanics. We guarantee the mechanical integrity of our inventory for your complete confidence.",
  },
];

// Data for the "Where to Find Us" section
const locationDetails = [
  {
    icon: MapPin,
    title: "Our Location",
    description: "Find us conveniently located in Nairobi, Kenya. Visit our showroom to view our full inventory in person and meet our team.",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "We are open Monday to Saturday, 9:00 AM to 5:00 PM. We recommend scheduling an appointment for the best experience.",
  },
  {
    icon: Car,
    title: "Inventory Focus",
    description: "We specialize in a diverse range of reliable, fuel-efficient, and well-maintained vehicles, from compact hatchbacks to sturdy SUVs.",
  },
];


export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-50 rounded-xl shadow-inner mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Learn More About Segen Motors
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          We are more than just a car dealership; we are your trusted partner in finding the perfect vehicle that fits your life and your budget.
        </p>
      </section>

      {/* Our Story/Mission Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Our Story & Commitment
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-lg text-gray-600 space-y-6">
            
            <p>
              From our humble beginnings, we have grown into a reputable name by focusing relentlessly on **customer satisfaction** and the meticulous inspection of every single vehicle that enters our inventory. Our commitment goes beyond the sale; we aim to build lifelong relationships with our clients.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Core Values
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-3">✅</span>
                <span>**Integrity:** Absolute honesty in every transaction.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-3">🤝</span>
                <span>**Reliability:** Offering only cars that we would drive ourselves.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 text-2xl mr-3">🌟</span>
                <span>**Excellence:** Striving for the highest standard in service and vehicle preparation.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Detailed Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Why We Are Your Go-To Dealership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionValues.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Location and Focus Section */}
      <section className="mb-16 bg-gray-50 p-10 rounded-xl shadow-inner">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Connect With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locationDetails.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
