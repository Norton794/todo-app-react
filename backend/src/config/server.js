const PORT = 3003;

const express = require("express");
const server = express();
const allowCors = require('./cors')

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(allowCors)

server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

module.exports = server