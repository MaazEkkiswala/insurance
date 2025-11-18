import React, { useState, useEffect, useCallback } from 'react';

import config from '../config/index.json';

const MainHeroCarousel = () => {
  const { mainHeroSlides } = config;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % mainHeroSlides.length);
  }, [mainHeroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + mainHeroSlides.length) % mainHeroSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {mainHeroSlides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div
              className="w-full h-[500px] lg:h-[650px] flex items-center bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* CONTENT */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
                <div className="max-w-xl text-white space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                    {slide.title}
                    <span className="block text-primary">{slide.subtitle}</span>
                  </h1>

                  <p className="text-lg opacity-90">{slide.description}</p>

                  <div className="flex space-x-4">
                    <a
                      href={slide.primaryAction.href}
                      className="px-6 py-3 bg-primary text-white rounded-lg font-medium"
                    >
                      {slide.primaryAction.text}
                    </a>

                    <a
                      href={slide.secondaryAction.href}
                      className="px-6 py-3 border border-white text-white rounded-lg font-medium"
                    >
                      {slide.secondaryAction.text}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NAVIGATION ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
      >
        ›
      </button>

      {/* PAGINATION DOTS */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {mainHeroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainHeroCarousel;
