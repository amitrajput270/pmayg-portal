const faqs = [
  "How to apply?",
  "Who is eligible?",
  "What documents are required?",
  "How to track status?",
];

export default function FaqSection() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#f7efe8] p-5 rounded-xl">
              <h4 className="font-semibold">{faq}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
