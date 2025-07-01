// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Find Your Next Car Today</h1>
        <p className="text-lg text-gray-600 mb-6">Browse top-quality vehicles at affordable prices</p>
        <Link href="/inventory">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            View Cars
          </button>
        </Link>
      </section>

      {/* Featured Cars */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/public/premio.jpg"
              alt="Toyota Premio"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Toyota Premio</h3>
              <p className="text-sm text-gray-500">KES 950,000</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/cars/car2.jpg"
              alt="Mazda Demio"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Mazda Demio</h3>
              <p className="text-sm text-gray-500">KES 650,000</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/cars/car3.jpg"
              alt="Nissan Note"
              width={400}
              height={250}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Nissan Note</h3>
              <p className="text-sm text-gray-500">KES 580,000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
