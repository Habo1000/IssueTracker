"use client";

import { TextField, Button, Callout } from "@radix-ui/themes";
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();

  const [error, setError] = useState("");

  const router = useRouter();

  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
      setError("");
    } catch (error) {
      setError("An unexpected error occured.");
    }
  };

  return (
    <div className="max-w-xl m-auto my-4">
      {error && (
        <Callout.Root>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="flex flex-col gap-4  py-8 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField.Root placeholder="Title" {...register("title")} />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Description of the issue" {...field} />
          )}
        />

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
