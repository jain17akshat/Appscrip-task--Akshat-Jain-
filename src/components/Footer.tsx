import { Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-bold mb-4 uppercase">Be The First To Know</h2>
            <p className="text-sm mb-6 text-gray-300">Sign up for updates from mettä muse.</p>
            <form className="flex gap-4 max-w-xl">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="flex-1 px-4 py-3 text-sm bg-white text-black placeholder:text-gray-500 focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-3 text-sm bg-transparent border border-white hover:bg-white hover:text-black transition-colors uppercase font-semibold"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact & Currency */}
          <div className="md:text-right">
            <h3 className="text-lg font-bold mb-4 uppercase">Contact Us</h3>
            <p className="text-sm mb-2">+44 221 133 5360</p>
            <p className="text-sm mb-6">customercare@mettamuse.com</p>
            
            <h3 className="text-lg font-bold mb-4 uppercase">Currency</h3>
            <div className="flex items-center gap-2 md:justify-end mb-2">
              <span className="text-2xl">🇺🇸</span>
              <span className="font-semibold">• USD</span>
            </div>
            <p className="text-xs text-gray-400">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">mettä muse</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Stories</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Artisans</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Boutiques</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">EU Compliances Docs</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Orders & Shipping</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Join/Login as a Seller</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Payment & Pricing</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Return & Refunds</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social & Payment */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Follow Us</h3>
            <div className="flex gap-3 mb-8">
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>

            <h3 className="text-lg font-bold mb-4">mettä muse ACCEPTS</h3>
            <div className="flex flex-wrap gap-2">
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold text-gray-700">GPay</div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold">
                <div className="flex gap-0.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full opacity-80"></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full opacity-80 -ml-1.5"></div>
                </div>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold text-blue-600">Pay</div>
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-xs font-bold text-white">AMEX</div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center text-xs font-bold"></div>
              <div className="w-12 h-8 bg-purple-600 rounded flex items-center justify-center text-xs font-bold text-white">Pay</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8">
          <p className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} mettamuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
