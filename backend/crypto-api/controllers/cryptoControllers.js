const client = require("../dbConnect");

const getCryptoController = (req, res) => {
  client.query(`SELECT * FROM cryptos LIMIT 10`, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(result.rows);
    }
  });
};

const postCryptoController = (req, res) => {
  // creating table
  const cryptoTable = `
  CREATE TABLE IF NOT EXISTS cryptos(
    id serial PRIMARY KEY,
    name text NOT NULL,
    last text NOT NULL,
    buy text NOT NULL,
    sell text NOT NULL,
    volume text NOT NULL,
    base_unit text NOT NULL
  );
`;

  client.query(cryptoTable, (err, result) => {
    if (err) {
      console.error("Error creating table", err);
    } else {
      console.log("Table created successfully");
      // wazirX api call and store it into database
      const api_url = "https://api.wazirx.com/api/v2/tickers";

      fetch(api_url, { method: "GET" })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // inserting individual crypto data into "cryptos" table
          for (let crypto in data) {
            const { name, last, buy, sell, volume, base_unit } = data[crypto];

            const insert =
              "INSERT INTO cryptos(name, last,buy, sell, volume, base_unit)" +
              ` VALUES ('${name}','${last}','${buy}','${sell}','${volume}','${base_unit}')`;

            client.query(insert, (err, result) => {
              if (err) {
                console.error("Error inserting data", err);
              } else {
                console.log("Data inserted.");
              }
            });
          }
        });
      // sending response that data inserted successfully
      res.status(201).send({ success: true, message: "Data created." });
    }
  });
};

module.exports = { getCryptoController, postCryptoController };
