import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
