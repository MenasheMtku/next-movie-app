// app/tv/[id]/page.tsx
import Image from "next/image";
import { getTvDetails } from "@/lib/tmdb"; // Adjust based on actual API service path
import { Card } from "@/components/ui/card";

interface TvDetailsProps {
  params: {
    id: number;
  };
}

const imageOriginal = "https://image.tmdb.org/t/p/original";

const TvDetails = async ({ params }: TvDetailsProps) => {
  const tvShow = await getTvDetails(params.id);

  if (!tvShow) {
    return <p>TV Show not found</p>;
  }

  return (
    <Card className="mt-4 min-h-screen overflow-y-auto">
      <div className="mx-auto max-w-[800px] p-4">
        <p className="mb-4 text-4xl font-semibold">{tvShow.name}</p>
        <Image
          src={`${imageOriginal}${tvShow.poster_path}`}
          width={"218"}
          height={"168"}
          alt={tvShow.name}
          className="mb-4 rounded-lg"
        />

        <p className="mb-2 text-lg">Overview: {tvShow.overview}</p>
        <p className="text-lg">First Air Date: {tvShow.first_air_date}</p>
        <p className="text-lg">Rating: {tvShow.vote_average}</p>
      </div>
    </Card>
  );
};

export default TvDetails;
