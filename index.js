var atatus = require("atatus-node");
atatus.start({ apiKey: "API_KEY" });

module.exports = require('./server.js');