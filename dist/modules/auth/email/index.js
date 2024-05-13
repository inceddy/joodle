"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _module = _interopRequireDefault(require("../../../module"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Functions relating to Moodle's email-based self-registration.
 *
 * This module's function calls may throw errors if self registration is disabled.
 *
 * @since 0.1.0
 * @extends Module
 */
var AuthEmailModule = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(AuthEmailModule, _Module);

  var _super = _createSuper(AuthEmailModule);

  function AuthEmailModule() {
    (0, _classCallCheck2["default"])(this, AuthEmailModule);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(AuthEmailModule, [{
    key: "getSignUpSettings",

    /**
     * Get the sign-up required settings and profile fields.
     *
     * @returns {Promise<SignUpSettingsResponse>} The response returned by Moodle.
     *
     * @since 0.1.0
     * @async
     */
    value: function () {
      var _getSignUpSettings = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.client.invoke("auth_email_get_signup_settings");

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSignUpSettings() {
        return _getSignUpSettings.apply(this, arguments);
      }

      return getSignUpSettings;
    }()
    /**
     * Adds a new user to the site (pending user confirmation).
     *
     * @param {SignUpUser} user The user to sign up.
     *
     * @returns {Promise<SignUpUserResponse>} The response returned by Moodle.
     *
     * @since 0.1.0
     * @async
     */

  }, {
    key: "signUpUser",
    value: function () {
      var _signUpUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(user) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.client.invoke("auth_email_signup_user", _objectSpread({}, user));

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function signUpUser(_x) {
        return _signUpUser.apply(this, arguments);
      }

      return signUpUser;
    }()
  }]);
  return AuthEmailModule;
}(_module["default"]);

exports["default"] = AuthEmailModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2F1dGgvZW1haWwvaW5kZXgudHMiXSwibmFtZXMiOlsiQXV0aEVtYWlsTW9kdWxlIiwiY2xpZW50IiwiaW52b2tlIiwidXNlciIsIk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNxQkEsZTs7Ozs7Ozs7Ozs7OztBQUNuQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozt1QkFFa0IsS0FBS0MsTUFBTCxDQUFZQyxNQUFaLENBQ1osZ0NBRFksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7d0hBQzBCQyxJOzs7Ozs7dUJBQ1IsS0FBS0YsTUFBTCxDQUFZQyxNQUFaLENBQW1CLHdCQUFuQixvQkFDVEMsSUFEUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExQjJCQyxrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHZ1ZXByZXNzXG4gKiAtLS1cbiAqIHRpdGxlOiBhdXRoLmVtYWlsXG4gKiAtLS1cbiAqL1xuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlXCI7XG5pbXBvcnQgeyBTaWduVXBTZXR0aW5nc1Jlc3BvbnNlIH0gZnJvbSBcIi4vc2lnbi11cC1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgU2lnblVwVXNlciwgU2lnblVwVXNlclJlc3BvbnNlIH0gZnJvbSBcIi4vc2lnbi11cC11c2VyXCI7XG5cbi8qKlxuICogRnVuY3Rpb25zIHJlbGF0aW5nIHRvIE1vb2RsZSdzIGVtYWlsLWJhc2VkIHNlbGYtcmVnaXN0cmF0aW9uLlxuICpcbiAqIFRoaXMgbW9kdWxlJ3MgZnVuY3Rpb24gY2FsbHMgbWF5IHRocm93IGVycm9ycyBpZiBzZWxmIHJlZ2lzdHJhdGlvbiBpcyBkaXNhYmxlZC5cbiAqXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBleHRlbmRzIE1vZHVsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoRW1haWxNb2R1bGUgZXh0ZW5kcyBNb2R1bGUge1xuICAvKipcbiAgICogR2V0IHRoZSBzaWduLXVwIHJlcXVpcmVkIHNldHRpbmdzIGFuZCBwcm9maWxlIGZpZWxkcy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8U2lnblVwU2V0dGluZ3NSZXNwb25zZT59IFRoZSByZXNwb25zZSByZXR1cm5lZCBieSBNb29kbGUuXG4gICAqXG4gICAqIEBzaW5jZSAwLjEuMFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyBnZXRTaWduVXBTZXR0aW5ncygpOiBQcm9taXNlPFNpZ25VcFNldHRpbmdzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuY2xpZW50Lmludm9rZShcbiAgICAgIFwiYXV0aF9lbWFpbF9nZXRfc2lnbnVwX3NldHRpbmdzXCJcbiAgICApKSBhcyBTaWduVXBTZXR0aW5nc1Jlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgdXNlciB0byB0aGUgc2l0ZSAocGVuZGluZyB1c2VyIGNvbmZpcm1hdGlvbikuXG4gICAqXG4gICAqIEBwYXJhbSB7U2lnblVwVXNlcn0gdXNlciBUaGUgdXNlciB0byBzaWduIHVwLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTaWduVXBVc2VyUmVzcG9uc2U+fSBUaGUgcmVzcG9uc2UgcmV0dXJuZWQgYnkgTW9vZGxlLlxuICAgKlxuICAgKiBAc2luY2UgMC4xLjBcbiAgICogQGFzeW5jXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2lnblVwVXNlcih1c2VyOiBTaWduVXBVc2VyKTogUHJvbWlzZTxTaWduVXBVc2VyUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuY2xpZW50Lmludm9rZShcImF1dGhfZW1haWxfc2lnbnVwX3VzZXJcIiwge1xuICAgICAgLi4udXNlcixcbiAgICB9KSkgYXMgU2lnblVwVXNlclJlc3BvbnNlO1xuICB9XG59XG4iXX0=