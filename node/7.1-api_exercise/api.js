const request = require("request");
const axios = require("axios");
const got = require("got");

const url = `https://www.foaas.com/shakespeare/node.js/bendet`;

//fetch data using the request module
request({ url: url, json: true }, (error, response) => {
  const { message, subtitle } = response.body;
  console.log("*********using request******************");
  console.log(message);
  console.log("from the bottom of my heart ", subtitle);
  console.log("*****************************************");
});
//Fetch data using axios
axios.get(url).then(
  (response) => {
    console.log("*********using axios******************");
    console.log(response.data.message);
    console.log("from the bottom of my heart ", response.data.subtitle);
    console.log("***************************************");
  },
  (error) => {
    console.log(error);
  }
);
//Fetch data using another 3rd party module (got)

async function test() {
  const response = await got(url, { json: true });
  console.log("*********using got******************");
  console.log(response.body.message);
  console.log("from the bottom of my heart ", response.body.subtitle);
  console.log("***************************************");
}
test();
