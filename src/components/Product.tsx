export default function AboutUs() {
  const sections = [
    {
      title: 'Welcome to N H Investment',
      text: `Welcome to N H Investment, your trusted partner on the path to financial growth and security.\n\nMy name is Hardik Patel, founder of N H Investment. I started this journey in 2017 with a vision to guide individuals and families in making informed financial decisions. With years of experience in the investment advisory space, I have helped a wide range of clients plan, protect, and grow their wealth through disciplined and well-researched financial strategies.\n\nAt N H Investment, we believe that wealth creation is not just about money — it is about achieving milestones, securing your family’s future, and fulfilling your dreams.`,
      image: '/assets/about/About1.jpeg',
    },
    {
      title: 'Who We Are',
      text: `N H Investment is a dedicated financial advisory service specializing in Mutual Funds, Insurance Planning, and Investment Education.\n\n✅ AMFI-Registered Mutual Fund Distributor\n✅ IRDA-Approved Insurance Advisor\n\nThese certifications enable me to serve clients with authentic products, regulated guidance, and long-term accountability.`,
      image: '/assets/about/About_2.jpeg',
    },
    {
      title: 'Our Growth Journey',
      text: `What began in 2017 has today evolved into a trusted financial service brand. We currently serve 1,500+ clients. From humble beginnings, we have consistently delivered value-driven
      advisory services. Our mission is to expand and help over 3000+ families
      achieve financial freedom by 2027.`,
      image: '/assets/about/About_3.jpeg',
    },
    {
      title: 'What We Do',
      text: `✅ Mutual Fund Distribution\n✅ Insurance Advisory\n✅ Investment Awareness\n\nWe help clients understand market trends and make informed decisions.`,
      image: '/assets/about/About_4.jpeg',
    },
    {
      title: 'Achievements',
      text: `🏆 Gold Club Advisor – HDFC Ergo Health Insurance (2023 & 2024)`,
      image: '/assets/about/About1.jpeg',
    },
  ];

  const highlightCards = [
    {
      title: 'Our Values',
      paragraph:
        'Our foundation is built on unwavering trust, complete transparency, and strong ethical values. We believe that every client relationship begins with integrity and honest communication. Our advisory approach is centered around understanding each individual’s financial goals and offering solutions that truly serve their long-term interests. We aim to create a supportive environment where clients feel confident, informed, and empowered to make the right financial decisions.',
    },
    {
      title: 'Why Choose Us',
      paragraph:
        'With over seven years of experience and the trust of more than 1500 clients, we bring both expertise and personalized attention to every financial plan. Our strategies are tailored specifically to your needs, ensuring that your investments align with your risk appetite, goals, and future aspirations. Clients choose us because we stay committed even after the investment is made — monitoring, guiding, and supporting them at every step. Our mission is not just to manage money, but to build lasting financial security and growth for every individual.',
    },
    {
      title: 'Vision & Mission',
      paragraph:
        'Our vision is to empower families and individuals by helping them achieve financial stability, clarity, and long-term growth. We aim to reach and positively impact over 3000 clients by 2027, spreading awareness about smart investments and financial literacy. Our mission is to simplify finance for everyone — making it easier to understand, easier to manage, and easier to grow. By offering transparent guidance and consistent support, we strive to build lifelong relationships rooted in trust, knowledge, and shared success.',
    },
  ];

  return (
    <div className="flex flex-col items-center w-full" id={'about'}>
      {/* Alternating sections */}
      {sections.map((item, index) => (
        <div
          key={index}
          className={`w-full max-w-6xl px-6 md:px-10 py-16 flex flex-col md:flex-row items-center gap-10 ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <img
            src={item.image}
            className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
            alt={item.title}
          />

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">{item.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{item.text}</p>
          </div>
        </div>
      ))}

      {/* Highlights */}
      <div className="w-full max-w-7xl px-6 md:px-10 py-20 text-center">
        <h2 className="text-4xl font-bold mb-12 text-primary drop-shadow-sm">
          🌟 Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlightCards.map((card, idx) => (
            <div
              key={idx}
              className="
                p-8 rounded-2xl border 
                bg-white/60 backdrop-blur-lg
                shadow-lg hover:shadow-2xl 
                hover:-translate-y-3 transition-all duration-500
                border-primary/20 hover:border-primary/40
                hover:bg-white/80 cursor-pointer
              "
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary tracking-wide">
                {card.title}
              </h3>

              <p className="text-gray-700 leading-relaxed text-justify">
                {card.paragraph}
              </p>

              <div className="mt-6 h-1 w-16 mx-auto bg-primary/60 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
