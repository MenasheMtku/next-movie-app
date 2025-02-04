const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <p className="text-lg">
        NextAMovie is a modern movie and TV show discovery app powered by the{" "}
        <span className="font-semibold">TMDB API</span>. It provides up-to-date
        information on trending, popular, and top-rated content.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Browse movies and TV shows</li>
        <li>Watch trailers</li>
        <li>View detailed media info</li>
        <li>Dark mode support</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Built With</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <span className="font-semibold">Next.js 14</span> – Server-rendered
          React
        </li>
        <li>
          <span className="font-semibold">Tailwind CSS</span> – Utility-first
          styling
        </li>
      </ul>

      <p className="mt-8">
        Explore movies effortlessly. Enjoy the experience! 🎬
      </p>
    </div>
  );
};

export default AboutPage;

