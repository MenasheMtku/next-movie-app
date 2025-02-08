import { getPopularMovies, getTopRatedMovies, getTrendingMovies, getUpcomingMovies } from "@/lib/tmdb";
import MediaMenu from "../../components/MediaMenu";
import { Movie } from "@/types";

const MoviesPage = async () => {
  const topRatedMovie: Movie[] = await getTopRatedMovies();
  const popularMovie: Movie[] = await getPopularMovies();
  const upcomingMovie: Movie[] = await getUpcomingMovies();
  const trendingMovie: Movie[] = await getTrendingMovies();

  console.log("MoviePage Server");

  // Define categories with their respective data
  const movieCategories = [
    { id: "trending", title: "Trending", data: trendingMovie },
    { id: "popular", title: "Popular", data: popularMovie },
    { id: "top_rated", title: "Top Rated", data: topRatedMovie },
    { id: "upcoming", title: "Upcoming", data: upcomingMovie },
  ];


  return <MediaMenu categories={movieCategories} mediaType="movies" />;
};

export default MoviesPage;
