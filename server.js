const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

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
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Erreur" });
    }
});

app.listen(process.env.PORT || 3000);
