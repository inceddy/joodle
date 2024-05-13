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
 * Functions for user grades-related actions.
 *
 * @since 0.2.2
 * @extends Module
 */
var UserModule = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(UserModule, _Module);

  var _super = _createSuper(UserModule);

  function UserModule() {
    (0, _classCallCheck2["default"])(this, UserModule);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(UserModule, [{
    key: "getGradeItems",

    /**
     * Returns the complete list of grade items for users in a course.
     *
     * Leaving the `user` and `group` parameters undefined will load the grade items for all users in the course.
     *
     * @param {number} course  The ID of the course to obtain grade items for.
     * @param {number} [user]  The ID of the user to obtain grade items for.
     * @param {number} [group] The ID of the group to obtain grade items for.
     *
     * @returns {Promise<GetGradeItemsResponse>} The response returned by Moodle.
     *
     * @since 0.2.2
     * @async
     */
    value: function () {
      var _getGradeItems = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(course, user, group) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.client.invoke("gradereport_user_get_grade_items", {
                  courseid: course,
                  userid: user === undefined ? 0 : user,
                  groupid: group === undefined ? 0 : group
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getGradeItems(_x, _x2, _x3) {
        return _getGradeItems.apply(this, arguments);
      }

      return getGradeItems;
    }()
  }]);
  return UserModule;
}(_module["default"]);

exports["default"] = UserModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2dyYWRlcmVwb3J0L3VzZXIvaW5kZXgudHMiXSwibmFtZXMiOlsiVXNlck1vZHVsZSIsImNvdXJzZSIsInVzZXIiLCJncm91cCIsImNsaWVudCIsImludm9rZSIsImNvdXJzZWlkIiwidXNlcmlkIiwidW5kZWZpbmVkIiwiZ3JvdXBpZCIsIk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7O0FBQ25CO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzBIQUVJQyxNLEVBQ0FDLEksRUFDQUMsSzs7Ozs7O3VCQUVjLEtBQUtDLE1BQUwsQ0FBWUMsTUFBWixDQUFtQixrQ0FBbkIsRUFBdUQ7QUFDbkVDLGtCQUFBQSxRQUFRLEVBQUVMLE1BRHlEO0FBRW5FTSxrQkFBQUEsTUFBTSxFQUFFTCxJQUFJLEtBQUtNLFNBQVQsR0FBcUIsQ0FBckIsR0FBeUJOLElBRmtDO0FBR25FTyxrQkFBQUEsT0FBTyxFQUFFTixLQUFLLEtBQUtLLFNBQVYsR0FBc0IsQ0FBdEIsR0FBMEJMO0FBSGdDLGlCQUF2RCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwQnNCTyxrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHZ1ZXByZXNzXG4gKiAtLS1cbiAqIHRpdGxlOiBncmFkZXJlcG9ydC51c2VyXG4gKiAtLS1cbiAqL1xuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlXCI7XG5pbXBvcnQgeyBHZXRHcmFkZUl0ZW1zUmVzcG9uc2UgfSBmcm9tIFwiLi9nZXQtZ3JhZGUtaXRlbXNcIjtcblxuLyoqXG4gKiBGdW5jdGlvbnMgZm9yIHVzZXIgZ3JhZGVzLXJlbGF0ZWQgYWN0aW9ucy5cbiAqXG4gKiBAc2luY2UgMC4yLjJcbiAqIEBleHRlbmRzIE1vZHVsZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyTW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbXBsZXRlIGxpc3Qgb2YgZ3JhZGUgaXRlbXMgZm9yIHVzZXJzIGluIGEgY291cnNlLlxuICAgKlxuICAgKiBMZWF2aW5nIHRoZSBgdXNlcmAgYW5kIGBncm91cGAgcGFyYW1ldGVycyB1bmRlZmluZWQgd2lsbCBsb2FkIHRoZSBncmFkZSBpdGVtcyBmb3IgYWxsIHVzZXJzIGluIHRoZSBjb3Vyc2UuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb3Vyc2UgIFRoZSBJRCBvZiB0aGUgY291cnNlIHRvIG9idGFpbiBncmFkZSBpdGVtcyBmb3IuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdXNlcl0gIFRoZSBJRCBvZiB0aGUgdXNlciB0byBvYnRhaW4gZ3JhZGUgaXRlbXMgZm9yLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2dyb3VwXSBUaGUgSUQgb2YgdGhlIGdyb3VwIHRvIG9idGFpbiBncmFkZSBpdGVtcyBmb3IuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEdldEdyYWRlSXRlbXNSZXNwb25zZT59IFRoZSByZXNwb25zZSByZXR1cm5lZCBieSBNb29kbGUuXG4gICAqXG4gICAqIEBzaW5jZSAwLjIuMlxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyBnZXRHcmFkZUl0ZW1zKFxuICAgIGNvdXJzZTogbnVtYmVyLFxuICAgIHVzZXI/OiBudW1iZXIsXG4gICAgZ3JvdXA/OiBudW1iZXJcbiAgKTogUHJvbWlzZTxHZXRHcmFkZUl0ZW1zUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuY2xpZW50Lmludm9rZShcImdyYWRlcmVwb3J0X3VzZXJfZ2V0X2dyYWRlX2l0ZW1zXCIsIHtcbiAgICAgIGNvdXJzZWlkOiBjb3Vyc2UsXG4gICAgICB1c2VyaWQ6IHVzZXIgPT09IHVuZGVmaW5lZCA/IDAgOiB1c2VyLFxuICAgICAgZ3JvdXBpZDogZ3JvdXAgPT09IHVuZGVmaW5lZCA/IDAgOiBncm91cCxcbiAgICB9KSkgYXMgR2V0R3JhZGVJdGVtc1Jlc3BvbnNlO1xuICB9XG59XG4iXX0=