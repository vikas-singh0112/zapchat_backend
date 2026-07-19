import { Elysia } from "elysia";
import { prisma } from "../prisma/client";

export const prismaPlugin = new Elysia({ name: "prisma" })
	.decorate("prisma", prisma);