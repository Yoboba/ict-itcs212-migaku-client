import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const CourseCardSkeleton = () => {
  return (
    <Skeleton
      id="CardContainer"
      className="relative h-[180px] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-slate-200"
    >
      <div id="course-banner" className="relative size-full"></div>
      <div
        id="course-category"
        className="absolute left-[4px] top-1 h-[20px] w-[75px] cursor-pointer rounded-[4px] bg-slate-400 px-2 text-sm font-semibold text-white"
      />
      <div
        id="card-footer"
        className="absolute bottom-0 flex w-full bg-slate-50 p-3"
      >
        <div id="course-name" className="h-6 w-full rounded-md bg-slate-200" />
      </div>
    </Skeleton>
  );
};

export default CourseCardSkeleton;
