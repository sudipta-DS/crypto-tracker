const express = require("express");
const {getCryptoController,postCryptoController} = require("../controllers/cryptoControllers");

const router = express.Router();

router.get("/cryptos", getCryptoController);

router.post("/cryptos",postCryptoController)

module.exports = router;
