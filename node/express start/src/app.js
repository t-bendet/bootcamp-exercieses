const path = require("path");
const express = require("express");
// path.join (sort of template strings)
console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();
const publicDirPath = path.join(__dirname, "../public");
// what is static?
app.use(express.static(publicDirPath));

// get - route to the page ,res.send = content

app.get("/weather", (req, res) => {
  res.send("Weather page");
});
// the port  to init the site
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
