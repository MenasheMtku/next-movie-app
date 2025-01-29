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
    { id: "trending", title: "Trending Tv Shows", data: trendingTvShows },
    { id: "popular", title: "Popular Tv Shows", data: popularTvShows },
    { id: "top_rated", title: "Top Rated Tv Shows", data: topRatedTvShows },
    { id: "on_the_air", title: "On The Air Tv Shows", data: onTheAir },
  ];
  return (
    <>
      <MediaMenu categories={tvCategories} mediaType="tv" />
    </>
  );
};

export default TvServerWrapper;
