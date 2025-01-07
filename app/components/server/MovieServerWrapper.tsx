import { getPopularMovies, Movie } from "@/types";
import PopularMovies from "../PopularMovies";

const MovieServerWrapper = async () => {
  const data: Movie[] = await getPopularMovies();

  return <PopularMovies data={data} />;
};

export default MovieServerWrapper;
