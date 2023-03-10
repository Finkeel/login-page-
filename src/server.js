const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require('cors);

app.use(express.json());
app.use(routes);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
