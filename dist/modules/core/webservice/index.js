"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _module = _interopRequireDefault(require("../../../module"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Functions relating to system actions.
 *
 * @since 0.2.0
 * @extends Module
 */
var WebServiceModule = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(WebServiceModule, _Module);

  var _super = _createSuper(WebServiceModule);

  function WebServiceModule() {
    (0, _classCallCheck2["default"])(this, WebServiceModule);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(WebServiceModule, [{
    key: "getSiteInfo",

    /**
     * Returns information about the Moodle site and the Web Services API. This function's response also contains
     * information relating to the web service user, such as capabilities and authorized API actions.
     *
     * @returns {Promise<SiteInfoResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */
    value: function () {
      var _getSiteInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.client.invoke("core_webservice_get_site_info");

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSiteInfo() {
        return _getSiteInfo.apply(this, arguments);
      }

      return getSiteInfo;
    }()
  }]);
  return WebServiceModule;
}(_module["default"]);

exports["default"] = WebServiceModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvcmUvd2Vic2VydmljZS9pbmRleC50cyJdLCJuYW1lcyI6WyJXZWJTZXJ2aWNlTW9kdWxlIiwiY2xpZW50IiwiaW52b2tlIiwiTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDcUJBLGdCOzs7Ozs7Ozs7Ozs7O0FBQ25CO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7dUJBRWtCLEtBQUtDLE1BQUwsQ0FBWUMsTUFBWixDQUNaLCtCQURZLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVg0QkMsa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB2dWVwcmVzc1xuICogLS0tXG4gKiB0aXRsZTogY29yZS53ZWJzZXJ2aWNlXG4gKiAtLS1cbiAqL1xuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlXCI7XG5pbXBvcnQgeyBTaXRlSW5mb1Jlc3BvbnNlIH0gZnJvbSBcIi4vZ2V0LXNpdGUtaW5mb1wiO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyByZWxhdGluZyB0byBzeXN0ZW0gYWN0aW9ucy5cbiAqXG4gKiBAc2luY2UgMC4yLjBcbiAqIEBleHRlbmRzIE1vZHVsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJTZXJ2aWNlTW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgLyoqXG4gICAqIFJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIE1vb2RsZSBzaXRlIGFuZCB0aGUgV2ViIFNlcnZpY2VzIEFQSS4gVGhpcyBmdW5jdGlvbidzIHJlc3BvbnNlIGFsc28gY29udGFpbnNcbiAgICogaW5mb3JtYXRpb24gcmVsYXRpbmcgdG8gdGhlIHdlYiBzZXJ2aWNlIHVzZXIsIHN1Y2ggYXMgY2FwYWJpbGl0aWVzIGFuZCBhdXRob3JpemVkIEFQSSBhY3Rpb25zLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTaXRlSW5mb1Jlc3BvbnNlPn0gVGhlIHJlc3BvbnNlIHJldHVybmVkIGJ5IE1vb2RsZS5cbiAgICpcbiAgICogQHNpbmNlIDAuMi4wXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldFNpdGVJbmZvKCk6IFByb21pc2U8U2l0ZUluZm9SZXNwb25zZT4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5jbGllbnQuaW52b2tlKFxuICAgICAgXCJjb3JlX3dlYnNlcnZpY2VfZ2V0X3NpdGVfaW5mb1wiXG4gICAgKSkgYXMgU2l0ZUluZm9SZXNwb25zZTtcbiAgfVxufVxuIl19