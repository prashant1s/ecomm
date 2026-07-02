import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, List, Settings, PhoneCall } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans text-gray-700">
        <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
          
          {/* Page Hero */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 md:p-14 text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              At Jiya JR, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your information.
            </p>
          </div>
          
          {/* Content Cards */}
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 hover:shadow-md transition-shadow">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-6">
                <List className="w-6 h-6 text-[#D4AF37]" /> Information We Collect
              </h2>
              <p className="mb-4 text-gray-600">We may collect the following information when you use our website:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                {['Name', 'Email Address', 'Phone Number', 'Shipping & Billing Address', 'Order History', 'IP Address & Cookies'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                    {item}
                  </li>
                ))}
                <li className="flex items-start gap-2 text-gray-600 md:col-span-2 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                  Payment Information (processed securely through third-party payment gateways; we do not store your card details)
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 hover:shadow-md transition-shadow">
              <h2 className="flex items-center gap-3 text-xl font-bold text-gray-900 mb-6">
                <Settings className="w-6 h-6 text-[#D4AF37]" /> How We Use Your Information
              </h2>
              <p className="mb-4 text-gray-600">Your information is used to:</p>
              <ul className="space-y-3 pl-2">
                {[
                  'Process and deliver your orders.',
                  'Provide customer support and send order confirmations.',
                  'Improve our website and customer experience.',
                  'Prevent fraud and maintain website security.',
                  'Comply with applicable legal requirements.'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <Shield className="w-4 h-4 text-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-gray-900 rounded-2xl shadow-sm border border-gray-800 p-8 md:p-10 text-white">
              <h2 className="flex items-center gap-3 text-xl font-bold mb-4 text-[#D4AF37]">
                <PhoneCall className="w-6 h-6" /> Contact Us
              </h2>
              <p className="mb-6 text-gray-300">If you have any questions regarding this Privacy Policy or your personal information, please contact us:</p>
              <div className="flex flex-col md:flex-row gap-6">
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