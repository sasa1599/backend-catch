import { PrismaClient } from "prisma/generated/client";



export default new PrismaClient({ log: ["info", "error", "query", "warn"] });
