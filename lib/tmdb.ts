const key = process.env.NEXT_PUBLIC_API_KEY;
const url = process.env.NEXT_PUBLIC_API_URL;

import { Movie, Tv } from "@/types";

// movies
export const getTrendingMovies = async () => {
  const response = await fetch(`${url}trending/movie/week?api_key=${key}`);
  const data = await response.json();
  const movies: Movie[] = data.results;
  return movies;
};
export const getPopularMovies = async () => {
  const response = await fetch(`${url}movie/popular?api_key=${key}`);
  const data = await response.json();
  const movies: Movie[] = data.results;
  return movies;
};
export const getUpcomingMovies = async () => {
  const response = await fetch(`${url}movie/upcoming?api_key=${key}`);
  const data = await response.json();
  const movies: Movie[] = data.results;
  return movies;
};
export const getTopRatedMovies = async () => {
  const response = await fetch(`${url}movie/top_rated?api_key=${key}`);
  const data = await response.json();
  const movies: Movie[] = data.results;
  return movies;
};

//tv shows
export const getTreandingTvShows = async () => {
  const response = await fetch(`${url}trending/tv/week?api_key=${key}`);
  const data = await response.json();
  const tv: Tv[] = data.results;
  return tv;
};
export const getPopularTvShows = async () => {
  const response = await fetch(`${url}tv/popular?api_key=${key}`);
  const data = await response.json();
  const tv: Tv[] = data.results;
  return tv;
};

export const getTopRatedTvShows = async () => {
  const response = await fetch(`${url}tv/top_rated?api_key=${key}`);
  const data = await response.json();
  const tv: Tv[] = data.results;
  return tv;
};
export const getOnTheAir = async () => {
  const response = await fetch(`${url}tv/on_the_air?api_key=${key}`);
  const data = await response.json();
  const tv: Tv[] = data.results;
  return tv;
};

// movie details
export const getMovieDetails = async (id: number) => {
  const response = await fetch(`${url}movie/${id}?api_key=${key}`);
  const data = await response.json();
  const movie: Movie = data;

  return movie;
};
// tv show details
export const getTvDetails = async (id: number) => {
  const response = await fetch(`${url}tv/${id}?api_key=${key}`);
  const data = await response.json();
  const tv: Tv = data;

  return tv;
};

// trending movies and tv
export const getTrendingAll = async () => {
  const response = await fetch(
    `${url}trending/all/day?api_key=${key}&with_original_language=en`,
  );
  const data = await response.json();
  const trending: (Movie | Tv)[] = data.results;

  return trending;
};

interface TMDBVideo {
  id: string;
  key: string;
  name: string;
  site: "YouTube" | "Vimeo";
  type: "Trailer" | "Teaser" | "Clip" | "Featurette" | "Behind the Scenes" | "Bloopers";
  official: boolean;
  published_at: string;
}

export const fetchTrailer = async (id: number, type: "movie" | "tv"): Promise<string | null> => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${key}&language=en-US`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch trailer. Status: ${res.status}`);
    }

    const data: { results: TMDBVideo[] } = await res.json();
    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
  } catch (error) {
    console.error("Failed to fetch trailer:", error);
    return null;
  }
};

export const fetchQuery = async (query: string) => {
  const response = await fetch(
    `${url}search/multi?api_key=${key}&query=${query}&language=en-US`
  );
  const data = await response.json();
  const results = data.results || []; // Ensure results is an array

  // Filter only movies
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const movies = results.filter((item: any) => item.media_type === "movie");

  console.log(results);
  return movies;
};

export const defaultPosterImage =
  "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export const defaultBackdropImage =
  "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
