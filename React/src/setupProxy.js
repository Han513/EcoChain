const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/Flask", { target: "http://localhost:5000/" }));
  app.use(proxy("/api", { target: "http://localhost:3001/" }));
};
