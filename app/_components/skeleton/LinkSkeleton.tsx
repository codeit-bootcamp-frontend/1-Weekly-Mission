import { Skeleton } from "@mui/material";

const LinkSkeleton = () => {
  return (
    <div className="mx-auto flex min-h-480 max-w-full flex-wrap justify-center gap-20 pt-32 tablet:pt-40">
      <Skeleton variant="rounded" width={340} height={340} />
      <Skeleton variant="rounded" width={340} height={340} />
      <div className="hidden pc:block">
        <Skeleton variant="rounded" width={340} height={340} />
      </div>
    </div>
  );
};

export default LinkSkeleton;
