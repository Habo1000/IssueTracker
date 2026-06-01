import React from "react";
import { TextField, TextArea, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="flex flex-col gap-4 max-w-xl py-8 m-auto">
      <TextField.Root placeholder="Title" />
      <TextArea placeholder="Description of the issue" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
