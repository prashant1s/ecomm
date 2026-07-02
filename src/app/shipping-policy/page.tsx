import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Truck, Clock, MapPin, PhoneCall } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans text-gray-700">
        <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 md:p-14 text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Shipping Policy</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              At Jiya JR, we are committed to delivering your orders safely and on time. We work with trusted courier partners to ensure a smooth shipping experience.
            </p>
          </div>
          
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-6">
                <Clock className="w-6 h-6 text-[#D4AF37]" /> Order Processing
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0"></div>
                  Orders are processed within 1–2 business days after successful payment confirmation.
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0"></div>
                  Orders placed on Sundays or public holidays will be processed on the next business day.
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0"></div>
                  Once your order is shipped, you will receive a tracking ID via email or SMS.
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-6">
                <Truck className="w-6 h-6 text-[#D4AF37]" /> Estimated Delivery Time
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">Metro Cities</h3>
                  <p className="text-[#D4AF37] font-bold text-xl">3–5 Days</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">Other Cities</h3>
                  <p className="text-[#D4AF37] font-bold text-xl">5–7 Days</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">Remote Areas</h3>
                  <p className="text-[#D4AF37] font-bold text-xl">7–10 Days</p>
                </div>
              </div>
              <p className="text-sm italic text-gray-500 text-center">
                * Delivery timelines are estimates and may be affected by weather conditions, courier delays, or festivals.
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-6">
                <MapPin className="w-6 h-6 text-[#D4AF37]" /> Coverage & Restrictions
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0"></div>
                  We deliver to most serviceable PIN codes across India.
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0"></div>
                  Customers are responsible for providing accurate shipping details. We are not responsible for delays due to incorrect addresses.
                </li>
                <li className="flex gap-4 font-semibold text-gray-900">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0"></div>
                  Currently, Jiya JR ships only within India.
                </li>
              </ul>
            </section>

            <section className="bg-gray-900 rounded-2xl shadow-sm border border-gray-800 p-8 md:p-10 text-white">
              <h2 className="flex items-center gap-3 text-xl font-bold mb-4 text-[#D4AF37]">
                <PhoneCall className="w-6 h-6" /> Contact Us
              </h2>
              <div className="flex flex-col md:flex-row gap-6 mt-6">
                <div className="bg-white/10 px-6 py-4 rounded-xl border border-white/5 flex-1">
                  <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Email Us</span>
                  <strong className="text-lg">support@jiyajr.com</strong>
                </div>
                <div className="bg-white/10 px-6 py-4 rounded-xl border border-white/5 flex-1">
                  <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Call / WhatsApp</span>
                  <strong className="text-lg">+91 9971509003</strong>
                </div>
              </div>
            </section>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}