import { Twitter, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">NeoNFT</h2>
          <p className="text-sm mt-3">
            A retro-inspired NFT marketplace for Art, 3D, and Photography.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm flex">
            <li><a href="/" className="hover:text-white m-1">Home</a></li>
            <li><a href="/marketplace" className="hover:text-white m-1">Marketplace</a></li>
            <li><a href="/about" className="hover:text-white m-1">About</a></li>
            <li><a href="/contact" className="hover:text-white m-1">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} NeoNFT. All rights reserved.
      </div>
    </footer>
  );
}
