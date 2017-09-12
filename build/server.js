module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:6060/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 2 */
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 3 */
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 4 */
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 5 */
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 6 */
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 7 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 9 */
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    //静态资源服务
    "client": {
        "host": "http://localhost",
        "port": 6060
    },
    //同构服务
    "server": {
        "host": "http://localhost",
        "port": 8080
    }
};

/***/ }),
/* 10 */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
/*!******************************************************!*\
  !*** external "babel-runtime/core-js/object/assign" ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 12 */
/*!************************************!*\
  !*** ./client/store/init-state.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var initState = {
    data: 0
};

exports.default = initState;

/***/ }),
/* 13 */
/*!***********************************!*\
  !*** ./admin/store/init-state.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var initState = {
    data: 0
};

exports.default = initState;

/***/ }),
/* 14 */
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (parameters) {

    app.use((0, _koaViews2.default)(_path2.default.resolve(rootDir), { map: { html: 'nunjucks' } }));

    app.use((0, _koaStatic2.default)('.'));

    app.use(_isomorphicRouter2.default);

    app.use(__webpack_require__(/*! webpack-dev-middleware */ 15)(compiler, webpackDevMiddlewareConfig));
    app.use(__webpack_require__(/*! webpack-hot-middleware */ 16)(compiler));

    app.listen(port, function () {
        console.log('服务器运行-端口：' + port);
    });
};

var _koa = __webpack_require__(/*! koa */ 17);

var _koa2 = _interopRequireDefault(_koa);

var _path = __webpack_require__(/*! path */ 7);

var _path2 = _interopRequireDefault(_path);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _koaViews = __webpack_require__(/*! koa-views */ 18);

var _koaViews2 = _interopRequireDefault(_koaViews);

var _webpack = __webpack_require__(/*! webpack */ 8);

var _webpack2 = _interopRequireDefault(_webpack);

var _koaStatic = __webpack_require__(/*! koa-static */ 19);

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _config = __webpack_require__(/*! ./config/config */ 9);

var _config2 = _interopRequireDefault(_config);

var _webpack3 = __webpack_require__(/*! ./webpack/webpack.config */ 20);

var _webpack4 = _interopRequireDefault(_webpack3);

var _isomorphicRouter = __webpack_require__(/*! ./router/isomorphic-router */ 23);

var _isomorphicRouter2 = _interopRequireDefault(_isomorphicRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootDir = _path2.default.resolve(__dirname, '..');
var compiler = (0, _webpack2.default)(_webpack4.default);
var port = _config2.default.server.port;
var app = new _koa2.default();

var webpackDevMiddlewareConfig = {
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: _webpack4.default.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true }
};

/***/ }),
/* 15 */
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 16 */
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 17 */
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 18 */
/*!****************************!*\
  !*** external "koa-views" ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("koa-views");

/***/ }),
/* 19 */
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 20 */
/*!***********************************!*\
  !*** ./webpack/webpack.config.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ 7);
var webpack = __webpack_require__(/*! webpack */ 8);
var autoPrefix = __webpack_require__(/*! autoprefixer */ 21);
var postCssImport = __webpack_require__(/*! postcss-import */ 22);

var rootDir = path.resolve(__dirname, '..');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        'server-side': './admin/index.js',
        'client-side': './client/index.js'
    },
    output: {
        'path': path.resolve(rootDir, 'build/'),
        'publicPath': "build/",
        'filename': '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015']
                }
            }]
        }, {
            test: /\.(png|jpg|jpeg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'images/'
                }
            }]
        }, {
            test: /\.(css|less)$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    modules: true
                }
            }, {
                loader: "postcss-loader",
                options: {
                    plugins: function plugins(loader) {
                        return [autoPrefix({ browsers: ['last 5 versions'] }), postCssImport()];
                    }
                }
            }, {
                loader: "less-loader"
            }]
        }, {
            test: /\.(woff|svg|eot|ttf)$/,
            use: [{
                loader: 'url-loader',
                query: {
                    limit: 10000
                }
            }]
        }]
    },
    plugins: []
};

/***/ }),
/* 21 */
/*!*******************************!*\
  !*** external "autoprefixer" ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("autoprefixer");

/***/ }),
/* 22 */
/*!*********************************!*\
  !*** external "postcss-import" ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("postcss-import");

/***/ }),
/* 23 */
/*!*************************************!*\
  !*** ./router/isomorphic-router.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ 24);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ 25);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var router = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
        var matchResult, scriptTemplate, routes, store, pathArr;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        matchResult = {}, scriptTemplate = void 0, routes = void 0, store = void 0;
                        pathArr = ctx.path.substring(1).split('/');


                        if (pathArr[0] === 'admin') {
                            routes = _adminRoutes2.default;
                            store = _store4.default;
                        } else {
                            routes = _clientRoutes2.default;
                            store = _store2.default;
                        }

                        if (process.env.NODE_ENV === 'development') {
                            scriptTemplate = '<script src="' + _config2.default.client.host + ':' + _config2.default.client.port + '/build/server-side.bundle.js"></script>';
                        } else {
                            scriptTemplate = '<script src="build/server-side.bundle.js"></script>';
                        }

                        (0, _reactRouter.match)({ routes: routes, location: ctx.url }, function (error, redirectLocation, renderProps) {

                            matchResult = { error: error, redirectLocation: redirectLocation, renderProps: renderProps };
                        });

                        if (!matchResult.error) {
                            _context.next = 9;
                            break;
                        }

                        console.log(matchResult.error.message);

                        _context.next = 19;
                        break;

                    case 9:
                        if (!matchResult.redirectLocation) {
                            _context.next = 13;
                            break;
                        }

                        console.log(matchResult.redirectLocation.pathname + matchResult.redirectLocation.search);

                        _context.next = 19;
                        break;

                    case 13:
                        if (!matchResult.renderProps) {
                            _context.next = 18;
                            break;
                        }

                        _context.next = 16;
                        return ctx.render('views/index', {
                            content: (0, _server.renderToString)(_react2.default.createElement(
                                _reactRedux.Provider,
                                { store: store },
                                _react2.default.createElement(_reactRouter.RouterContext, matchResult.renderProps)
                            )),
                            script: scriptTemplate,
                            state: store.getState()
                        });

                    case 16:
                        _context.next = 19;
                        break;

                    case 18:

                        console.log('Not found');

                    case 19:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function router(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ 26);

var _reactRouter = __webpack_require__(/*! react-router */ 6);

var _reactRedux = __webpack_require__(/*! react-redux */ 27);

var _adminRoutes = __webpack_require__(/*! ./admin-routes */ 28);

var _adminRoutes2 = _interopRequireDefault(_adminRoutes);

var _clientRoutes = __webpack_require__(/*! ./client-routes */ 35);

var _clientRoutes2 = _interopRequireDefault(_clientRoutes);

var _store = __webpack_require__(/*! ../client/store/store */ 37);

var _store2 = _interopRequireDefault(_store);

var _store3 = __webpack_require__(/*! ../admin/store/store */ 39);

var _store4 = _interopRequireDefault(_store3);

var _config = __webpack_require__(/*! ../config/config */ 9);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = router;

/***/ }),
/* 24 */
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 25 */
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 26 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 27 */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 28 */
/*!********************************!*\
  !*** ./router/admin-routes.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ 6);

var _App = __webpack_require__(/*! ../views/admin/App.jsx */ 29);

var _App2 = _interopRequireDefault(_App);

var _Index = __webpack_require__(/*! ../views/admin/Index.jsx */ 30);

var _Index2 = _interopRequireDefault(_Index);

var _Other = __webpack_require__(/*! ../views/admin/Other.jsx */ 34);

var _Other2 = _interopRequireDefault(_Other);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/admin', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Index2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'other', component: _Other2.default })
);

exports.default = routes;

/***/ }),
/* 29 */
/*!*****************************!*\
  !*** ./views/admin/App.jsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);
    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 30 */
/*!*******************************!*\
  !*** ./views/admin/Index.jsx ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(/*! ../../public/less/app.less */ 31);

var _app2 = _interopRequireDefault(_app);

var _helloWorld = __webpack_require__(/*! ../../public/images/hello-world.jpg */ 32);

var _helloWorld2 = _interopRequireDefault(_helloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_React$Component) {
    (0, _inherits3.default)(Index, _React$Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);
        return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
    }

    (0, _createClass3.default)(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    { className: _app2.default.article },
                    'Hello World'
                ),
                _react2.default.createElement('img', { src: _helloWorld2.default, alt: 'hello-world', className: _app2.default.picture })
            );
        }
    }]);
    return Index;
}(_react2.default.Component);

exports.default = Index;

/***/ }),
/* 31 */
/*!******************************!*\
  !*** ./public/less/app.less ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {
	"article": "_3NEp5tIDKvmtKZuohWIlMZ",
	"picture": "_2cCJUjDjlkscaGNJjzIcw5"
};

/***/ }),
/* 32 */
/*!***************************************!*\
  !*** ./public/images/hello-world.jpg ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4db9da2cadf8bd7b48e8121736422dfa.jpg";

/***/ }),
/* 33 */,
/* 34 */
/*!*******************************!*\
  !*** ./views/admin/Other.jsx ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Other = function (_React$Component) {
    (0, _inherits3.default)(Other, _React$Component);

    function Other() {
        (0, _classCallCheck3.default)(this, Other);
        return (0, _possibleConstructorReturn3.default)(this, (Other.__proto__ || (0, _getPrototypeOf2.default)(Other)).apply(this, arguments));
    }

    (0, _createClass3.default)(Other, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                '\u5176\u4ED6\u9875\u9762'
            );
        }
    }]);
    return Other;
}(_react2.default.Component);

exports.default = Other;

/***/ }),
/* 35 */
/*!*********************************!*\
  !*** ./router/client-routes.js ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(/*! react-router */ 6);

var _App = __webpack_require__(/*! ../views/client/App.jsx */ 36);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default });

exports.default = routes;

/***/ }),
/* 36 */
/*!******************************!*\
  !*** ./views/client/App.jsx ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 3);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Client\u9875\u9762'
            );
        }
    }]);
    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 37 */
/*!*******************************!*\
  !*** ./client/store/store.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ 10);

var _reducer = __webpack_require__(/*! ../reducer/reducer */ 38);

var _reducer2 = _interopRequireDefault(_reducer);

var _initState = __webpack_require__(/*! ./init-state */ 12);

var _initState2 = _interopRequireDefault(_initState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default, _initState2.default);

exports.default = store;

/***/ }),
/* 38 */
/*!***********************************!*\
  !*** ./client/reducer/reducer.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 11);

var _assign2 = _interopRequireDefault(_assign);

var _initState = __webpack_require__(/*! ../store/init-state */ 12);

var _initState2 = _interopRequireDefault(_initState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initState2.default;
    var action = arguments[1];

    switch (action.type) {
        case 'TEST':
            var newState = state;
            newState.data = state.data + 1;
            return (0, _assign2.default)({}, state, newState);
        default:
            return state;
    }
}; /*
    * Javascript Document
    * Creat by Nelson on 2017/7/11
    * 
    * Website:https://segmentfault.com/u/nelson2016
    * 
    * QQ:616859570
    * Email:Nelson_Lee@outlook.com
    * */
exports.default = reducer;

/***/ }),
/* 39 */
/*!******************************!*\
  !*** ./admin/store/store.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ 10);

var _reducer = __webpack_require__(/*! ../reducer/reducer */ 40);

var _reducer2 = _interopRequireDefault(_reducer);

var _initState = __webpack_require__(/*! ./init-state */ 13);

var _initState2 = _interopRequireDefault(_initState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default, _initState2.default);

exports.default = store;

/***/ }),
/* 40 */
/*!**********************************!*\
  !*** ./admin/reducer/reducer.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 11);

var _assign2 = _interopRequireDefault(_assign);

var _initState = __webpack_require__(/*! ../store/init-state */ 13);

var _initState2 = _interopRequireDefault(_initState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initState2.default;
    var action = arguments[1];

    switch (action.type) {
        case 'TEST':
            var newState = state;
            newState.data = state.data + 1;
            return (0, _assign2.default)({}, state, newState);
        default:
            return state;
    }
}; /*
    * Javascript Document
    * Creat by Nelson on 2017/7/11
    * 
    * Website:https://segmentfault.com/u/nelson2016
    * 
    * QQ:616859570
    * Email:Nelson_Lee@outlook.com
    * */
exports.default = reducer;

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map