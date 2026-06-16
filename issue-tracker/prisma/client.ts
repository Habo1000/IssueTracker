import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/client";

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  connectionLimit: 5,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "issue-tracker",
  allowPublicKeyRetrieval: true,
});

const prismaSingleton = () =>
  new PrismaClient({
    adapter,
  });

type PrismaSingleton = ReturnType<typeof prismaSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
