import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { smartTitleShorten } from "@/lib/helpers";
import {Movie, Tv} from "@/types";

interface MediaCardProps {
  id: number;
  item?: Movie | Tv;
  title: string;
  posterPath: string;
  isLoaded: boolean;
  onLoad: (id: number) => void;
  }
 
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const MediaCard = ({ id, title, posterPath, isLoaded, onLoad   }:MediaCardProps) => {

  return (
  <Card className="relative w-full overflow-hidden border-2 transition-transform duration-200 hover:scale-105">
      <AspectRatio ratio={2 / 3} className="relative w-full">
        {!isLoaded && (
          <div className="absolute inset-0 z-10">
            <Skeleton className="h-full w-full" />
          </div>
        )}
        <Image
          src={`${IMAGE_BASE_URL}${posterPath}`}
          fill
          priority
          alt={title}
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => onLoad(id)}
        />
      </AspectRatio>
      <p className="w-full overflow-hidden truncate whitespace-nowrap px-2 py-4 text-center font-medium">
        {smartTitleShorten(title)}
      </p>
    </Card>
      );
};
