import { getOnTheAir, getPopularTvShows, getTopRatedTvShows, getTreandingTvShows } from "@/lib/tmdb";
import { Tv } from "@/types";
import MediaMenu from "@/components/MediaMenu";

const TvPage = async () => {

  const popularTvShows: Tv[] = await getPopularTvShows();
  const topRatedTvShows: Tv[] = await getTopRatedTvShows();
  const onTheAir: Tv[] = await getOnTheAir();
  const trendingTvShows: Tv[] = await getTreandingTvShows();

  console.log("TvPage Server");

  // Define categories with their respective data
  const tvCategories = [
    { id: "trending", title: "Trending", data: trendingTvShows },
    { id: "popular", title: "Popular", data: popularTvShows },
    { id: "top_rated", title: "Top Rated", data: topRatedTvShows },
    { id: "on_the_air", title: "On The Air", data: onTheAir },
  ];

  return <MediaMenu categories={tvCategories} mediaType="tv" />;
}

export default TvPage;
