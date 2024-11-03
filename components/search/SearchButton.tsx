"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SearchButton() {
  return (
    <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 h-10 w-10">
      <Search className="h-4 w-4 text-white" />
    </Button>
  );
}