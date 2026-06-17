import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <TrashIcon />
      <Link href={`${issueId}/edit`}>Delete issue</Link>
    </Button>
  );
};

export default DeleteIssueButton;
