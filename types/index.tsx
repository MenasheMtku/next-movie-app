const key = process.env.NEXT_PUBLIC_API_KEY;
const url = process.env.NEXT_PUBLIC_API_URL;

interface commonProps {
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path?: string;
  vote_average: number;
}
export type Movie = commonProps & {
  title: string;
  release_date: string;
};
export type Tv = commonProps & {
  name: string;
  first_air_date: string;
};

// get popular movies
export const getPopularMovies = async () => {
  const response = await fetch(`${url}movie/popular?api_key=${key}`);
  const data = await response.json();
  const movies: Movie[] = data.results;

  return movies;
};
// get popular tv
export const getPopularTvShows = async () => {
  const response = await fetch(`${url}tv/popular?api_key=${key}`);
  const data = await response.json();
  const tv: Tv[] = data.results;

  return tv;
};

// get movie details
export const getMovieDetails = async (id: number) => {
  const response = await fetch(`${url}movie/${id}?api_key=${key}`);
  const data = await response.json();
  const movie: Movie = data;

  return movie;
};
// get tv details
export const getTvDetails = async (id: number) => {
  const response = await fetch(`${url}tv/${id}?api_key=${key}`);
  const data = await response.json();
  const tv: Tv = data;

  return tv;
};
