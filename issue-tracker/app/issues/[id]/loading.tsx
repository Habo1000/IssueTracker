import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Skeleton } from "@radix-ui/themes";

const DetailLoading = () => {
  return (
    <div className="border-l m-8 p-4 text-xl space-y-4 ">
      <Skeleton />
      <Flex align="center" gap="4">
        <Skeleton width="6rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose max-w-none">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Card>
    </div>
  );
};

export default DetailLoading;
