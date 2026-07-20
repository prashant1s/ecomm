"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";

// Country Codes for the dropdown
const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "USA / Canada" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
];

export default function BulkOrderPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      mobile: `${selectedCountry.code} ${formData.get("mobile")}`, 
      email: formData.get("email"),
      requirement: formData.get("requirement"),
    };

    try {
      const response = await fetch("/api/bulk-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send request.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F9FA] pt-32 pb-20 flex items-center justify-center font-sans">
        
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            
            {/* LEFT COLUMN: Yellow Banner */}
            <div className="w-full lg:w-1/2 bg-[#F6A800] p-10 flex flex-col justify-center items-center text-center relative min-h-[400px] lg:min-h-[600px]">
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                Give Bulk Orders
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                for <span className="text-[#0052A3]">Maximum Savings</span> & a <span className="text-[#0052A3]">Seamless Experience</span> !
              </h2>

              {/* 👇 FIX: Using standard <img> tag to bypass Next.js config errors.
                  Changed styling to look like a framed photo with a subtle border and shadow. */}
              <div className="relative w-full max-w-[420px] h-[280px] mt-4 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white/20">
                 <img 
                   src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80" 
                   alt="Bulk Order Logistics & Boxes"
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 />
              </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <div className="w-full lg:w-1/2 bg-[#F4F7F8] p-8 lg:p-14 flex flex-col justify-center">
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bulk Order Enquiry</h3>
                <p className="text-gray-600 text-sm">Unlock an Exclusive Discount for Your Bulk Order!</p>
              </div>

              {success && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-sm font-semibold text-center">
                  Request sent successfully! We will contact you soon.
                </div>
              )}
              
              {error && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-sm font-semibold text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full border text-gray-900 border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile <span className="text-red-500">*</span>
                    </label>
                    <div className="flex rounded-lg border border-gray-300 bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                      
                      {/* Interactive Country Code Dropdown */}
                      <div className="relative flex items-center bg-gray-50 border-r border-gray-300">
                        <select 
                          value={selectedCountry.code}
                          onChange={(e) => {
                            const newCountry = COUNTRY_CODES.find(c => c.code === e.target.value);
                            if (newCountry) setSelectedCountry(newCountry);
                          }}
                          className="h-full py-3 pl-3 pr-8 appearance-none bg-transparent outline-none text-gray-700 text-sm font-medium cursor-pointer z-10"
                        >
                          {COUNTRY_CODES.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.flag} {country.code}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 pointer-events-none" />
                      </div>

                      <input 
                        type="tel" 
                        name="mobile" 
                        required 
                        pattern="[0-9]{5,15}"
                        title="Enter a valid phone number without spaces"
                        className="w-full p-3 text-gray-900 outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Id<span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      className="w-full border border-gray-300 text-gray-900 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Requirements Textarea */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Order Requirement
                  </label>
                  <textarea 
                    name="requirement" 
                    rows={4}
                    className="w-full border text-gray-900 border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-[200px] mx-auto block bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-bold py-3.5 px-6 rounded-full shadow-md transition-colors disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Request"}
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
