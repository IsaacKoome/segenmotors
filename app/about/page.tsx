// app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8"> {/* Added padding for better layout */}
      <h1 className="text-4xl font-bold mb-6 text-blue-700 text-center">About Segen Motors</h1> {/* Increased font, centered */}

      <p className="text-gray-700 text-lg leading-relaxed mb-6"> {/* Larger text, better line height */}
        At <strong className="text-blue-800">Segen Motors</strong>, we specialize in the buying and selling of quality pre-owned vehicles.
        Based in Kenya, we are committed to offering reliable cars at fair prices while delivering excellent customer service.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Whether you&apos;re looking to buy your first car, upgrade your ride, or sell your current vehicle, our team is here to help you
        through every step of the process. Our inventory includes a wide range of makes and models — all inspected and verified.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        What sets us apart is our transparency, affordability, and commitment to building long-lasting relationships with our clients.
        We believe every Kenyan deserves access to a dependable car, and we strive to make that possible.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        <strong className="text-blue-800">Visit us today</strong> and experience the Segen Motors difference — where trust meets value.
      </p>

    </div>
  );
}