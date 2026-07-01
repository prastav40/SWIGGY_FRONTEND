import React from 'react';
import { Star } from 'lucide-react';

const RestaurantCard = ({props}) => {
  return (
    /* Changed w-[273px] to w-full max-w-[273px] mx-auto to center it perfectly on ultra-small mobile screens */
    <div className="w-full max-w-[273px] mx-auto flex flex-col group cursor-pointer transition-transform duration-200 ease-out active:scale-95 select-none">
      
      {/* Image Container Layer */}
      {/* Using aspect ratio utilities (aspect-[1.5/1]) ensures the card image height adapts propsortionally across all screen scales */}
      <div className="relative w-full aspect-[1.5/1] rounded-3xl overflow-hidden shadow-inner bg-gray-100">
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props?.cloudinaryImageId}
          alt="Thalairaj Biryani"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Dark Linear Gradient overlay for the discount text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end px-4 pb-2">
          {/* Added text-lg md:text-xl responsive scaling so text shrinks clean on tiny viewports */}
          <h4 className="text-white text-lg md:text-xl font-extrabold uppercase tracking-tight truncate w-full">
              {props?.costForTwo}
          </h4>
        </div>
      </div>

      {/* Info Content Layer */}
      <div className="mt-3 px-1 md:px-2 flex flex-col space-y-0.5">
        {/* Restaurant Name */}
        <h3 className="text-base md:text-lg font-bold text-gray-800 tracking-tight truncate">
          {props?.name}
        </h3>

        {/* Rating & Delivery Time Metadata Row */}
        <div className="flex items-center space-x-1 font-bold text-gray-800 text-xs md:text-sm">
          <div className="bg-green-700 text-white rounded-full p-0.5 flex items-center justify-center scale-75 md:scale-90">
            <Star className="w-3.5 h-3.5 fill-current text-white" />
          </div>
          <span>{props?.avgRating}</span>
          <span className="text-gray-400 font-medium px-0.5">•</span>
          <span>20–25 mins</span>
        </div>

        {/* Cuisines */}
        <p className="text-gray-500 font-medium text-sm md:text-sm truncate tracking-tight">
          {props?.cuisines?.join(" , ")}
        </p>

        {/* Location Area */}
        <p className="text-gray-500 font-medium text-sm md:text-sm tracking-tight truncate">
          {props?.areaName}
        </p>
      </div>

    </div>
  );
}

export default RestaurantCard; 