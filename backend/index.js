const express = require("express")
require("dotenv").config()

const app = express()

app.use(express.json())

const PORT = 5000

app.listen(process.env.PORT||PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})