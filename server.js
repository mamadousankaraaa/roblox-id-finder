const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Serveur Roblox ID Finder actif !");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Serveur lancé");
});
