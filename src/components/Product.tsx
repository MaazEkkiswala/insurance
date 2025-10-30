import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';


const About = () => {
  const { about } = config;
  const [firstItem, secondItem] = about.items;

  return (
    <section className={`bg-background py-8`} id="about">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {about.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className="flex flex-wrap items-center">
        {/* Left Text Section */}
        <div className="w-full sm:w-1/2 p-6 mt-10 sm:mt-20">
          <h3 className="text-3xl sm:text-4xl text-gray-900 font-bold mb-4">
            {firstItem?.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            {firstItem?.description}
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full sm:w-1/2 p-6 flex justify-center">
          <img
            className="w-full max-w-md sm:max-w-lg object-contain drop-shadow-xl rounded-xl transition-transform duration-500 hover:scale-105"
            src={firstItem?.img}
            alt={firstItem?.title}
          />
        </div>
      </div>

      {/* Second Row (Reversed on Desktop) */}
      <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center mt-10 sm:mt-20">
        {/* Left Image Section */}
        <div className="w-full sm:w-1/2 p-6 flex justify-center">
          <img
            className="w-full max-w-md sm:max-w-lg object-contain drop-shadow-xl rounded-xl transition-transform duration-500 hover:scale-105"
            src={secondItem?.img}
            alt={secondItem?.title}
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full sm:w-1/2 p-6 mt-10 sm:mt-20">
          <h3 className="text-3xl sm:text-4xl text-gray-900 font-bold mb-4">
            {secondItem?.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            {secondItem?.description}
          </p>
        </div>
      </div>

      </div>
    </section>
  );
};

export default About;
