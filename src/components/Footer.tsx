'use client';

import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#fff8f8] via-[#fff6f6] to-white border-t border-rose-100 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            alt="logo"
            className="h-[100px] w-auto sm:h-[110px]"
            src={'/assets/PNG.png'}
          />
          <h2 className="text-2xl font-extrabold text-gray-800 mb-3">
            NH Investment
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your trusted partner for investments and insurance — simplifying
            your financial journey with transparency and care.
          </p>
          <div className="flex space-x-4 mt-4">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="p-2 bg-white rounded-full shadow hover:shadow-md hover:bg-rose-50 text-rose-500 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="about" className="hover:text-rose-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-rose-500 transition">
                Mutual Funds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-rose-500 transition">
                Insurance
              </a>
            </li>
            <li>
              <a href="testimonials" className="hover:text-rose-500 transition">
                Testimonials
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-rose-500 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-rose-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-rose-500 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-rose-500 transition">
                FAQs
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center space-x-2">
              <Phone size={18} className="text-rose-500" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-rose-500" />
              <span>wpatel.hardik3315@gmail.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin size={30} className="text-rose-500 mt-1" />
              <span>
                shop no. 202, Om Complex, Near Purnima Dairy, Mahavirnagar,
                Himmatnagar-383001.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-rose-100 mt-12 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-gray-800">NH Investment</span>.
          All rights reserved.
        </p>
      </div>

      {/* Decorative Wave */}
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
    </footer>
  );
};

export default Footer;
