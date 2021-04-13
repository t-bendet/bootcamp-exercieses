const https = require("https");

const url = `https://www.foaas.com/shakespeare/node.js/bendet/`;

https
  .get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data = data + chunk.toString();
    });
    res.on("end", () => {
      console.log(data);
    });
  })
  .on("error", (err) => {
    console.log("Error: ", err.message);
  });
