"use client";

import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <TrashIcon />
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Link href="">Delete issue</Link>
        </AlertDialog.Trigger>

        <AlertDialog.Content>
          <AlertDialog.Title>Delete Issue</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue ?
          </AlertDialog.Description>
          <Flex mt="4" gap="4">
            <AlertDialog.Cancel>
              <Button>Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button>Delete</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Button>
  );
};

export default DeleteIssueButton;
