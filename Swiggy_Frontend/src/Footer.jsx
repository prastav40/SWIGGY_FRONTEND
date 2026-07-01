import React from 'react';
import { ChevronDown } from 'lucide-react';

const Footer = ({ logo }) => {
  return (
    <footer className="w-full bg-[#F0F0F5] text-gray-800 py-12 px-6 md:px-16 lg:px-24 mt-auto border-t border-gray-200">
      {/* Main Structural Layout Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-gray-300 pb-10">
        
        {/* Column 1: Branding & Copyright */}
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            {logo ? (
              <img src={logo} alt="Company Logo" className="h-10 w-auto" />
            ) : (
              <div className="w-10 h-10 bg-[#FC8019] rounded-xl flex items-center justify-center text-white font-black italic text-xl">
                S
              </div>
            )}
          </div>
          <p className="text-gray-500 text-sm font-medium">
            © 2026 Swiggy Limited
          </p>
        </div>

        {/* Column 2: Company Directory Links */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4 text-base">Company</h3>
          <ul className="space-y-3 text-gray-600 text-sm font-medium">
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">About Us</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Swiggy Corporate</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Careers</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Team</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Swiggy One</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Swiggy Instamart</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Swiggy Dineout</li>
          </ul>
        </div>

        {/* Column 3: Stacked Contact & Legal Group */}
        <div className="flex flex-col space-y-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-base">Contact us</h3>
            <ul className="space-y-3 text-gray-600 text-sm font-medium">
              <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Help & Support</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Partner with us</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Ride with us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-base">Legal</h3>
            <ul className="space-y-3 text-gray-600 text-sm font-medium">
              <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Terms & Conditions</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Cookie Policy</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Privacy Policy</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Investor Relations</li>
            </ul>
          </div>
        </div>

        {/* Column 4: Location Tracking & Selector Button */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4 text-base">Available in:</h3>
          <ul className="space-y-3 text-gray-600 text-sm font-medium mb-4">
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Bangalore</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Gurgaon</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Hyderabad</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Delhi</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Mumbai</li>
            <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Pune</li>
          </ul>
          
          {/* Native Looking Custom Dropdown Button */}
          <button className="flex items-center justify-between w-36 px-3 py-2 border border-gray-400 rounded-lg text-xs font-semibold text-gray-700 bg-transparent hover:border-gray-900 hover:text-gray-900 cursor-pointer transition-colors duration-150 outline-none">
            <span>679 cities</span>
            <ChevronDown className="w-3 h-3 text-gray-500" />
          </button>
        </div>

        {/* Column 5: Extra Verticals & Social Connects */}
        <div className="flex flex-col space-y-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-base">Life at Swiggy</h3>
            <ul className="space-y-3 text-gray-600 text-sm font-medium">
              <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Explore with Swiggy</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Swiggy News</li>
              <li className="hover:text-gray-900 cursor-pointer transition-colors duration-150">Snackables</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-base">Social Links</h3>
            <div className="flex items-center space-x-4 text-gray-600">
              
              {/* LinkedIn SVG */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              {/* Instagram SVG */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook SVG */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* Pinterest Text Placeholder to match layout branding */}
              <span className="font-extrabold text-sm hover:text-gray-900 cursor-pointer select-none transition-colors duration-150">P</span>
              
              {/* Twitter / X SVG */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;