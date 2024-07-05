const express = require("express");
const client = require("./dbConnect");
const cryptoRoutes = require("./routes/cryptoRoutes");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use("/api/v1", cryptoRoutes);

client
  .connect()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database", err);
  });

app.listen(PORT, () => {
  console.log("server connected successfully.");
});
