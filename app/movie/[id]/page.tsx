// app/movies/[id]/page.tsx

import React from "react";
import Image from "next/image";
import { getMovieDetails } from "@/lib/tmdb"; // Adjust based on actual API service path
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WatchNowButton } from "@/components/WatchTrailer";

interface MovieDetailsProps {
  params: { id: number };
}

const imageBaseUrl = "https://image.tmdb.org/t/p/original";

// Header Component for Title & Year
const MovieHeader: React.FC<{ title: string; year: number }> = ({
  title,
  year,
}) => (
  <div className="mb-4 flex items-baseline gap-8">
    <h1 className="text-4xl font-semibold">{title}</h1>
    <span className="text-base">{year}</span>
  </div>
);

// Description Component for Overview & Rating
const MovieDescription: React.FC<{ overview: string; rating: number }> = ({
  overview,
  rating,
}) => (
  <div className="mb-4">
    <p className="mb-2 text-lg">{overview}</p>
    <Button className="text-lg font-semibold" variant="default">
      Rating: {rating}
    </Button>
  </div>
);

// Image Component for Backdrop
const MovieImage: React.FC<{ backdropPath: string | null; title: string }> = ({
  backdropPath,
  title,
}) => {
  if (!backdropPath) return <p className="text-gray-500">No image available</p>;

  return (
    <AspectRatio ratio={16 / 9} className="mt-4">
      <Image
        src={`${imageBaseUrl}${backdropPath}`}
        width={700}
        height={100}
        alt={title}
        className="mb-4 rounded-lg object-cover"
        priority
      />
    </AspectRatio>
  );
};

const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const movie = await getMovieDetails(params.id);
  if (!movie) return <p className="text-center text-lg">Movie not found</p>;

  return (
    <Card className="mt-4 min-h-screen">
      <div className="mx-auto max-w-[800px] p-4">
        <MovieHeader
          title={movie.title}
          year={new Date(movie.release_date).getFullYear()}
        />
        <MovieDescription
          overview={movie.overview}
          rating={movie.vote_average}
        />
        <MovieImage
          backdropPath={movie.backdrop_path || " "}
          title={movie.title}
        />
      </div>
    </Card>
  );
};

export default MovieDetails;
