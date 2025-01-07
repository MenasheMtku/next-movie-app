import { getPopularTvShows, Tv } from "@/types";
import PopularTv from "../PopularTv";

const TvServerWrapper = async () => {
  const data: Tv[] = await getPopularTvShows();

  return <PopularTv data={data} />;
};

export default TvServerWrapper;
