import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ListRouter } from "./routers/routes";


const PORT: number = 8001;

const app: Application = express();
app.use(express.json());
app.use(
    cors({
      origin: `${process.env.BASE_URL_FE}`, 
      credentials: true,             
    })
  );
// app.use(cors({
//     origin: "*",
//     credentials: true
// }));
app.use(cookieParser());

app.get("/api", (req: Request, res: Response) => {
    res.status(200).send("Hello from server");
});

const listRouter = new ListRouter();
app.use("/api", listRouter.getRouter());

app.listen(PORT, () => {
    console.log(`server running on -> http://localhost:${PORT}/api`);
})
