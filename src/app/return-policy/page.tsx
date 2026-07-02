import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RotateCcw, AlertTriangle, Info, PhoneCall } from "lucide-react";

export default function ReturnPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans text-gray-700">
        <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 md:p-14 text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Return & Refund Policy</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              At Jiya JR, we strive to deliver premium-quality products and ensure every order is carefully inspected before dispatch.
            </p>
          </div>
          
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-6">
                <RotateCcw className="w-6 h-6 text-red-500" /> No Return & No Refund Policy
              </h2>
              <div className="bg-red-50 text-red-800 p-6 rounded-xl border border-red-100 mb-6 font-medium">
                All purchases made from Jiya JR are final. We do not accept returns, exchanges, or refunds once an order has been placed and delivered.
              </div>
              <p className="mb-4 text-gray-600">
                As our products are carefully packed and quality-checked before shipment, we are unable to offer returns or refunds for reasons including, but not limited to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                {['Change of mind', 'Incorrect size selected by customer', 'Color or design preference', 'Delay caused by courier services', 'Any other personal preference'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#D4AF37]" /> Damaged or Incorrect Product
              </h2>
              <p className="mb-6 text-gray-600">
                If you receive a product that is damaged, defective, or incorrect, please contact us <strong>within 24 hours of delivery</strong> with:
              </p>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex-1 flex items-center justify-center font-medium text-gray-700">✓ Your Order ID</div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex-1 flex items-center justify-center font-medium text-gray-700">✓ Clear photos of product</div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex-1 flex items-center justify-center font-medium text-gray-700">✓ Photos of packaging</div>
              </div>
              <p className="text-gray-600 text-sm bg-blue-50 text-blue-800 p-4 rounded-lg">
                <Info className="w-4 h-4 inline-block mr-2" />
                Once verified, our team will review the issue and, if found genuine, provide an appropriate resolution at our sole discretion. Claims made after 24 hours of delivery may not be accepted.
              </p>
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
                  <strong className="text-lg">+91 8168291041</strong>
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