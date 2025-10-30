'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Software Engineer',
    message:
      'I invested in mutual funds through this platform — the experience was smooth, transparent, and I got great support from their team.',
    image: '/assets/testimonials/amit.jpg',
  },
  {
    name: 'Priya Desai',
    role: 'Entrepreneur',
    message:
      'Their insurance advisors helped me choose the perfect plan for my family. Really appreciate their clarity and service quality!',
    image: '/assets/testimonials/sara.jpg',
  },
  {
    name: 'Rahul Verma',
    role: 'Marketing Manager',
    message:
      'I love how easy it is to manage all my investments in one place. The design and interface are beautiful and user-friendly.',
    image: '/assets/testimonials/rahul.jpg',
  },
  {
    name: 'Neha Gupta',
    role: 'Banking Professional',
    message:
      'Their financial insights are genuinely helpful. I’ve learned a lot and made better decisions with their recommendations.',
    image: '/assets/testimonials/neha.jpg',
  },
];

const TestimonialsPage = () => {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-[#fff7f7] via-[#fffafa] to-white py-20 px-6"
      key={'testimonials'}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-sm uppercase tracking-widest text-rose-500 font-semibold mb-2">
          Our Happy Clients
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          What People Say About Us
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          We take pride in building long-term relationships based on trust,
          transparency, and results. Here’s what our clients have to say about
          their experience.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.05)] hover:shadow-[0_5px_20px_rgb(255,110,110,0.25)] transition-all duration-300 p-8 text-left flex flex-col items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center mb-5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-rose-100"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-base leading-relaxed italic">
                “{t.message}”
              </p>
            </motion.div>
          ))}
        </div>
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

export default TestimonialsPage;
