import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Movie, Tv } from "@/types";
import { defaultPosterImage } from "@/lib/tmdb";

import { motion } from "framer-motion";

interface MediaCardProps {
  id: number;
  item?: Movie | Tv;
  title: string;
  alt?: string;
  posterPath: string;
  isLoaded: boolean;
  onLoad: (id: number) => void;
}

export const MediaCard = ({
  id,
  title,
  posterPath,
  isLoaded,
  onLoad,
}: MediaCardProps) => {
  const cardPoster = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : defaultPosterImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <Card className="relative w-full overflow-hidden border-2 transition-transform duration-200 hover:scale-105">
        <AspectRatio ratio={2 / 3} className="relative w-full">
          {!isLoaded && (
            <div className="absolute inset-0 z-10">
              <Skeleton className="h-full w-full" />
            </div>
          )}
          <Image
            src={`${cardPoster}`}
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
          {title}
        </p>
      </Card>
    </motion.div>
  );
};
