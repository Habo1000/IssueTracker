import { StatusBadge } from "@/app/components";
import { prisma } from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import Link from "next/link";

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
      <Grid columns={{ initial: "1", md: "2" }} gap="3">
        <Box className="space-y-2">
          <Heading>{title}</Heading>
          <Flex align="center" gap="4">
            <StatusBadge status={status} />
            <Text>{createdAt.toDateString()}</Text>
          </Flex>
          <Card className="prose max-w-none">
            <Markdown>{description}</Markdown>
          </Card>
        </Box>
        <Box>
          <Button>
            <Pencil2Icon />
            <Link href={`issues/${id}/edit`}>Edit issue</Link>
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

export default IssueDetail;
