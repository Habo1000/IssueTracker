import { Issue } from "@/prisma/generated/prisma";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import Markdown from "react-markdown";
import { StatusBadge } from "../components";

const IssueDetail = ({ issue }: { issue: Issue }) => {
  const { title, description, status, createdAt } = issue;

  return (
    <>
      <Heading>{title}</Heading>
      <Flex align="center" gap="4">
        <StatusBadge status={status} />
        <Text>{createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-none">
        <Markdown>{description}</Markdown>
      </Card>
    </>
  );
};

export default IssueDetail;
