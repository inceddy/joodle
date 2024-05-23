"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
 * Functions for course-related actions in Moodle.
 *
 * @extends Module
 */
var CourseModule = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(CourseModule, _Module);

  var _super = _createSuper(CourseModule);

  function CourseModule() {
    (0, _classCallCheck2["default"])(this, CourseModule);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(CourseModule, [{
    key: "duplicateCourse",
    value: function () {
      var _duplicateCourse = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(input) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.client.invoke("core_course_duplicate_course", _objectSpread(_objectSpread({}, input), {}, {
                  visible: input.visible ? 1 : 0
                }));

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function duplicateCourse(_x) {
        return _duplicateCourse.apply(this, arguments);
      }

      return duplicateCourse;
    }()
  }, {
    key: "getCourses",
    value: function () {
      var _getCourses = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ids) {
        var response, response1;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.client.invoke("core_course_get_courses", {
                  options: {
                    ids: ids
                  }
                });

              case 2:
                response = _context2.sent;
                response1 = {
                  courses: [],
                  getHttpResponse: response.getHttpResponse
                };
                response1.courses = Object.values(response).filter(function (value) {
                  return typeof value !== "function";
                });
                return _context2.abrupt("return", response1);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCourses(_x2) {
        return _getCourses.apply(this, arguments);
      }

      return getCourses;
    }()
  }, {
    key: "updateCourses",
    value: function () {
      var _updateCourses = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(courses) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.client.invoke("core_course_update_courses", {
                  courses: courses
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateCourses(_x3) {
        return _updateCourses.apply(this, arguments);
      }

      return updateCourses;
    }()
    /*
      public async addContentItemToUserFavourites(componentName: string, contentItemId: number): Promise<AddContentItemToUserFavouritesResponse> {
          return (await this.client.invoke(
              "core_course_add_content_item_to_user_favourites",
              {
                  componentName,
                  contentItemId,
              }
          )) as AddContentItemToUserFavouritesResponse;
      }
      */

  }]);
  return CourseModule;
}(_module["default"]);

exports["default"] = CourseModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvcmUvY291cnNlL2luZGV4LnRzIl0sIm5hbWVzIjpbIkNvdXJzZU1vZHVsZSIsImlucHV0IiwiY2xpZW50IiwiaW52b2tlIiwidmlzaWJsZSIsImlkcyIsIm9wdGlvbnMiLCJyZXNwb25zZSIsInJlc3BvbnNlMSIsImNvdXJzZXMiLCJnZXRIdHRwUmVzcG9uc2UiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJ2YWx1ZSIsIk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs0SEFFakJDLEs7Ozs7Ozt1QkFFYyxLQUFLQyxNQUFMLENBQVlDLE1BQVosQ0FBbUIsOEJBQW5CLGtDQUNURixLQURTO0FBRVpHLGtCQUFBQSxPQUFPLEVBQUVILEtBQUssQ0FBQ0csT0FBTixHQUFnQixDQUFoQixHQUFvQjtBQUZqQixtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3SEFNUUMsRzs7Ozs7Ozt1QkFDQyxLQUFLSCxNQUFMLENBQVlDLE1BQVosQ0FBbUIseUJBQW5CLEVBQThDO0FBQ25FRyxrQkFBQUEsT0FBTyxFQUFFO0FBQ1BELG9CQUFBQSxHQUFHLEVBQUhBO0FBRE87QUFEMEQsaUJBQTlDLEM7OztBQUFqQkUsZ0JBQUFBLFE7QUFNQUMsZ0JBQUFBLFMsR0FBZ0M7QUFDcENDLGtCQUFBQSxPQUFPLEVBQUUsRUFEMkI7QUFFcENDLGtCQUFBQSxlQUFlLEVBQUVILFFBQVEsQ0FBQ0c7QUFGVSxpQjtBQUt0Q0YsZ0JBQUFBLFNBQVMsQ0FBQ0MsT0FBVixHQUFvQkUsTUFBTSxDQUFDQyxNQUFQLENBQWNMLFFBQWQsRUFBd0JNLE1BQXhCLENBQ2xCLFVBQUNDLEtBQUQ7QUFBQSx5QkFBVyxPQUFPQSxLQUFQLEtBQWlCLFVBQTVCO0FBQUEsaUJBRGtCLENBQXBCO2tEQUlPTixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJIQUlQQyxPOzs7Ozs7dUJBRWMsS0FBS1AsTUFBTCxDQUFZQyxNQUFaLENBQW1CLDRCQUFuQixFQUFpRDtBQUM3RE0sa0JBQUFBLE9BQU8sRUFBUEE7QUFENkQsaUJBQWpELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztFQS9DMENNLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlXCI7XG4vLyBpbXBvcnQgeyBBZGRDb250ZW50SXRlbVRvVXNlckZhdm91cml0ZXNSZXNwb25zZSB9IGZyb20gXCIuL2FkZC1jb250ZW50LWl0ZW0tdG8tdXNlci1mYXZvdXJpdGVzXCI7XG5pbXBvcnQge1xuICBEdXBsaWNhdGVDb3Vyc2VSZXNwb25zZSxcbiAgRHVwbGljYXRlQ291cnNlSW5wdXQsXG59IGZyb20gXCIuL2R1cGxpY2F0ZS1jb3Vyc2VcIjtcbmltcG9ydCB7IEdldENvdXJzZXNSZXNwb25zZSB9IGZyb20gXCIuL2dldC1jb3Vyc2VzXCI7XG5pbXBvcnQgeyBDb3Vyc2VJdGVtRm9yVXBkYXRlLCBVcGRhdGVDb3Vyc2VzUmVzcG9uc2UgfSBmcm9tIFwiLi91cGRhdGUtY291cnNlc1wiO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyBmb3IgY291cnNlLXJlbGF0ZWQgYWN0aW9ucyBpbiBNb29kbGUuXG4gKlxuICogQGV4dGVuZHMgTW9kdWxlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdXJzZU1vZHVsZSBleHRlbmRzIE1vZHVsZSB7XG4gIHB1YmxpYyBhc3luYyBkdXBsaWNhdGVDb3Vyc2UoXG4gICAgaW5wdXQ6IER1cGxpY2F0ZUNvdXJzZUlucHV0XG4gICk6IFByb21pc2U8RHVwbGljYXRlQ291cnNlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuY2xpZW50Lmludm9rZShcImNvcmVfY291cnNlX2R1cGxpY2F0ZV9jb3Vyc2VcIiwge1xuICAgICAgLi4uaW5wdXQsXG4gICAgICB2aXNpYmxlOiBpbnB1dC52aXNpYmxlID8gMSA6IDAsXG4gICAgfSkpIGFzIER1cGxpY2F0ZUNvdXJzZVJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldENvdXJzZXMoaWRzPzogbnVtYmVyW10pOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jbGllbnQuaW52b2tlKFwiY29yZV9jb3Vyc2VfZ2V0X2NvdXJzZXNcIiwge1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBpZHMsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2UxOiBHZXRDb3Vyc2VzUmVzcG9uc2UgPSB7XG4gICAgICBjb3Vyc2VzOiBbXSxcbiAgICAgIGdldEh0dHBSZXNwb25zZTogcmVzcG9uc2UuZ2V0SHR0cFJlc3BvbnNlLFxuICAgIH07XG5cbiAgICByZXNwb25zZTEuY291cnNlcyA9IE9iamVjdC52YWx1ZXMocmVzcG9uc2UpLmZpbHRlcihcbiAgICAgICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCJcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlMTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB1cGRhdGVDb3Vyc2VzKFxuICAgIGNvdXJzZXM6IENvdXJzZUl0ZW1Gb3JVcGRhdGVbXVxuICApOiBQcm9taXNlPFVwZGF0ZUNvdXJzZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5jbGllbnQuaW52b2tlKFwiY29yZV9jb3Vyc2VfdXBkYXRlX2NvdXJzZXNcIiwge1xuICAgICAgY291cnNlcyxcbiAgICB9KSkgYXMgVXBkYXRlQ291cnNlc1Jlc3BvbnNlO1xuICB9XG5cbiAgLypcbiAgICBwdWJsaWMgYXN5bmMgYWRkQ29udGVudEl0ZW1Ub1VzZXJGYXZvdXJpdGVzKGNvbXBvbmVudE5hbWU6IHN0cmluZywgY29udGVudEl0ZW1JZDogbnVtYmVyKTogUHJvbWlzZTxBZGRDb250ZW50SXRlbVRvVXNlckZhdm91cml0ZXNSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuY2xpZW50Lmludm9rZShcbiAgICAgICAgICAgIFwiY29yZV9jb3Vyc2VfYWRkX2NvbnRlbnRfaXRlbV90b191c2VyX2Zhdm91cml0ZXNcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRJdGVtSWQsXG4gICAgICAgICAgICB9XG4gICAgICAgICkpIGFzIEFkZENvbnRlbnRJdGVtVG9Vc2VyRmF2b3VyaXRlc1Jlc3BvbnNlO1xuICAgIH1cbiAgICAqL1xufVxuIl19