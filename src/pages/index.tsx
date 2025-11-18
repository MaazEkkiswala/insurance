import React from 'react';

import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHeroCarousel from '../components/MainHeroCarousel';
import PartnersPage from '../components/PartnerPage';
import About from '../components/Product';
import Services from '../components/Services';
import TestimonialsPage from '../components/testimonials';

const App = () => {
  return (
    <div className="bg-background grid gap-y-16 overflow-hidden">
      {/* HEADER + HERO SHOULD NOT BE IN LazyShow */}
      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <Header />
          </div>
        </div>

        <div className="">
          <MainHeroCarousel />
        </div>
      </div>

      {/* REST OF PAGE WITH LazyShow */}
      <Canvas />

      <LazyShow>
        <>
          <About />
          <Canvas />
        </>
      </LazyShow>

      {/* <LazyShow> */}
      <>
        <Services />
        <Canvas />
      </>
      {/* </LazyShow> */}

      {/* <LazyShow> */}
      <PartnersPage />
      {/* </LazyShow> */}

      {/* <LazyShow> */}
      <>
        <TestimonialsPage />
        <Canvas />
      </>
      {/* </LazyShow> */}

      <Analytics />

      {/* <LazyShow> */}
      <Footer />
      {/* </LazyShow> */}
    </div>
  );
};

export default App;
