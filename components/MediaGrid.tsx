// components/MediaGrid.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Movie, Tv } from "@/types";
import { smartTitleShorten } from "@/lib/helpers";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const image500 = "https://image.tmdb.org/t/p/w500";

type MediaItem = Movie | Tv;

interface MediaGridProps {
  data: MediaItem[];
  title: string;
  mediaType: "movies" | "tv";
}

const MediaGrid = ({ data, title, mediaType }: MediaGridProps) => {
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
      <div className="mx-auto mb-4 grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(168px,1fr))] place-items-center gap-6 p-4 align-middle">
        {data.length > 0 &&
          data.map((item: MediaItem) => (
            <Link key={item.id} href={getLink(item.id)}>
              <Card className="relative grid grid-rows-[1fr] overflow-hidden border-2 transition-transform duration-200 hover:scale-105">
                <AspectRatio ratio={2 / 3} className="relative">
                  {!loadingStates[item.id] && (
                    <div className="absolute inset-0 z-10">
                      <Skeleton className="h-full w-full" />
                    </div>
                  )}
                  <Image
                    src={`${image500}${item.poster_path}`}
                    width={168}
                    height={252}
                    priority
                    alt={getTitle(item)}
                    className={`w-full object-cover transition-opacity duration-300 ${
                      loadingStates[item.id] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(item.id)}
                  />
                </AspectRatio>
                <p className="w-[180px] overflow-hidden truncate whitespace-nowrap px-2 py-4 text-center font-medium">
                  {smartTitleShorten(getTitle(item))}
                </p>
              </Card>
            </Link>
          ))}
      </div>
    </>
  );
};

export default MediaGrid;
