// components/CustomerTestimonials.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

export const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "James Mwangi",
      location: "Nakuru",
      rating: 5,
      text: "Excellent service from start to finish! The team at Segen Motors helped me find the perfect Subaru for my family. Transparent pricing and no hidden fees.",
      vehicle: "Subaru Impreza 2014",
    },
    {
      name: "Said Hassan",
      location: "Mombasa",
      rating: 5,
      text: "I was impressed by their professionalism and the quality of vehicles. My Toyota Prado has been running perfectly for over a year now. Highly recommended!",
      vehicle: "Land Rover Freelander",
    },
    {
      name: "Grace Akinyi",
      location: "Kisumu",
      rating: 5,
      text: "The financing options made it easy for me to get my dream car. The after-sales service is outstanding. Thank you Segen Motors for the excellent experience!",
      vehicle: "Toyota Vitz 2016",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Quote className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Customer Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* Fixed: Escaped apostrophe */}
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers 
            have to say about their experience with Segen Motors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-blue-600 rounded-full p-2">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                {/* Fixed: Escaped quotes */}
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Customer Info */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-blue-600 font-medium">
                      Purchased:
                    </p>
                    <p className="text-sm text-gray-700">
                      {testimonial.vehicle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/testimonials" passHref>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-200"
            >
              Read More Reviews →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
