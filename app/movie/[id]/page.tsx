// app/movies/[id]/page.tsx

import React from "react";
import Image from "next/image";

import { getMovieDetails } from "@/lib/tmdb"; // Adjust based on actual API service path

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MovieDetailsProps {
  params: {
    id: number;
  };
}

const imageOriginal = "https://image.tmdb.org/t/p/original";

const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const movie = await getMovieDetails(params.id);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <Card className="mt-4 min-h-screen">
      <div className="mx-auto max-w-[800px] p-4">
        <div className="mb-4 flex items-baseline justify-start gap-8">
          <p className="mb-4 text-4xl font-semibold">{movie.title}</p>
          <p className="text-base">
            {new Date(movie.release_date).getFullYear()}
          </p>
        </div>
        <div className="h-full w-full">
          <p className="mb-2 text-lg">{movie.overview}</p>
          <Button className="text-lg font-semibold" variant="default">
            Rating: {movie.vote_average}
          </Button>

          <AspectRatio ratio={16 / 9} className="mt-4">
            {/* {!imageLoaded && <Skeleton className="h-full w-full rounded-lg" />} */}
            <Image
              src={`${imageOriginal}${movie.backdrop_path}`}
              width={700}
              height={100}
              alt={movie.title}
              className="mb-4 rounded-lg object-cover"
              priority
            />
          </AspectRatio>
        </div>
      </div>
    </Card>
  );
};

export default MovieDetails;
