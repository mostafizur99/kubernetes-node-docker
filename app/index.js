const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    meaasge: "Hello from App!",
    header: req.headers,
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
