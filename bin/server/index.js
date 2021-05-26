"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _config = require("./database/config");

var _handleLeaves = require("./helpers/handleLeaves");

require('dotenv').config();

const PORT = process.env.APP_PORT;
const app = (0, _express.default)();
(0, _config.dbConnection)();
app.use(_express.default.static(_path.default.resolve(__dirname, "../../bin/client")));
app.use(_express.default.json());
setInterval(_handleLeaves.sendLeaves, 1000 * 60 * 15);
setInterval(_handleLeaves.removeLeaves, 1000 * 60 * 60);
app.use("/api/users", require("./routes/UsersRoutes"));
app.use("/api/trees", require("./routes/TreesRoutes"));
app.get('/*', function (req, res) {
  res.sendFile(_path.default.join(__dirname, '../../bin/client/'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(PORT, () => console.log(`🚀 Server is listening on port ${PORT}.`));
//# sourceMappingURL=index.js.map