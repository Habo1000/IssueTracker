import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";

import { IssueFormWrapper } from "../../Wrapper";

interface Props {
  params: Promise<{ id: string }>;
}

const EditIssuePage = async ({ params }: Props) => {
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

  return (
    <>
      <IssueFormWrapper issue={issue} />
    </>
  );
};

export default EditIssuePage;
