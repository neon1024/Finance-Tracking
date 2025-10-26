const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("Backend for the Finance Tracking App");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
