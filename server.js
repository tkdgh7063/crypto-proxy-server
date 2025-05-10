const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["https://tkdgh7063.github.io", "http://localhost:3000"],
  })
);

const BASE_URL = `http://api.coinpaprika.com/v1`;

app.get("/coins", async (_, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/coins`);
    res.json(response.data);
  } catch (e) {
    if (e.response) {
      console.log("Status Code: ", e.response.status);
      console.log("Response Data: ", e.response.data);
      res.json(e.response.data);
    } else if (e.request) {
      console.error("No Response: ", e.request);
      res.status(500).json({ error: "Unknown error Occurs" });
    } else {
      console.error("Axios Error: ", e.message);
      res.status(500).json({ error: "Axios error Occurs" });
    }
  }
});

app.get("/coins/:coin_id", async (req, res) => {
  const { coin_id } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/coins/${coin_id}`);
    res.json(response.data);
  } catch (e) {
    if (e.response) {
      console.log("Status Code: ", e.response.status);
      console.log("Response Data: ", e.response.data);
      res.json(e.response.data);
    } else if (e.request) {
      console.error("No Response: ", e.request);
      res.status(500).json({ error: "Unknown error Occurs" });
    } else {
      console.error("Axios Error: ", e.message);
      res.status(500).json({ error: "Axios error Occurs" });
    }
  }
});

app.get("/tickers/:coin_id", async (req, res) => {
  const { coin_id } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/tickers/${coin_id}`);
    res.json(response.data);
  } catch (e) {
    if (e.response) {
      console.log("Status Code: ", e.response.status);
      console.log("Response Data: ", e.response.data);
      res.json(e.response.data);
    } else if (e.request) {
      console.error("No Response: ", e.request);
      res.status(500).json({ error: "Unknown error Occurs" });
    } else {
      console.error("Axios Error: ", e.message);
      res.status(500).json({ error: "Axios error Occurs" });
    }
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
