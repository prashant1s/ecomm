import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { XCircle, Info, PhoneCall } from "lucide-react";

export default function CancellationPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans text-gray-700">
        <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 md:p-14 text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Cancellation Policy</h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Jiya JR, we begin processing orders immediately after they are placed to ensure timely dispatch to you.
            </p>
          </div>
          
          <div className="space-y-6">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
                <XCircle className="w-8 h-8 text-red-500" /> Strict No Cancellation Policy
              </h2>
              
              <div className="bg-red-50 text-red-800 p-6 md:p-8 rounded-xl border border-red-100 mb-8 text-lg font-medium text-center">
                Once an order has been successfully placed, it cannot be cancelled, modified, or changed under any circumstances.
              </div>

              <div className="space-y-6 text-gray-600">
                <div className="flex gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <Info className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                  <p>
                    We request all customers to carefully review their order details, shipping address, contact information, and selected products <strong>before</strong> completing the purchase.
                  </p>
                </div>
                
                <p className="px-2">
                  As we start processing orders immediately upon receipt, cancellation requests made via email, phone, or any other communication channel will not be accepted.
                </p>
              </div>
            </section>

            <section className="bg-gray-900 rounded-2xl shadow-sm border border-gray-800 p-8 md:p-10 text-white">
              <h2 className="flex items-center gap-3 text-xl font-bold mb-4 text-[#D4AF37]">
                <PhoneCall className="w-6 h-6" /> Need Assistance?
              </h2>
              <p className="mb-6 text-gray-300">If you have any questions regarding your order, please contact our customer support team:</p>
              <div className="flex flex-col md:flex-row gap-6">
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