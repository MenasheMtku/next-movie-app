// app/movies/[id]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Loading() {
  return (
    <Card className="mt-4 min-h-screen">
      <div className="mx-auto max-w-[800px] p-4">
        <div className="mb-4 flex items-baseline justify-start gap-8">
          {/* Title and Year */}
          <Skeleton className="mb-4 h-10 w-[300px]" />
          <Skeleton className="h-6 w-[60px]" />
        </div>
        <div className="h-full w-full">
          {/* Overview */}
          <div className="mb-4 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Rating Button */}
          <Skeleton className="h-10 w-[120px]" />

          {/* Image */}
          <AspectRatio ratio={16 / 9} className="mt-4">
            <Skeleton className="h-full w-full rounded-lg" />
          </AspectRatio>
        </div>
      </div>
    </Card>
  );
}
