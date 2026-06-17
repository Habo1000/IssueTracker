import { prisma } from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "../EditIssueButton";
import IssueDetail from "../IssueDetail";
import DeleteIssueButton from "../DeleteIssueButton";

interface Props {
  params: Promise<{ id: string }>;
}

const IssueDetailPage = async ({ params }: Props) => {
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
    <div className="border-l  m-8 p-4 text-xl space-y-2 ">
      <Grid columns={{ initial: "1", md: "2" }} gap="3">
        <Box className="space-y-3 col-span-4">
          <IssueDetail issue={issue} />
          <Flex gap="4">
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      </Grid>
    </div>
  );
};

export default IssueDetailPage;
