const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes"));

const port = 2334;

app.listen(port, () => {
  console.log(`We're live on port ${port}!`);
});
