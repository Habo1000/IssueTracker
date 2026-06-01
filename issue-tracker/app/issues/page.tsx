import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const Issues = () => {
  return (
    <>
      <div>The issue page</div>
      <Button>
        <Link href="/issues/new">New issue</Link>
      </Button>
    </>
  );
};

export default Issues;
