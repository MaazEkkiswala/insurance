import React, { useState } from 'react';

import { motion } from 'framer-motion';

import config from '../config/index.json';
import EnhancedServicePopup from './Popup';

const Services = () => {
  const { services } = config;
  const { title, subtitle, description, items: featuresList } = services;

  const [popup, setPopup] = useState<{
    open: boolean;
    label: string;
    info: string;
    siblings: any[];
  }>({
    open: false,
    label: '',
    info: '',
    siblings: [],
  });

  const handleOpen = (item: any, allItems: any[]) => {
    setPopup({
      open: true,
      label: item.label,
      info: item.info,
      siblings: allItems,
    });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-red-500 uppercase">
            {title}
          </h2>
          <h3 className="mt-2 text-4xl font-extrabold text-gray-900">
            {subtitle}
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { type: 'spring', stiffness: 200, damping: 15 },
              }}
              className="
                relative p-8 rounded-2xl
                bg-white/90 backdrop-blur-lg
                border border-transparent
                hover:border-red-400/60
                shadow-[0_4px_25px_rgba(0,0,0,0.05)]
                hover:shadow-[0_6px_30px_rgba(255,0,0,0.15)]
                transition-all duration-300 group
              "
            >
              {/* Decorative Glow Border */}
              <div
                className="
                  absolute inset-0 rounded-2xl 
                  bg-gradient-to-br from-red-500/20 to-transparent
                  opacity-0 group-hover:opacity-100 
                  blur-xl -z-10 transition-all duration-500
                  pointer-events-none
                "
              ></div>

              {/* Icon */}
              <div
                className="
                  w-16 h-16 flex items-center justify-center rounded-xl mb-6
                  bg-gradient-to-br from-red-50 to-white 
                  text-red-600 shadow-inner 
                  group-hover:shadow-[0_0_20px_rgba(255,80,80,0.45)]
                  transition-all duration-300
                "
              >
                <img
                  src={feature.icon}
                  alt={feature.name}
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-all duration-300"
                />
              </div>

              {/* Title */}
              <h4
                className="
                  text-xl font-semibold text-gray-900 mb-4 
                  group-hover:text-red-600 transition-colors
                "
              >
                {feature.name}
              </h4>

              {/* Description Badge Buttons */}
              <div className="flex flex-wrap gap-2">
                {feature.description.map(
                  (item: { label: string; info: string }, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => handleOpen(item, feature.description)}
                      className="
                        px-3 py-1 rounded-full text-sm font-medium
                        bg-red-50 text-red-600
                        hover:bg-red-100
                        hover:scale-105
                        transition-all duration-200
                        shadow-sm hover:shadow-md
                      "
                    >
                      {item.label}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup */}
      <EnhancedServicePopup
        open={popup.open}
        title={popup.label}
        info={popup.info}
        siblings={popup.siblings}
        onClose={() => setPopup((p) => ({ ...p, open: false }))}
      />
    </section>
  );
};

export default Services;
