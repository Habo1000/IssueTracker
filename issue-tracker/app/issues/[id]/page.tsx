import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const IssueDetail = async ({ params }: Props) => {
  const { id } = await params;

  if (typeof parseInt(id) !== "number") {
    notFound();
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) {
    notFound();
  }

  const { title, description, status, createdAt, updatedAt } = issue;

  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p> {status}</p>
      <p>{createdAt.toDateString()}</p>
      <p>{updatedAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetail;
