import { Tv } from "@/types";
import {
  getPopularTvShows,
  getTopRatedTvShows,
  getOnTheAir,
  getTreandingTvShows,
} from "@/lib/tmdb";

import MediaMenu from "../MediaMenu";

const TvServerWrapper = async () => {
  const popularTvShows: Tv[] = await getPopularTvShows();
  const topRatedTvShows: Tv[] = await getTopRatedTvShows();
  const onTheAir: Tv[] = await getOnTheAir();
  const trendingTvShows: Tv[] = await getTreandingTvShows();

  // Define categories with their respective data
  const tvCategories = [
    { id: "trending", title: "Trending", data: trendingTvShows },
    { id: "popular", title: "Popular", data: popularTvShows },
    { id: "top_rated", title: "Top Rated", data: topRatedTvShows },
    { id: "on_the_air", title: "On The Air", data: onTheAir },
  ];
  return (
    <>
      <MediaMenu categories={tvCategories} mediaType="tv" />
    </>
  );
};

export default TvServerWrapper;
