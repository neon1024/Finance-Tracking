require("dotenv").config();

var express = require("express");
var cors = require("cors");
var app = express();
var port = process.env.PORT || 3000;

// include trusted origins for production
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
    response.send("Backend for the Finance Tracking App");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
