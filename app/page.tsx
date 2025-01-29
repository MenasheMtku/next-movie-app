import React from "react";
import { Play, Info, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import * as types from "@/types";
import { getTrendingAll } from "@/lib/tmdb";

export default async function Home() {
  const trending = await getTrendingAll();
  const imageOriginal = "https://image.tmdb.org/t/p/original";
  const imagePoster = "https://image.tmdb.org/t/p/w500";

  // get a random movie or tv show from the trending list
  const randomIndex = Math.floor(Math.random() * trending.length);
  console.log(randomIndex);
  // Get the first item as featured content
  const featuredContent = trending[randomIndex];

  // Helper function to determine if item is Movie or Tv
  const isMovie = (item: types.Movie | types.Tv): item is types.Movie => {
    return "title" in item;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full text-slate-200">
        <Image
          src={`${imageOriginal}${featuredContent.backdrop_path}`}
          alt={
            isMovie(featuredContent)
              ? featuredContent.title
              : featuredContent.name
          }
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
          <div className="absolute bottom-0 left-0 max-w-2xl p-8">
            <div className="mb-4 inline-flex items-baseline gap-6">
              <h1 className="text-4xl font-bold">
                {isMovie(featuredContent)
                  ? featuredContent.title
                  : featuredContent.name}
              </h1>
              <p className="text-lg">
                {isMovie(featuredContent)
                  ? new Date(featuredContent.release_date).getFullYear()
                  : new Date(featuredContent.first_air_date).getFullYear()}{" "}
              </p>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <Star className="text-yellow-400" size={20} />
              <span>{featuredContent.vote_average.toFixed(1)}</span>
            </div>
            <p className="mb-6 text-gray-200">{featuredContent.overview}</p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-700">
                <Play size={20} />
                Watch Now
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-gray-700 px-6 py-3 font-semibold hover:bg-gray-600">
                <Info size={20} />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="px-8 py-12">
        <h2 className="mb-6 text-2xl font-bold">Trending Now</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {trending.slice(0, 4).map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border-gray-700 bg-gray-800 transition-transform hover:scale-105"
            >
              <CardContent className="p-0">
                <Image
                  src={`${imagePoster}${item.poster_path}`}
                  alt={isMovie(item) ? item.title : item.name}
                  className="h-[100%] w-full object-cover"
                  width={185}
                  height={280}
                />
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold">
                    {isMovie(item) ? item.title : item.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">
                      {isMovie(item) ? "Movie" : "TV Series"}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400" size={16} />
                      <span>{item.vote_average.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
