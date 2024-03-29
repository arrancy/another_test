import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended : true }))
app.use(morgan("tiny"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  
  
});

app.post("/submit", (req,res) => {
  res.send("<h1>the name of your band is" + req.body.street + req.body.pet) ;
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
