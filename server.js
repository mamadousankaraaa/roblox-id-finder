const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Serveur Roblox ID Finder actif !");
});

app.get("/user/:username", async (req, res) => {
    try {
        const response = await fetch(
            "https://users.roblox.com/v1/usernames/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    usernames: [req.params.username],
                    excludeBannedUsers: false
                })
            }
        );

        const data = await response.json();

        if (!data.data || data.data.length === 0) {
            return res.status(404).json({
                error: "Utilisateur introuvable"
            });
        }

        res.json(data.data[0]);

    } catch (err) {
        res.status(500).json({
            error: "Erreur serveur"
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
