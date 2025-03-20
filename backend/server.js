const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // JSON-Daten verarbeiten

// MySQL-Verbindung
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Standard-User bei XAMPP
  password: "", // Standard-Passwort ist leer
  database: "ks-eventplaner",
});

db.connect((err) => {
  if (err) {
    console.error("Fehler bei der Datenbankverbindung: ", err);
  } else {
    console.log("Verbunden mit MySQL");
  }
});

// Beispiel: Alle Daten aus einer Tabelle abrufen
app.get("/api/daten", (req, res) => {
  db.query("SELECT * FROM kindof", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Server starten
app.listen(3000, () => {
  console.log("Server läuft auf Port 3000");
});
