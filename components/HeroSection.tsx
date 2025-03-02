"use client";
import Image from "next/image";
import { Info, Star } from "lucide-react";
import { Movie, Tv } from "@/types";
import { WatchNowButton } from "./WatchTrailer";
import { Button } from "./ui/button";
import Link from "next/link";

import { motion } from "framer-motion";

interface HeroSectionProps {
  content: Movie | Tv;
}

const isMovie = (item: Movie | Tv): item is Movie => {
  return "title" in item;
};

const imageOriginal = "https://image.tmdb.org/t/p/original";

export const HeroSection = ({ content }: HeroSectionProps) => {
  const title = isMovie(content) ? content.title : content.name;
  const year = isMovie(content)
    ? new Date(content.release_date).getFullYear()
    : new Date(content.first_air_date).getFullYear();

  return (
    <div className="relative h-[70vh] w-screen overflow-hidden text-slate-200">
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          <Image
            src={`${imageOriginal}${content.backdrop_path}`}
            alt={title}
            className="h-full w-full object-cover"
            fill
            priority
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-stone-950/80 to-transparent">
        <div className="mx-auto h-full max-w-7xl">
          <div className="absolute bottom-0 max-w-2xl p-8">
            <div className="mb-4 inline-flex items-baseline gap-6">
              <h1 className="text-xl font-bold md:text-4xl">{title}</h1>
              <p className="text-lg">{year}</p>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <Star className="text-yellow-400" size={20} />
              <span>{content.vote_average.toFixed(1)}</span>
            </div>
            <div className="flex gap-4">
              <WatchNowButton content={content} />
              <Link
                href={`/${isMovie(content) ? "movie" : "tv"}/${content.id}`}
              >
                <Button
                  variant={"outline"}
                  className="flex items-center gap-2 rounded-lg bg-gray-700 px-6 py-3 font-semibold hover:bg-gray-600"
                >
                  <Info size={20} />
                  More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
