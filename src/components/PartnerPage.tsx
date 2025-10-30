"use client";

import { motion } from "framer-motion";

const mutualFundPartners = [
  "sbi",
  "hdfc",
  "icici",
  "franklin",
  "aditya-birla",
  "axis",
  "bajaj",
  "motilal-oswal",
  "lic",
  "tata",
];

const insurancePartners = [
  "hdfc",
  "aig",
  "aditya-birla",
  "motilal-oswal",
];

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7f7] via-[#fffafa] to-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-sm uppercase tracking-widest text-rose-500 font-semibold mb-2">
          Our Trusted Network
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Our Trusted Partners
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          We’re proud to collaborate with India’s leading Mutual Fund and
          Insurance companies to help you invest and protect your future.
        </p>

        {/* Mutual Fund Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full">
              Mutual Fund Partners
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {mutualFundPartners.map((partner, index) => (
              <motion.div
                key={partner}
                className="bg-white rounded-2xl p-6 shadow-[0_3px_10px_rgb(0,0,0,0.05)] hover:shadow-[0_5px_20px_rgb(255,110,110,0.25)] transition-all duration-300 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <img
                  src={`/assets/partners/mutual/${partner}.svg`}
                  alt={partner}
                  className="max-h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Insurance Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full">
              Insurance Partners
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {insurancePartners.map((partner, index) => (
              <motion.div
                key={partner}
                className="bg-white rounded-2xl p-6 shadow-[0_3px_10px_rgb(0,0,0,0.05)] hover:shadow-[0_5px_20px_rgb(255,110,110,0.25)] transition-all duration-300 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <img
                  src={`/assets/partners/insurance/${partner}.svg`}
                  alt={partner}
                  className="max-h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(120%+1.3px)] h-20"
        >
          <path
            d="M321.39,56.44C185.34,89.39,69.52,104.14,0,120V0H1200V27.35c-71.46,9.07-168.46,18.94-286.23,20.43C749.42,50.27,520.94,23.47,321.39,56.44Z"
            fill="#feeaea"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default PartnersPage;
