"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface GuestCount {
  adults: number;
  children: number;
  infants: number;
}

export default function GuestSearch() {
  const [guests, setGuests] = useState<GuestCount>({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const updateGuests = (type: keyof GuestCount, increment: boolean) => {
    setGuests((prev) => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  return (
    <div className="p-4 space-y-4">
      <GuestTypeSelector
        title="Adults"
        description="Ages 13 or above"
        value={guests.adults}
        onIncrement={() => updateGuests("adults", true)}
        onDecrement={() => updateGuests("adults", false)}
        minValue={1}
      />
      <GuestTypeSelector
        title="Children"
        description="Ages 2-12"
        value={guests.children}
        onIncrement={() => updateGuests("children", true)}
        onDecrement={() => updateGuests("children", false)}
      />
      <GuestTypeSelector
        title="Infants"
        description="Under 2"
        value={guests.infants}
        onIncrement={() => updateGuests("infants", true)}
        onDecrement={() => updateGuests("infants", false)}
      />
    </div>
  );
}

interface GuestTypeSelectorProps {
  title: string;
  description: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  minValue?: number;
}

function GuestTypeSelector({
  title,
  description,
  value,
  onIncrement,
  onDecrement,
  minValue = 0,
}: GuestTypeSelectorProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={onDecrement}
          disabled={value <= minValue}
          className="h-8 w-8 rounded-full"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-6 text-center">{value}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={onIncrement}
          className="h-8 w-8 rounded-full"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}