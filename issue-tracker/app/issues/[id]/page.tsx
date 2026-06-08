import { StatusBadge } from "@/app/components";
import { prisma } from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

import delay from "delay";

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

  const { title, description, status, createdAt } = issue;

  return (
    <div className="border-l  m-8 p-4 text-xl space-y-2 ">
      <Heading>{title}</Heading>
      <Flex align="center" gap="4">
        <StatusBadge status={status} />
        <Text>{createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-none">
        <Markdown>{description}</Markdown>
      </Card>
    </div>
  );
};

export default IssueDetail;
