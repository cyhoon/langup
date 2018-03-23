'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaCors = require('koa-cors');

var _koaCors2 = _interopRequireDefault(_koaCors);

var _koaBody = require('koa-body');

var _koaBody2 = _interopRequireDefault(_koaBody);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv2.default.config();

(0, _koaBody2.default)({ multipart: true, strict: false });

var port = process.env.PORT;

var app = new _koa2.default();

var Server = function () {
    function Server(port) {
        _classCallCheck(this, Server);

        this.port = port;
        this.middleware();
    }

    _createClass(Server, [{
        key: 'middleware',
        value: function middleware() {
            app.use(_api2.default.routes()).use(_api2.default.allowedMethods());
        }
    }, {
        key: 'listen',
        value: function listen() {
            var _this = this;

            app.listen(this.port, function () {
                console.log('Server is running on port ' + _this.port);
            });
        }
    }]);

    return Server;
}();

var server = new Server(port).listen();