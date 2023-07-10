const config = require("config");

module.exports = function () {
  console.error("config", config);
  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined.");
  }
};
