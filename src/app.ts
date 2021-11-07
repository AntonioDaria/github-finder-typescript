import express from "express";
import config from "config";
import routes from "./routes";

//const port = config.get<number>("port");
const port = 1337;
const app = express();

app.use(express.json());

app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);

  routes(app);
});
