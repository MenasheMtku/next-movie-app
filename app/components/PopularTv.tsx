"use client";
import { useState } from "react";

import { Tv } from "@/types";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const image500 = "https://image.tmdb.org/t/p/w500";

interface PopularTvProps {
  data: Tv[];
}

const PopularTv = ({ data }: PopularTvProps) => {
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
      <h1 className="p-4 text-center text-3xl font-normal">Popular Shows</h1>

      <div className="mx-auto mb-4 grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(168px,1fr))] place-items-center gap-[20px] p-4 align-middle">
        {data.length > 0 ? (
          data.map((tv: Tv) => (
            <Link key={tv.id} href={`tv/${tv.id}`}>
              <Card className="grid grid-rows-[1fr] overflow-auto border-2">
                {
                  /* Show Skeleton while image is loading */
                  !loadingStates[tv.id] && (
                    <Skeleton className="h-[252px] w-full rounded-lg" />
                  )
                }
                {/* Show image after loading */}
                <AspectRatio ratio={2 / 3}>
                  <Image
                    src={`${image500}${tv.poster_path}`}
                    width={168}
                    height={168}
                    loading="lazy"
                    alt={tv.name}
                    className={`w-full object-cover ${
                      loadingStates[tv.id]
                        ? "h-full opacity-100"
                        : "h-0 opacity-0"
                    } transition-opacity duration-300`}
                    blurDataURL="/skl.png"
                    placeholder="blur"
                    onLoad={() => handleImageLoad(tv.id)}
                  />
                </AspectRatio>

                <p className="w-[180px] overflow-hidden truncate whitespace-nowrap text-pretty py-1 text-center font-normal">
                  {tv.name}
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

export default PopularTv;
