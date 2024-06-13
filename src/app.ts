import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) =>
  res.status(200).send({
    message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1`,
  })
);

app.listen(port, () =>
  console.log(`🚀 Server ready at: http://localhost:${port}`)
);

export default app;
