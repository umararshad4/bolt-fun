"use client";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { MapPin } from "lucide-react";

const popularDestinations = [
  "New York, United States",
  "London, United Kingdom",
  "Paris, France",
  "Tokyo, Japan",
  "Dubai, UAE",
  "Sydney, Australia",
];

export default function LocationSearch() {
  return (
    <div className="p-2">
      <Command className="rounded-lg">
        <CommandInput placeholder="Search destinations..." className="h-11" />
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Popular destinations">
          {popularDestinations.map((destination) => (
            <CommandItem
              key={destination}
              value={destination}
              className="flex items-center space-x-2 py-3 cursor-pointer"
            >
              <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span>{destination}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </Command>
    </div>
  );
}