export default function Footer() {
  return (
    <footer className="bg-white border-t py-10 px-8 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="font-bold text-xl mb-3">PMAY-G</h3>
          <p className="text-gray-500 max-w-sm">
            Transforming rural India through digital governance.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-500">
            <li>About</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
