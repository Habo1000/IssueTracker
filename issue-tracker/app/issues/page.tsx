import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import { Link, StatusBadge } from "../_components";
import IssueActions from "./IssueActions";

const Issues = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div className="flex flex-col justify-center items-center my-4 gap-4 px-4">
      <IssueActions />
      <div className="w-full max-w-2xl">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Status
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell">
                Created
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues.map((issue) => (
              <Table.Row key={issue.id}>
                <Table.RowHeaderCell>
                  <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                  <div className="block md:hidden">
                    <StatusBadge status={issue.status} />
                  </div>
                </Table.RowHeaderCell>
                <Table.Cell className="hidden md:table-cell">
                  <StatusBadge status={issue.status} />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {issue.createdAt.toLocaleDateString()}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Issues;
