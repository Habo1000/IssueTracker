import { Skeleton } from "@radix-ui/themes";
import React from "react";

const NewIssueLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 gap-4 px-4">
      <Skeleton width="16rem" />
      <Skeleton width="20rem" height="10rem" />
    </div>
  );
};

export default NewIssueLoading;
