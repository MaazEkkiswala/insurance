export default function AboutUs() {
  const sections = [
    {
      title: 'Welcome to N H Investment',
      text: `Welcome to N H Investment, your trusted partner on the path to financial growth and security.\n\nMy name is Hardik Patel, founder of N H Investment. I started this journey in 2017 with a vision to guide individuals and families in making informed financial decisions. With years of experience in the investment advisory space, I have helped a wide range of clients plan, protect, and grow their wealth through disciplined and well-researched financial strategies.\n\nAt N H Investment, we believe that wealth creation is not just about money — it is about achieving milestones, securing your family’s future, and fulfilling your dreams.`,
      image: '/assets/about/About_1.jpeg',
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
      image: '/assets/about/About_6.jpeg',
    },
  ];

  const highlights = [
    {
      title: 'Our Values',
      points: [
        'Trust & Transparency',
        'Client-Centric Approach',
        'Ethical Advisory',
        'Long-Term Partnership',
      ],
    },
    {
      title: 'Why Choose Us',
      points: [
        'Personalized Financial Strategy',
        'Trusted By 1500+ Clients',
        '7+ Years Experience',
        'Goal-Driven Advice',
      ],
    },
    {
      title: 'Vision & Mission',
      points: [
        'Empowering families financially',
        'Helping 3000+ clients by 2027',
        'Building long-term relationships',
        'Improving financial literacy',
      ],
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
      <div className="w-full max-w-6xl px-6 md:px-10 py-20 text-center">
        <h2 className="text-4xl font-bold mb-12">🌟 Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="p-8 shadow-lg rounded-2xl border hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{h.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {h.points.map((p, i2) => (
                  <li key={i2}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
