const config = require("config");

module.exports = function () {
  console.error("config", config);
  if (!config.has("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
  }
};
