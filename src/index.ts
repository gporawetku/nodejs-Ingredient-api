import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 8000;

app.get("/", (req: Request, res: Response) =>
  res.status(200).send({
    message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1`,
  })
);

app.use(express.json());
app.listen(port, () =>
  console.log(`🚀 Server ready at: http://localhost:${port}`)
);
