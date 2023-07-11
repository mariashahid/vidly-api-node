const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();

const path = require("path");
process.env["NODE_CONFIG_DIR"] = path.join(path.resolve("./"), "config/");

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/config")();
require("./startup/db")();
require("./startup/validation")();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
