const cards = [
  {
    title: "Easy Registration",
    desc: "Register and apply for housing schemes.",
  },
  {
    title: "Track Application",
    desc: "Track real-time status of your application.",
  },
  {
    title: "Verification",
    desc: "Secure beneficiary verification system.",
  },
  {
    title: "Quick Support",
    desc: "Get instant support from local offices.",
  },
];

export default function InfoCards() {
  return (
    <section className="py-16 px-8 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>

            <p className="text-gray-500 leading-7">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
