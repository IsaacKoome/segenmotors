// components/WhyChooseUs.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Users, Wrench } from "lucide-react";

export const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Quality Inspection",
      description: "Every vehicle undergoes thorough inspection and certification before sale.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprises. What you see is what you pay.",
    },
    {
      icon: Users,
      title: "Exceptional Service",
      description: "Our experienced team provides personalized assistance throughout your journey.",
    },
    {
      icon: Wrench,
      title: "After-Sales Support",
      description: "Comprehensive warranty and maintenance services for your peace of mind.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl shadow-md mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Segen Motors?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We pride ourselves on delivering exceptional value through quality vehicles, 
            transparent processes, and outstanding customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/about" passHref>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Learn More About Us →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
