import { Search, Percent, LifeBuoy, User, ShoppingBag, ChevronDown, Briefcase } from 'lucide-react';
import swiggy_logo from './assets/logoh.png';

const Header = () => {
  return (
  <>
      {/* MAIN HEADER (Top Bar) */}
      <header className="w-full h-16 md:h-20 bg-white shadow-sm flex items-center justify-between px-4 md:px-8 sticky top-0 z-50">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <a href="" className="block">
            <img 
              src={swiggy_logo} 
              alt="Swiggy Logo" 
              className="h-10 w-auto md:h-16 transition-all" 
            />
          </a>
        </div>

        {/* Right Section: Desktop Navigation Links (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-12">
          {/* Search */}
          <div className="flex items-center space-x-2 text-gray-700 font-medium hover:text-[#FC8019] cursor-pointer transition-colors">
            <Search className="w-5 h-5 text-gray-600" />
            <span>Search</span>
          </div>

          {/* Help */}
          <div className="flex items-center space-x-2 text-gray-700 font-medium hover:text-[#FC8019] cursor-pointer transition-colors">
            <LifeBuoy className="w-5 h-5 text-gray-600" />
            <span>Help</span>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-2 text-gray-700 font-medium hover:text-[#FC8019] cursor-pointer transition-colors group">
            <div className="relative flex items-center justify-center border-2 border-gray-800 rounded px-1.5 py-0.5 font-bold group-hover:border-[#FC8019] transition-colors">
              <span className="text-xs">0</span>
            </div>
            <span>Cart</span>
          </div>
        </nav>

        {/* Mobile-Only Quick Cart Icon (Visible only on small screens) */}
        <div className="flex md:hidden items-center text-gray-700 cursor-pointer p-2 relative">
          <ShoppingBag className="w-6 h-6 text-gray-800" />
          <span className="absolute top-1 right-1 bg-[#FC8019] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION BAR (Visible only on mobile screen widths) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-white border-t border-gray-200 flex items-center justify-around z-50 px-2">
        {/* Mobile Search Link */}
        <div className="flex flex-col items-center justify-center text-gray-600 active:text-[#FC8019] cursor-pointer">
          <Search className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 font-medium">Search</span>
        </div>

        {/* Mobile Support/Help Link */}
        <div className="flex flex-col items-center justify-center text-gray-600 active:text-[#FC8019] cursor-pointer">
          <LifeBuoy className="w-5 h-5" />
          <span className="text-[10px] mt-0.5 font-medium">Help</span>
        </div>
      </nav>
    </>
  );
}

export default Header;