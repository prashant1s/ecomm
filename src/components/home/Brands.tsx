"use client";

export default function Brands() {
  const brands = [
    "Decathlon",
    "KSCA",
    "HAL",
    "Indian Railways",
    "RVCE",
    "Foxconn",
    "Mondelez",
    "Coursera",
    "Razorpay",
    "CRED",
    "Postman"
  ];

  return (
   
    <section className="bg-white pt-20 pb-0 border-t border-gray-100 font-sans overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* Header Content */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-xl font-bold tracking-[0.2em] uppercase mb-4">
            Our Clients
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Trusted by <span className="text-[#fbbc04]">150+ brands</span> across India
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            From Fortune 500 corporates to neighbourhood sports academies.
          </p>
        </div>
        
        <div className="relative flex items-center mt-12">

          
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-[5] pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-[5] pointer-events-none" />

          
          <div className="flex items-center gap-4 overflow-x-auto py-4 px-12 md:px-16 hide-scrollbar w-full flex-nowrap mask-image-fade">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="px-6 py-3 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium whitespace-nowrap hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900 transition-all cursor-default shadow-sm"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}