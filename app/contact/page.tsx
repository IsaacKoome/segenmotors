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
  <p className="text-gray-700 mb-2">
    🏢 <strong>Segen Motors</strong><br />
    📍 Located at <strong>Ridgeways, along Tala Road off Kiambu Road</strong>, Nairobi
  </p>
 <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.8980041245372!2d36.83531807404536!3d-1.2306596355659138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2ske!4v1761569372602!5m2!1sen!2ske"
    width="100%"
    height="300"
    allowFullScreen
    loading="lazy"
    className="rounded-md shadow"
  ></iframe>
</div>
    </div>
  );
}
