// app/contact/page.tsx

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">📞 Contact Us</h1>

      <p className="text-gray-700 mb-4">
        Have a question about a car? Want to book a visit or make an offer? Reach out — we’d love to hear from you!
      </p>

      {/* Phone Numbers */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📱 Phone Numbers</h2>
        <ul className="space-y-1 text-gray-800">
          <li>
            📞 <a href="tel:+254759500436" className="text-blue-600 hover:underline">0759 500 436</a>
          </li>
          <li>
            📞 <a href="tel:+254700119340" className="text-blue-600 hover:underline">0700 119 340</a>
          </li>
        </ul>
      </div>

      {/* WhatsApp Links */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💬 WhatsApp</h2>
        <ul className="space-y-1 text-gray-800">
          <li>
            💬 <a href="https://wa.me/254759500436" target="_blank" className="text-green-600 hover:underline">Chat on WhatsApp (0759 500 436)</a>
          </li>
        </ul>
      </div>

      {/* Email */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📧 Email</h2>
        <p>
          ✉️ <a href="mailto:segenmotordealers51@gmail.com" className="text-blue-600 hover:underline">
            segenmotordealers51@gmail.com
          </a>
        </p>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📍 Location</h2>
        <p className="text-gray-700">
          🏢 <strong>Segen Motors</strong><br />
          📍 Located at <strong>Wonderjoy, along Kiambu Road</strong>, Nairobi
        </p>
      </div>

      {/* Google Maps Placeholder */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">🗺️ Find Us on Google Maps</h2>
        <p className="text-sm text-gray-600 mb-2">* Google Maps location integration coming soon</p>
        <div className="border rounded-md h-64 flex items-center justify-center bg-gray-100 text-gray-400">
          Google Maps Embed
        </div>
      </div>
    </div>
  );
}
