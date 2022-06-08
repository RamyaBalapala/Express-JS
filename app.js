const express = require("express");
const app = express();

app.get("/", (request, response) => {
  request.send("Express JS");
});

app.listen(3000);

module.exports = express;
