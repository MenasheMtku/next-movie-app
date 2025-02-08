'use client';
import { useState } from "react"
import Link from "next/link";
import { Movie, Tv } from "@/types";
import { MediaCard } from "./MediaCard";

interface HeroTrendingProps {
  items: (Movie | Tv)[];
}

const isMovie = (item: Movie | Tv): item is Movie => {
  return "title" in item;
};

const getTitle = (item: Movie | Tv): string => {
  return isMovie(item) ? item.title : item.name;
};

const getMediaType = (item: Movie | Tv): string => {
  return isMovie(item) ? 'movie' : 'tv';
};

export const HeroTrending = ({ items }: HeroTrendingProps) => {
  const [loadingStates, setLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});

  const handleImageLoad = (id: number) => {
    setLoadingStates((prev) => ({ ...prev, [id]: true }));
  };

 //console.log(items);
  return (
    <div className="container mx-auto px-8 py-12">
      <h2 className="mb-6 text-2xl font-bold">Trending Now</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.slice(4, 8).map((item) => (
          <Link 
            key={item.id} 
            href={`/${getMediaType(item)}/${item.id}`}
            className="w-full"
          >
            <MediaCard
              id={item.id}
              item={item}
              title={getTitle(item)}
              posterPath={item.poster_path}
              isLoaded={!!loadingStates[item.id]}
              onLoad={handleImageLoad}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
