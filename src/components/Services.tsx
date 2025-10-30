import React from 'react';

import { motion } from 'framer-motion';

import config from '../config/index.json';

const Services = () => {
  const { services } = config;
  const { title, subtitle, description, items: featuresList } = services;

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
          {featuresList.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-white border border-gray-100 shadow-md rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-red-50 text-red-500 rounded-xl mb-6 shadow-inner">
                <img
                  src={feature.icon}
                  alt={feature.name}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.name}
              </h4>

              {/* Description Badges */}
              <div className="flex flex-wrap gap-2">
                {feature.description
                  .split(',')
                  .map((item: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full hover:bg-red-200 transition-all"
                    >
                      {item.trim()}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
