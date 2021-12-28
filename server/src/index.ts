import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.static(`public`)) // serve images from here


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
