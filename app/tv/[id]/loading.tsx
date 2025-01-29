// app/movies/[id]/loading.tsx
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <Card className="mt-4 min-h-screen overflow-y-auto">
      <div className="mx-auto max-w-[800px] p-4">
        {/* Title skeleton */}
        <div className="mb-4 h-12 w-3/4 animate-pulse rounded-lg bg-gray-200" />

        {/* Image skeleton */}
        <div className="mb-4 h-44 w-[218px] animate-pulse rounded-lg bg-gray-200" />

        {/* Overview skeleton */}
        <div className="mb-4 space-y-2">
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
        </div>

        {/* First Air Date skeleton */}
        <div className="mb-2 flex items-center space-x-2">
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Rating skeleton */}
        <div className="flex items-center space-x-2">
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-8 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </Card>
  );
}
