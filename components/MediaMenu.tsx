// components/MediaMenu.tsx
"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Movie, Tv } from "@/types";
import MediaGrid from "./MediaGrid";

type MediaType = "movies" | "tv";
type MediaItem = Movie | Tv;

interface MediaMenuProps {
  categories: {
    id: string;
    title: string;
    data: MediaItem[];
  }[];
  mediaType: MediaType;
}

const MediaMenu = ({ categories, mediaType }: MediaMenuProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]?.id || "",
  );

  const selectedData = categories.find(
    (category) => category.id === selectedCategory,
  );

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="mb-8 flex justify-center">
        <Select
          defaultValue={categories[0]?.id}
          onValueChange={(value) => setSelectedCategory(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedData && (
        <MediaGrid
          data={selectedData.data}
          title={selectedData.title}
          mediaType={mediaType}
        />
      )}
    </div>
  );
};

export default MediaMenu;
