import { Movie } from "@/types";
import {
  getPopularMovies,
  getUpcomingMovies,
  getTrendingMovies,
  getTopRatedMovies,
} from "@/lib/tmdb";

import MediaMenu from "../MediaMenu";

const MovieServerWrapper = async () => {
  const topRatedMovie: Movie[] = await getTopRatedMovies();
  const popularMovie: Movie[] = await getPopularMovies();
  const upcomingMovie: Movie[] = await getUpcomingMovies();
  const trendingMovie: Movie[] = await getTrendingMovies();

  // Define categories with their respective data
  const movieCategories = [
    { id: "trending", title: "Trending", data: trendingMovie },
    { id: "popular", title: "Popular", data: popularMovie },
    { id: "top_rated", title: "Top Rated", data: topRatedMovie },
    { id: "upcoming", title: "Upcoming", data: upcomingMovie },
  ];

  return (
    <>
      <MediaMenu categories={movieCategories} mediaType="movies" />
    </>
  );
};

export default MovieServerWrapper;
