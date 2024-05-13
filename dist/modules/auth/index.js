"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _module = _interopRequireDefault(require("../../module"));

var _email = _interopRequireDefault(require("./email"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Functions relating to authentication in Moodle (specifically self-registration).
 *
 * @since 0.1.0
 * @extends Module
 */
var AuthModule = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(AuthModule, _Module);

  var _super = _createSuper(AuthModule);

  /**
   * The module containing functions relating to Moodle's email-based self-registration.
   *
   * @since 0.1.0
   */

  /**
   * Initializes the module.
   *
   * @param {Client} client The parent client of this module.
   *
   * @since 0.1.0
   */
  function AuthModule(client) {
    var _this;

    (0, _classCallCheck2["default"])(this, AuthModule);
    _this = _super.call(this, client);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "email", void 0);
    _this.email = new _email["default"](client);
    return _this;
  }

  return AuthModule;
}(_module["default"]);

exports["default"] = AuthModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2F1dGgvaW5kZXgudHMiXSwibmFtZXMiOlsiQXV0aE1vZHVsZSIsImNsaWVudCIsImVtYWlsIiwiQXV0aEVtYWlsTW9kdWxlIiwiTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ3FCQSxVOzs7OztBQUNuQjtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Usc0JBQW1CQyxNQUFuQixFQUFtQztBQUFBOztBQUFBO0FBQ2pDLDhCQUFNQSxNQUFOO0FBRGlDO0FBRWpDLFVBQUtDLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFvQkYsTUFBcEIsQ0FBYjtBQUZpQztBQUdsQzs7O0VBbEJxQ0csa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB2dWVwcmVzc1xuICogLS0tXG4gKiB0aXRsZTogYXV0aFxuICogLS0tXG4gKi9cbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4uLy4uL21vZHVsZVwiO1xuaW1wb3J0IEF1dGhFbWFpbE1vZHVsZSBmcm9tIFwiLi9lbWFpbFwiO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyByZWxhdGluZyB0byBhdXRoZW50aWNhdGlvbiBpbiBNb29kbGUgKHNwZWNpZmljYWxseSBzZWxmLXJlZ2lzdHJhdGlvbikuXG4gKlxuICogQHNpbmNlIDAuMS4wXG4gKiBAZXh0ZW5kcyBNb2R1bGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aE1vZHVsZSBleHRlbmRzIE1vZHVsZSB7XG4gIC8qKlxuICAgKiBUaGUgbW9kdWxlIGNvbnRhaW5pbmcgZnVuY3Rpb25zIHJlbGF0aW5nIHRvIE1vb2RsZSdzIGVtYWlsLWJhc2VkIHNlbGYtcmVnaXN0cmF0aW9uLlxuICAgKlxuICAgKiBAc2luY2UgMC4xLjBcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBlbWFpbDogQXV0aEVtYWlsTW9kdWxlO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgbW9kdWxlLlxuICAgKlxuICAgKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50IFRoZSBwYXJlbnQgY2xpZW50IG9mIHRoaXMgbW9kdWxlLlxuICAgKlxuICAgKiBAc2luY2UgMC4xLjBcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihjbGllbnQ6IENsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudCk7XG4gICAgdGhpcy5lbWFpbCA9IG5ldyBBdXRoRW1haWxNb2R1bGUoY2xpZW50KTtcbiAgfVxufVxuIl19