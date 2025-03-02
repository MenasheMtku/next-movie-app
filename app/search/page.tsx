import { fetchQuery } from "@/lib/tmdb";
import MediaGrid from "@/components/MediaGrid";

async function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  // default to empty query
  const { query } = await searchParams || "";

  if (!query) {
    return <p className="text-center text-lg">Please enter a search term.</p>;
  }

  const results = await fetchQuery(query);
  if (!results?.length) {
    return <p className="text-center text-lg">No results found for {query}.</p>;
  }

  return (
    <div className="mx-auto max-w-5xl p-4">
      <h1 className="text-2xl font-semibold mb-4">Search results for {query}</h1>
      <MediaGrid data={results} mediaType="movie" />
    </div>
  );
}

export default SearchPage;

