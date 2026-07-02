import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, AlertCircle, CreditCard, Scale, PhoneCall } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans text-gray-700">
        <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 md:p-14 text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Terms & Conditions</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Welcome to Jiya JR. By accessing or using our website, you agree to comply with and be bound by the following conditions.
            </p>
          </div>
          
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4">
                <FileText className="w-6 h-6 text-[#D4AF37]" /> 1. General & Products
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>By using this website, you confirm that you are at least 18 years of age or are using the website under the supervision of a parent or legal guardian.</p>
                <p>We make every effort to ensure that product descriptions, images, pricing, and availability are accurate. However, minor variations in color may occur due to screen settings and photography. Jiya JR reserves the right to correct any errors, inaccuracies, or omissions at any time without prior notice.</p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4">
                <CreditCard className="w-6 h-6 text-[#D4AF37]" /> 2. Pricing & Payments
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise. We reserve the right to change product prices without prior notice.</p>
                <p>We accept secure online payments through trusted payment gateways. Jiya JR does not store your debit card, credit card, or banking details.</p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4">
                <AlertCircle className="w-6 h-6 text-[#D4AF37]" /> 3. Orders & Cancellations
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>All orders are subject to acceptance and availability. Jiya JR reserves the right to refuse or cancel any order due to pricing errors, suspected fraudulent activity, or payment issues.</p>
                <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-100 mt-4">
                  <strong>Important: All orders placed on Jiya JR are final.</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>No order cancellations.</li>
                    <li>No returns or exchanges.</li>
                    <li>No refunds.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-4">
                <Scale className="w-6 h-6 text-[#D4AF37]" /> 4. Legal & Liability
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>All content on this website is the property of Jiya JR and may not be copied, reproduced, or used without prior written permission.</p>
                <p>Jiya JR shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or the purchase of our products.</p>
                <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.</p>
              </div>
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