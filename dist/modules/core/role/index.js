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
 * Functions for assigning and unassigning user roles.
 *
 * @since 0.2.1
 * @extends Module
 */
var RoleModule = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(RoleModule, _Module);

  var _super = _createSuper(RoleModule);

  function RoleModule() {
    (0, _classCallCheck2["default"])(this, RoleModule);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(RoleModule, [{
    key: "assignRoles",

    /**
     * Assigns roles to users.
     *
     * @param {RoleAssignment[]} assignments The roles to assign to users.
     *
     * @returns {Promise<FunctionResponse>} The response returned by Moodle.
     *
     * @since 0.2.1
     * @async
     */
    value: function () {
      var _assignRoles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _len,
            assignments,
            _key,
            _args = arguments;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (_len = _args.length, assignments = new Array(_len), _key = 0; _key < _len; _key++) {
                  assignments[_key] = _args[_key];
                }

                _context.next = 3;
                return this.client.invoke("core_role_assign_roles", {
                  assignments: assignments
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function assignRoles() {
        return _assignRoles.apply(this, arguments);
      }

      return assignRoles;
    }()
    /**
     * Unassigns roles from users.
     *
     * @param {RoleAssignment[]} unassignments The roles to unassign from users.
     *
     * @returns {Promise<FunctionResponse>} The response returned by Moodle.
     *
     * @since 0.2.1
     * @async
     */

  }, {
    key: "unassignRoles",
    value: function () {
      var _unassignRoles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _len2,
            unassignments,
            _key2,
            _args2 = arguments;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len2 = _args2.length, unassignments = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  unassignments[_key2] = _args2[_key2];
                }

                _context2.next = 3;
                return this.client.invoke("core_role_unassign_roles", {
                  unassignments: unassignments
                });

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function unassignRoles() {
        return _unassignRoles.apply(this, arguments);
      }

      return unassignRoles;
    }()
  }]);
  return RoleModule;
}(_module["default"]);

exports["default"] = RoleModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvcmUvcm9sZS9pbmRleC50cyJdLCJuYW1lcyI6WyJSb2xlTW9kdWxlIiwiYXNzaWdubWVudHMiLCJjbGllbnQiLCJpbnZva2UiLCJ1bmFzc2lnbm1lbnRzIiwiTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7Ozs7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7O0FBQ25CO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7MENBRU9DLFc7QUFBQUEsa0JBQUFBLFc7Ozs7dUJBRVcsS0FBS0MsTUFBTCxDQUFZQyxNQUFaLENBQW1CLHdCQUFuQixFQUE2QztBQUN6REYsa0JBQUFBLFdBQVcsRUFBWEE7QUFEeUQsaUJBQTdDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FFT0csYTtBQUFBQSxrQkFBQUEsYTs7Ozt1QkFFVyxLQUFLRixNQUFMLENBQVlDLE1BQVosQ0FBbUIsMEJBQW5CLEVBQStDO0FBQzNEQyxrQkFBQUEsYUFBYSxFQUFiQTtBQUQyRCxpQkFBL0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaENzQkMsa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB2dWVwcmVzc1xuICogLS0tXG4gKiB0aXRsZTogY29yZS5yb2xlXG4gKiAtLS1cbiAqL1xuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlXCI7XG5pbXBvcnQgeyBGdW5jdGlvblJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uLy4uL2Z1bmN0aW9uc1wiO1xuXG5pbnRlcmZhY2UgUm9sZUFzc2lnbm1lbnQge1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSByb2xlIHRvIGFzc2lnbiB0byB0aGUgdXNlci5cbiAgICovXG4gIHJvbGVpZDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIHVzZXIgdG8gYXNzaWduIHRoZSByb2xlIHRvLlxuICAgKi9cbiAgdXNlcmlkOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZXh0IHRvIGFzc2lnbiB0aGUgdXNlciByb2xlIGluLlxuICAgKi9cbiAgY29udGV4dGlkPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgY29udGV4dCBsZXZlbCB0byBhc3NpZ24gdGhlIHVzZXIgcm9sZSBpbi5cbiAgICovXG4gIGNvbnRleHRsZXZlbD86XG4gICAgfCBcImJsb2NrXCJcbiAgICB8IFwiY291cnNlXCJcbiAgICB8IFwiY291cnNlY2F0XCJcbiAgICB8IFwic3lzdGVtXCJcbiAgICB8IFwidXNlclwiXG4gICAgfCBcIm1vZHVsZVwiO1xuXG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlIHdoZXJlIHRoZSByb2xlIG5lZWRzIHRvIGJlIGFzc2lnbmVkLlxuICAgKi9cbiAgaW5zdGFuY2VpZD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbnMgZm9yIGFzc2lnbmluZyBhbmQgdW5hc3NpZ25pbmcgdXNlciByb2xlcy5cbiAqXG4gKiBAc2luY2UgMC4yLjFcbiAqIEBleHRlbmRzIE1vZHVsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xlTW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgLyoqXG4gICAqIEFzc2lnbnMgcm9sZXMgdG8gdXNlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7Um9sZUFzc2lnbm1lbnRbXX0gYXNzaWdubWVudHMgVGhlIHJvbGVzIHRvIGFzc2lnbiB0byB1c2Vycy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8RnVuY3Rpb25SZXNwb25zZT59IFRoZSByZXNwb25zZSByZXR1cm5lZCBieSBNb29kbGUuXG4gICAqXG4gICAqIEBzaW5jZSAwLjIuMVxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyBhc3NpZ25Sb2xlcyhcbiAgICAuLi5hc3NpZ25tZW50czogUm9sZUFzc2lnbm1lbnRbXVxuICApOiBQcm9taXNlPEZ1bmN0aW9uUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuY2xpZW50Lmludm9rZShcImNvcmVfcm9sZV9hc3NpZ25fcm9sZXNcIiwge1xuICAgICAgYXNzaWdubWVudHMsXG4gICAgfSkpIGFzIEZ1bmN0aW9uUmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogVW5hc3NpZ25zIHJvbGVzIGZyb20gdXNlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7Um9sZUFzc2lnbm1lbnRbXX0gdW5hc3NpZ25tZW50cyBUaGUgcm9sZXMgdG8gdW5hc3NpZ24gZnJvbSB1c2Vycy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8RnVuY3Rpb25SZXNwb25zZT59IFRoZSByZXNwb25zZSByZXR1cm5lZCBieSBNb29kbGUuXG4gICAqXG4gICAqIEBzaW5jZSAwLjIuMVxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyB1bmFzc2lnblJvbGVzKFxuICAgIC4uLnVuYXNzaWdubWVudHM6IFJvbGVBc3NpZ25tZW50W11cbiAgKTogUHJvbWlzZTxGdW5jdGlvblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmNsaWVudC5pbnZva2UoXCJjb3JlX3JvbGVfdW5hc3NpZ25fcm9sZXNcIiwge1xuICAgICAgdW5hc3NpZ25tZW50cyxcbiAgICB9KSkgYXMgRnVuY3Rpb25SZXNwb25zZTtcbiAgfVxufVxuIl19