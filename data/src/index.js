const express = require('express');
const userConfigRoutes = require("./routes/userConfigRoutes");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors());
app.use("/config", userConfigRoutes);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("<h1>Hello Dan</h1>");
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${[port]}`);
});

