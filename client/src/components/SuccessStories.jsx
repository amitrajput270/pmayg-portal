export default function SuccessStories() {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#f8f8f8] rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Ramesh Kumar</h3>
            <p className="text-gray-500 leading-7">
              "Thanks to PMAY-G, I now have a safe and comfortable home for my
              family. The application process was smooth and the support from
              local authorities was excellent."
            </p>
          </div>

          <div className="bg-[#f8f8f8] rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Sita Devi</h3>
            <p className="text-gray-500 leading-7">
              "I am grateful for the PMAY-G scheme which provided me with
              financial assistance to build a better home. It has truly
              transformed my life and given me hope for a brighter future."
            </p>
          </div>

          <div className="bg-[#f8f8f8] rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Anil Singh</h3>
            <p className="text-gray-500 leading-7">
              "The PMAY-G program has been a blessing for my family. We were
              able to construct a sturdy house with the financial aid provided,
              and it has significantly improved our living conditions."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
