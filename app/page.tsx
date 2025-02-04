import { getTrendingAll } from "@/lib/tmdb";
import { HeroSection } from "@/components/HeroSection";
import { HeroTrending } from "@/components/HeroTrending";

export default async function Home() {
  const trending = await getTrendingAll();
  const randomIndex = Math.floor(Math.random() * trending.length);
  const featuredContent = trending[randomIndex];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection content={featuredContent} />
      {/* Trending Section */}
      <HeroTrending items={trending} mediaType="movies" />
    </div>
  );
}
