import { Skeleton, Box } from "@radix-ui/themes";
import React from "react";

const IssueFormSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center my-15 gap-4 px-4">
      <Skeleton width="30rem" height="2rem" />
      <Skeleton width="30rem" height="10rem" />
    </div>
  );
};

export default IssueFormSkeleton;
