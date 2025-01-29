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
    { id: "trending", title: "Trending Movies", data: trendingMovie },
    { id: "popular", title: "Popular Movies", data: popularMovie },
    { id: "top_rated", title: "Top Rated Movies", data: topRatedMovie },
    { id: "upcoming", title: "Upcoming Movies", data: upcomingMovie },
  ];

  return (
    <>
      <MediaMenu categories={movieCategories} mediaType="movies" />
    </>
  );
};

export default MovieServerWrapper;
