// Importation des modules
const express = require("express")
const path = require("path")
const sendMail = require("../utils/sendmail")

// Documentation nodemailer: https://nodemailer.com/about/

// Initialisation des variables
const port = 3000
const publicFolder = path.join(__dirname, "../public/")
console.log(publicFolder)

// Création du serveur
const app = express()

// Définission des routes
app.get("/", (req, res) => {
	res.sendFile(publicFolder + "contact.html")
	// res.send("<h1>Envoyer un mail avec Node.js</h1>")
})

app.post("/contact", (req, res) => {
	sendMail()
	res.send("ok")
})

// Lancement du serveur
app.listen(port, () => {
	console.log(`Serveur lancé: http://localhost:${port}`)
})