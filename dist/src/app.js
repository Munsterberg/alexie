'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cookieSession = require('cookie-session');

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _keys = require('../config/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./models/User');
require('./auth/passport');

_mongoose2.default.connect(_keys2.default.mongoURI);

var app = (0, _express2.default)();

app.use((0, _cookieSession2.default)({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [_keys2.default.cookieKey]
}));
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

app.use('/', _index2.default);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Server running on ' + PORT);
});