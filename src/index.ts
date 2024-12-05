import express, { Application, Request, Response } from "express";
import cors from "cors";
import path from "path";

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to my Api");
});

app.use("/api/public", express.static(path.join(__dirname, "../public")));


app.listen(PORT, () => {
  console.log(`service running on -> http://localhost:${PORT}/api`);
});
