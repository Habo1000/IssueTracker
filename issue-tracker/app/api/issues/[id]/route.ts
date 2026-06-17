import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "@/app/validationSchemas";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const issueId = parseInt(id);

  if (Number.isNaN(issueId)) {
    return NextResponse.json({ error: "Bad id" }, { status: 400 });
  }

  const body = await request.json();

  const validation = issueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 },
    );
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  });

  if (!issue) {
    return NextResponse.json(
      {
        error: "No issue found",
      },
      { status: 404 },
    );
  }

  const updatedIssue = await prisma.issue.update({
    where: {
      id: issueId,
    },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedIssue, {
    status: 200,
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const issueId = parseInt(id);

  if (Number.isNaN(issueId)) {
    return NextResponse.json({ error: "Bad id" }, { status: 400 });
  }

  const issue = await prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  });

  if (!issue) {
    return NextResponse.json({ error: "No issue found" }, { status: 404 });
  }

  const deletedIssue = await prisma.issue.delete({
    where: {
      id: issueId,
    },
  });

  return NextResponse.json(deletedIssue, { status: 200 });
}
