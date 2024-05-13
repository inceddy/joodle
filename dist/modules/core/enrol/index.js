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

var _qs = _interopRequireDefault(require("qs"));

var _module = _interopRequireDefault(require("../../../module"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Functions for course-related actions in Moodle.
 *
 * @extends Module
 */
var EnrolModule = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(EnrolModule, _Module);

  var _super = _createSuper(EnrolModule);

  function EnrolModule() {
    (0, _classCallCheck2["default"])(this, EnrolModule);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(EnrolModule, [{
    key: "getEnrolledUsers",
    value: function () {
      var _getEnrolledUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(courseId, options) {
        var response, response1;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.client.invoke("core_enrol_get_enrolled_users", {
                  courseid: courseId,
                  options: options
                });

              case 2:
                response = _context.sent;
                response1 = {
                  users: [],
                  getHttpResponse: response.getHttpResponse
                };
                response1.users = Object.values(response).filter(function (value) {
                  return typeof value !== "function";
                });
                return _context.abrupt("return", response1);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getEnrolledUsers(_x, _x2) {
        return _getEnrolledUsers.apply(this, arguments);
      }

      return getEnrolledUsers;
    }()
  }, {
    key: "manualEnrolUsers",
    value: function () {
      var _manualEnrolUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(enrolments) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.client.invoke("enrol_manual_enrol_users", {
                  enrolments: enrolments
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function manualEnrolUsers(_x3) {
        return _manualEnrolUsers.apply(this, arguments);
      }

      return manualEnrolUsers;
    }()
  }, {
    key: "manualUnenrolUsers",
    value: function () {
      var _manualUnenrolUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(enrolments) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.client.invoke("enrol_manual_unenrol_users", {
                  enrolments: enrolments
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function manualUnenrolUsers(_x4) {
        return _manualUnenrolUsers.apply(this, arguments);
      }

      return manualUnenrolUsers;
    }()
  }, {
    key: "submitUserEnrolmentForm",
    value: function () {
      var _submitUserEnrolmentForm = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(formdata) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.client.invoke("core_enrol_submit_user_enrolment_form", {
                  formdata: _qs["default"].stringify(formdata)
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function submitUserEnrolmentForm(_x5) {
        return _submitUserEnrolmentForm.apply(this, arguments);
      }

      return submitUserEnrolmentForm;
    }()
  }]);
  return EnrolModule;
}(_module["default"]);

exports["default"] = EnrolModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvcmUvZW5yb2wvaW5kZXgudHMiXSwibmFtZXMiOlsiRW5yb2xNb2R1bGUiLCJjb3Vyc2VJZCIsIm9wdGlvbnMiLCJjbGllbnQiLCJpbnZva2UiLCJjb3Vyc2VpZCIsInJlc3BvbnNlIiwicmVzcG9uc2UxIiwidXNlcnMiLCJnZXRIdHRwUmVzcG9uc2UiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJ2YWx1ZSIsImVucm9sbWVudHMiLCJmb3JtZGF0YSIsInFzIiwic3RyaW5naWZ5IiwiTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OzZIQUVqQkMsUSxFQUNBQyxPOzs7Ozs7O3VCQUV1QixLQUFLQyxNQUFMLENBQVlDLE1BQVosQ0FBbUIsK0JBQW5CLEVBQW9EO0FBQ3pFQyxrQkFBQUEsUUFBUSxFQUFFSixRQUQrRDtBQUV6RUMsa0JBQUFBLE9BQU8sRUFBUEE7QUFGeUUsaUJBQXBELEM7OztBQUFqQkksZ0JBQUFBLFE7QUFLQUMsZ0JBQUFBLFMsR0FBc0M7QUFDMUNDLGtCQUFBQSxLQUFLLEVBQUUsRUFEbUM7QUFFMUNDLGtCQUFBQSxlQUFlLEVBQUVILFFBQVEsQ0FBQ0c7QUFGZ0IsaUI7QUFLNUNGLGdCQUFBQSxTQUFTLENBQUNDLEtBQVYsR0FBa0JFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxRQUFkLEVBQXdCTSxNQUF4QixDQUNoQixVQUFDQyxLQUFEO0FBQUEseUJBQVcsT0FBT0EsS0FBUCxLQUFpQixVQUE1QjtBQUFBLGlCQURnQixDQUFsQjtpREFJT04sUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4SEFJUE8sVTs7Ozs7a0RBRU8sS0FBS1gsTUFBTCxDQUFZQyxNQUFaLENBQW1CLDBCQUFuQixFQUErQztBQUNwRFUsa0JBQUFBLFVBQVUsRUFBVkE7QUFEb0QsaUJBQS9DLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0lBTVBBLFU7Ozs7O2tEQUVPLEtBQUtYLE1BQUwsQ0FBWUMsTUFBWixDQUFtQiw0QkFBbkIsRUFBaUQ7QUFDdERVLGtCQUFBQSxVQUFVLEVBQVZBO0FBRHNELGlCQUFqRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FJQU1QQyxROzs7OztrREFFTyxLQUFLWixNQUFMLENBQVlDLE1BQVosQ0FBbUIsdUNBQW5CLEVBQTREO0FBQ2pFVyxrQkFBQUEsUUFBUSxFQUFFQyxlQUFHQyxTQUFILENBQWFGLFFBQWI7QUFEdUQsaUJBQTVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpDOEJHLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gXCJxc1wiO1xuaW1wb3J0IHsgRnVuY3Rpb25SZXNwb25zZSB9IGZyb20gXCIuLi8uLi8uLi9mdW5jdGlvbnNcIjtcbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4uLy4uLy4uL21vZHVsZVwiO1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xuaW1wb3J0IHsgR2V0RW5yb2xsZWRVc2Vyc1Jlc3BvbnNlIH0gZnJvbSBcIi4vZ2V0LWVucm9sbGVkLXVzZXJzXCI7XG5pbXBvcnQgeyBFbnJvbG1lbnRJbnB1dCB9IGZyb20gXCIuL21hbnVlbC1lbnJvbC11c2Vyc1wiO1xuaW1wb3J0IHsgRW5yb2xtZW50Rm9ybURhdGEgfSBmcm9tIFwiLi9zdWJtaXQtdXNlci1lbnJvbG1lbnQtZm9ybVwiO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyBmb3IgY291cnNlLXJlbGF0ZWQgYWN0aW9ucyBpbiBNb29kbGUuXG4gKlxuICogQGV4dGVuZHMgTW9kdWxlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVucm9sTW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgcHVibGljIGFzeW5jIGdldEVucm9sbGVkVXNlcnMoXG4gICAgY291cnNlSWQ6IG51bWJlcixcbiAgICBvcHRpb25zPzogT3B0aW9uW11cbiAgKTogUHJvbWlzZTxHZXRFbnJvbGxlZFVzZXJzUmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2xpZW50Lmludm9rZShcImNvcmVfZW5yb2xfZ2V0X2Vucm9sbGVkX3VzZXJzXCIsIHtcbiAgICAgIGNvdXJzZWlkOiBjb3Vyc2VJZCxcbiAgICAgIG9wdGlvbnMsXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZTE6IEdldEVucm9sbGVkVXNlcnNSZXNwb25zZSA9IHtcbiAgICAgIHVzZXJzOiBbXSxcbiAgICAgIGdldEh0dHBSZXNwb25zZTogcmVzcG9uc2UuZ2V0SHR0cFJlc3BvbnNlLFxuICAgIH07XG5cbiAgICByZXNwb25zZTEudXNlcnMgPSBPYmplY3QudmFsdWVzKHJlc3BvbnNlKS5maWx0ZXIoXG4gICAgICAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTE7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgbWFudWFsRW5yb2xVc2VycyhcbiAgICBlbnJvbG1lbnRzOiBFbnJvbG1lbnRJbnB1dFtdXG4gICk6IFByb21pc2U8RnVuY3Rpb25SZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5pbnZva2UoXCJlbnJvbF9tYW51YWxfZW5yb2xfdXNlcnNcIiwge1xuICAgICAgZW5yb2xtZW50cyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBtYW51YWxVbmVucm9sVXNlcnMoXG4gICAgZW5yb2xtZW50czogRW5yb2xtZW50SW5wdXRbXVxuICApOiBQcm9taXNlPEZ1bmN0aW9uUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuaW52b2tlKFwiZW5yb2xfbWFudWFsX3VuZW5yb2xfdXNlcnNcIiwge1xuICAgICAgZW5yb2xtZW50cyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzdWJtaXRVc2VyRW5yb2xtZW50Rm9ybShcbiAgICBmb3JtZGF0YTogRW5yb2xtZW50Rm9ybURhdGFcbiAgKTogUHJvbWlzZTxGdW5jdGlvblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50Lmludm9rZShcImNvcmVfZW5yb2xfc3VibWl0X3VzZXJfZW5yb2xtZW50X2Zvcm1cIiwge1xuICAgICAgZm9ybWRhdGE6IHFzLnN0cmluZ2lmeShmb3JtZGF0YSksXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==