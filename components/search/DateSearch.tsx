"use client";

import { Calendar } from "@/components/ui/calendar";
import { addDays } from "date-fns";
import { useState } from "react";

export default function DateSearch() {
  const [date, setDate] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="p-2">
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
        className="rounded-md"
      />
    </div>
  );
}