"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header"; 
import Footer from "@/components/layout/Footer"; 
import { sendContactEmail } from "@/actions/contact"; 

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    // Call the Resend Server Action
    const result = await sendContactEmail(formData);
    
    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };


  return (
    <>
      {/* Navbar at the top */}
      <Header />

      {/* Main Content Area */}
      <main className="min-h-screen bg-white pt-32 pb-16 font-sans">
        <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
          
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <span>&gt;</span>
            <span className="text-[#DB4444] font-medium">Contact us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Left Column: Text Info & Form */}
            <div className="lg:col-span-8 pr-0 lg:pr-8">
              <h1 className="text-3xl font-bold text-black mb-6">Contact us</h1>
              
              <div className="space-y-6 text-gray-800 text-sm md:text-base">
                <p>
                  Our customer service team is available on <span className="font-bold">Monday to Saturday between 10:00 - 18:00 Hrs</span>
                </p>

                <div>
                  <p>Reach us at: +91-8168291041</p>
                  <p>Whats App us: +91-8168291041</p>
                </div>

                <p>
                  Mail us at <a href="mailto:contact@jiyajr.com" className="text-[#DB4444] font-medium hover:underline">contact@jiyajr.com</a>
                </p>

                <p>
                  If you want to visit our office, then you can visit us on all working days on <span className="font-bold">Monday - Saturday between 10:00 - 18:00 Hrs</span> in our Prayagraj Office.
                </p>

                <p className="leading-relaxed">
                  For any escalations regarding any issues, kindly mail us at <a href="mailto:support@jiyajr.com" className="text-[#DB4444] font-medium hover:underline">support@jiyajr.com</a> or whatsapp at <span className="text-[#DB4444] font-medium">+91-8168291041</span>. The concerned team / managers will reach out to you within 24 Business hrs and will solve your issues.
                </p>
              </div>

              {/* Contact Form Section */}
              <div className="mt-16">
                <h2 className="text-xl font-bold text-black mb-6">Or Leave a message</h2>
                {/* Show Error Message if it fails */}
            {errorMessage && (
              <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6 text-sm font-medium border border-red-200">
                {errorMessage}
              </div>
            )}
                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-md flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <div>
                      <h3 className="font-bold">Message Sent Successfully!</h3>
                      <p className="text-sm mt-1">Thank you for reaching out. Our team will get back to you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="fullName" className="text-sm font-medium text-gray-900">
                          Full name <span className="text-[#DB4444]">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          // 👇 FIX: Added bg-white text-gray-900 w-full placeholder-gray-400
                          className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#DB4444] focus:ring-1 focus:ring-[#DB4444] transition-colors"
                        />
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-900">
                          Email address <span className="text-[#DB4444]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          // 👇 FIX: Added bg-white text-gray-900 w-full placeholder-gray-400
                          className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#DB4444] focus:ring-1 focus:ring-[#DB4444] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-900">
                          Phone number <span className="text-[#DB4444]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number"
                          // 👇 FIX: Added bg-white text-gray-900 w-full placeholder-gray-400
                          className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#DB4444] focus:ring-1 focus:ring-[#DB4444] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 3: Textarea */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-900">
                        What's On Your Mind? <span className="text-[#DB4444]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What's On Your Mind?"
                        // 👇 FIX: Added bg-white text-gray-900 w-full placeholder-gray-400
                        className="w-full bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#DB4444] focus:ring-1 focus:ring-[#DB4444] transition-colors resize-y"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#DB4444] text-white font-medium py-3 px-8 rounded-md hover:bg-red-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                    
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Address Box */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-4 border-b border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg">Prayagraj (Head Office):</h3>
                </div>
                <div className="p-5 text-sm text-gray-700 leading-relaxed space-y-1 bg-gray-50/50">
                  <p className="font-bold text-black mb-2">Jiya JR,</p>
                  <p>Civil Lines,</p>
                  <p>Near High Court,</p>
                  <p>Prayagraj, Uttar Pradesh - 211001</p>
                  <p>India</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}