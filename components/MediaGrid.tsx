"use client";

import { useState } from "react";
import Link from "next/link";
import { Movie, Tv } from "@/types";
import { MediaCard } from "./MediaCard";
import { motion } from "framer-motion";
type MediaItem = Movie | Tv;

interface MediaGridProps {
  data: MediaItem[];
  title?: string;
  mediaType: "movie" | "tv";
}

const MediaGrid = ({ data, mediaType }: MediaGridProps) => {
  const [loadingStates, setLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});

  const handleImageLoad = (id: number) => {
    setLoadingStates((prev) => ({ ...prev, [id]: true }));
  };

  const getTitle = (item: MediaItem): string => {
    if ("title" in item) {
      return item.title;
    }
    return (item as Tv).name;
  };

  const getLink = (id: number): string => {
    return `/${mediaType}/${id}`;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
      >
        <div className="mx-auto mb-4 grid w-full max-w-[1280px] grid-cols-[repeat(auto-fill,minmax(168px,1fr))] gap-6 p-4">
          {data.length > 0 &&
            data.map((item: MediaItem) => (
              <Link key={item.id} href={getLink(item.id)} className="w-full">
                <MediaCard
                  id={item.id}
                  title={getTitle(item)}
                  alt={getTitle(item)}
                  posterPath={item.poster_path}
                  isLoaded={!!loadingStates[item.id]}
                  onLoad={handleImageLoad}
                />
              </Link>
            ))}
        </div>
      </motion.div>
    </>
  );
};

export default MediaGrid;
