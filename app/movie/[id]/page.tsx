import React from "react";
import Image from "next/image";
import { defaultBackdropImage, getMovieDetails } from "@/lib/tmdb";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ClientMovieWrapper from "@/components/ClientMediaWrapper";

interface MovieDetailsProps {
  params: Promise<{ id: number }>;
}

// Header Component for Title & Year
const MovieHeader: React.FC<{ title: string; year?: number }> = ({
  title,
  year,
}) => (
  <div className="mb-4 flex items-baseline gap-8">
    <h1 className="text-4xl font-semibold">{title}</h1>
    {year && <span className="text-base">{year}</span>}
  </div>
);

// Description Component for Overview & Rating
const MovieDescription: React.FC<{ overview: string; rating?: number }> = ({
  overview,
  rating,
}) => (
  <div className="mb-4">
    <p className="mb-2 text-lg">{overview || "No description available."}</p>
    {rating !== undefined && (
      <Button className="text-lg font-semibold" variant="default">
        Rating: {rating.toFixed(1)}
      </Button>
    )}
  </div>
);

// Image Component for Backdrop
const MovieImage: React.FC<{ backdropPath?: string | null; title: string }> = ({
  backdropPath,
  title,
}) => {
  const backdropUrl = backdropPath
    ? `https://image.tmdb.org/t/p/original${backdropPath}`
    : defaultBackdropImage;

  return (
    <AspectRatio ratio={16 / 9} className="mt-4">
      <Image
        src={backdropUrl}
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
  const resolvedParams = await params;
  // geting movie details from tmdb api
  const movie = await getMovieDetails(resolvedParams.id);

  if (!movie) {
    return <p className="text-center text-lg">Movie not found</p>;
  }

  return (
    <ClientMovieWrapper>
      <Card className="mt-4 min-h-screen">
        <div className="mx-auto max-w-[800px] p-4">
          <MovieHeader
            title={movie.title}
            year={
              movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : undefined
            }
          />
          <MovieDescription
            overview={movie.overview}
            rating={movie.vote_average}
          />
          <MovieImage backdropPath={movie.backdrop_path} title={movie.title} />
        </div>
      </Card>
    </ClientMovieWrapper>
  );
};

export default MovieDetails;
