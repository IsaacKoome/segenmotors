// components/BrowseCategories.tsx
import Link from "next/link";
import { Car, Truck, Zap, Users } from "lucide-react";

export const BrowseCategories = () => {
  const categories = [
    {
      name: "SUVs",
      description: "Spacious and versatile vehicles for families and adventures",
      icon: Truck,
      imageUrl: "/categories/suv-category.jpg", // You'll need to add these images
      linkUrl: "/inventory?category=suv",
      count: "8+ vehicles",
    },
    {
      name: "Sedans",
      description: "Comfortable and efficient cars for daily commuting",
      icon: Car,
      imageUrl: "/categories/sedan-category.jpg",
      linkUrl: "/inventory?category=sedan",
      count: "6+ vehicles",
    },
    {
      name: "Hybrids",
      description: "Eco-friendly vehicles with excellent fuel economy",
      icon: Zap,
      imageUrl: "/categories/hybrid-category.jpg",
      linkUrl: "/inventory?category=hybrid",
      count: "3+ vehicles",
    },
    {
      name: "Family Cars",
      description: "Reliable and safe vehicles perfect for families",
      icon: Users,
      imageUrl: "/categories/family-category.jpg",
      linkUrl: "/inventory?category=family",
      count: "10+ vehicles",
    },
  ];

  return (
    <section className="py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect vehicle for your needs. Explore our diverse inventory 
            organized by vehicle type and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={index}
                href={category.linkUrl}
                className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700">
                  {/* Fallback gradient background if image doesn't exist */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-blue-700/80 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-white" />
                  </div>
                  {/* Uncomment when you have category images */}
                  {/* <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  /> */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                      {category.name}
                    </h3>
                    <span className="text-sm text-blue-600 font-medium">
                      {category.count}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/inventory"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200"
          >
            View All Inventory →
          </Link>
        </div>
      </div>
    </section>
  );
};
