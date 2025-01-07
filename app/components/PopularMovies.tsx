"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const image500 = "https://image.tmdb.org/t/p/w500";

interface PopularMoviesProps {
  data: Movie[];
}

const PopularMovies = ({ data }: PopularMoviesProps) => {
  // Track loading state for each image
  const [loadingStates, setLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});

  const handleImageLoad = async (id: number) => {
    setLoadingStates((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };
  // console.log(data);

  return (
    <>
      <h1 className="p-4 text-center text-3xl font-normal">Popular Movies</h1>

      <div className="mx-auto mb-4 grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(168px,1fr))] place-items-center gap-6 p-4 align-middle">
        {data.length > 0 ? (
          data.map((movie: Movie) => (
            <Link key={movie.id} href={`movies/${movie.id}`}>
              <Card className="grid grid-rows-[1fr] overflow-auto border-2">
                {/* Show Skeleton while image is loading */}
                {!loadingStates[movie.id] && (
                  <Skeleton className="h-[252px] w-full rounded-lg" />
                )}
                <AspectRatio ratio={2 / 3}>
                  <Image
                    src={`${image500}${movie.poster_path}`}
                    width={168}
                    height={168}
                    loading="lazy"
                    alt={movie.title}
                    className={`w-full object-cover ${
                      loadingStates[movie.id]
                        ? "h-full opacity-100"
                        : "h-0 opacity-0"
                    } transition-opacity duration-300`}
                    blurDataURL="/skl.png"
                    placeholder="blur"
                    onLoad={() => handleImageLoad(movie.id)}
                  />
                </AspectRatio>

                <p className="w-[180px] overflow-hidden truncate whitespace-nowrap text-pretty py-2 text-center font-medium">
                  {movie.title}
                </p>
              </Card>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default PopularMovies;
