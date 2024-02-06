// details.js

const express = require("express");
const app = express();
const port = 3003;

const storeDetails = {
    name: "Example Store",
    address: "123 Main Street",
    city: "Cityville",
    state: "Stateville",
    country: "Countryland",
    zipCode: "12345",
    phone: "555-123-4567"
  };
  

app.get("/", (req, res) => {
  console.log('hello from store page')
  res.json(storeDetails);
});

app.listen(port, () => {
  console.log(`StoreDetails microservice is running on port ${port}`);
});
