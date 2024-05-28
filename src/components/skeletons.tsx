import { Skeleton } from '@/components/ui/skeleton';
import { AspectRatio } from './ui/aspect-ratio';

export const BookCardSkeleton = () => {
  return (
    <div className="grid h-full w-full space-x-2 p-0 md:grid-cols-[40%_60%]">
      <div className="h-full w-full">
        <AspectRatio ratio={345 / 500}>
          <Skeleton className="h-full w-full rounded-sm" />
        </AspectRatio>
      </div>
      {/* <div></div> */}
      <div className="hidden flex-1 space-y-12 py-4 md:block">
        <div className="space-y-2">
          <Skeleton className="h-6 w-[4em]" />
          <Skeleton className="h-5 w-full" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  );
};
