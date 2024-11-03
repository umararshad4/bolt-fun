"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import LocationSearch from "./LocationSearch";
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import SearchButton from "./SearchButton";

export default function SearchBar() {
  const [activePopover, setActivePopover] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="w-full h-14 border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center bg-white pr-2">
        <div className="flex items-center divide-x flex-1">
          {/* Location Popover */}
          <Popover open={activePopover === "location"} onOpenChange={(open) => setActivePopover(open ? "location" : null)}>
            <PopoverTrigger asChild>
              <div className="px-6 text-left cursor-pointer hover:bg-gray-50 py-2 rounded-l-full">
                <div className="text-sm font-semibold">Where</div>
                <div className="text-sm text-muted-foreground">Search destinations</div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] p-0 bg-white rounded-2xl shadow-xl" align="start">
              <LocationSearch />
            </PopoverContent>
          </Popover>

          {/* Check-in Popover */}
          <Popover open={activePopover === "checkin"} onOpenChange={(open) => setActivePopover(open ? "checkin" : null)}>
            <PopoverTrigger asChild>
              <div className="px-6 text-left cursor-pointer hover:bg-gray-50 py-2">
                <div className="text-sm font-semibold">Check in</div>
                <div className="text-sm text-muted-foreground">Add dates</div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white rounded-2xl shadow-xl" align="start">
              <DateSearch />
            </PopoverContent>
          </Popover>

          {/* Check-out Popover */}
          <Popover open={activePopover === "checkout"} onOpenChange={(open) => setActivePopover(open ? "checkout" : null)}>
            <PopoverTrigger asChild>
              <div className="px-6 text-left cursor-pointer hover:bg-gray-50 py-2">
                <div className="text-sm font-semibold">Check out</div>
                <div className="text-sm text-muted-foreground">Add dates</div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white rounded-2xl shadow-xl" align="start">
              <DateSearch />
            </PopoverContent>
          </Popover>

          {/* Guests Popover */}
          <Popover open={activePopover === "guests"} onOpenChange={(open) => setActivePopover(open ? "guests" : null)}>
            <PopoverTrigger asChild>
              <div className="px-6 text-left cursor-pointer hover:bg-gray-50 py-2">
                <div className="text-sm font-semibold">Who</div>
                <div className="text-sm text-muted-foreground">Add guests</div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0 bg-white rounded-2xl shadow-xl" align="start">
              <GuestSearch />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex-shrink-0">
          <SearchButton />
        </div>
      </div>
    </div>
  );
}