import { Globe } from "lucide-react";

export default function Footer() {
  const links = [
    "FAQ", "Help Center", "Account", "Media Center",
    "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use",
    "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us",
    "Speed Test", "Legal Notices", "Only on Preberry"
  ];

  return (
    <footer className="py-16 bg-black border-t-8 border-[#222] text-[#757575]">
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="mb-8">Questions? Call 080-001-9587</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {links.map((link, index) => (
            <a key={index} href="#" className="text-sm hover:underline">
              {link}
            </a>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#333] rounded mb-8">
          <Globe className="w-4 h-4" />
          <select className="bg-transparent text-sm focus:outline-none">
            <option>English</option>
            <option>한국어</option>
          </select>
        </div>

        <p className="text-sm">Preberry South Korea</p>
      </div>
    </footer>
  );
}
