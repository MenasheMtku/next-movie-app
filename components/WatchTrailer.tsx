'use client';

import { useState } from "react";
import { Play } from "lucide-react";
import { Movie, Tv } from "@/types";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { fetchTrailer } from "@/lib/tmdb";
import { Button } from "./ui/button";


export const WatchNowButton = ({ content }: { content: Movie | Tv }) => {
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  const isMovie = (item: Movie | Tv): item is Movie => {
    return "title" in item;
  };

  const handlePlay = async () => {
    const url = await fetchTrailer(content.id, isMovie(content) ? "movie" : "tv");
    if (url) {
      setTrailerUrl(url);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            onClick={handlePlay}
            className="flex items-center gap-2 rounded-lg px-6 py-3 font-semibold hover:bg-red-500"
          >
            <Play size={20} />
            Trailer
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl w-full aspect-video">
          <DialogTitle className="sr-only">Trailer for {isMovie(content) ? content.title : content.name}</DialogTitle>
          {trailerUrl && (
            <iframe
              className="w-full h-full"
              src={trailerUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};


