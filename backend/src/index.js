

const routes = require('./routes');
const express = require('express');
const app = express();

app.use(express.json());

app.use(routes);
//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));

