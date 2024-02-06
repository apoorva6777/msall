// productpage.js

const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    console.log('hello from productpage')
    const detailsResponse = await axios.get("http://details-service:3001/");
    const detailsData = detailsResponse.data;

    const ratingsResponse = await axios.get("http://ratings-service:3002/");
    const ratingsData = ratingsResponse.data;

    const productPageData = {
      message: "Product Page",
      details: detailsData,
      ratings: ratingsData // Including ratingsData in the response
    };
    res.json(productPageData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
