
document.querySelector("button").addEventListener("click", function() {
    alert("Download started!");
});
/* Node.js Server (server.js) */
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
/* script.js */
