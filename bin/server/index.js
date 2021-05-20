"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  APP_PORT
} = process.env;
const app = (0, _express.default)();
app.use(_express.default.static(_path.default.resolve(__dirname, "../../bin/client")));
app.get("/hello", (req, res) => {
  console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
  res.send("Hello, World!");
});
app.listen(APP_PORT, () => console.log(`🚀 Server is listening on port ${APP_PORT}.`));
//# sourceMappingURL=index.js.map