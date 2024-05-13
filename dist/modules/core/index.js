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

var _webservice = _interopRequireDefault(require("./webservice"));

var _user = _interopRequireDefault(require("./user"));

var _role = _interopRequireDefault(require("./role"));

var _course = _interopRequireDefault(require("./course"));

var _enrol = _interopRequireDefault(require("./enrol"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Functions relating to core Moodle operations.
 *
 * @since 0.2.0
 * @extends Module
 */
var CoreModule = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(CoreModule, _Module);

  var _super = _createSuper(CoreModule);

  /**
   * The module containing functions relating to system actions.
   *
   * @since 0.2.0
   */

  /**
   * The module containing functions for user-related actions.
   *
   * @since 0.2.0
   */

  /**
   * The module containing functions for assigning and unassigning user roles.
   *
   * @since 0.2.1
   */

  /**
   * The module containing functions for course-related actions.
   */

  /**
   * The module containing functions for enrolment-related actions.
   */

  /**
   * Initializes the module.
   *
   * @param client The parent client of this module.
   *
   * @since 0.2.0
   */
  function CoreModule(client) {
    var _this;

    (0, _classCallCheck2["default"])(this, CoreModule);
    _this = _super.call(this, client);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "webservice", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "user", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "role", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "course", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "enrol", void 0);
    _this.webservice = new _webservice["default"](client);
    _this.user = new _user["default"](client);
    _this.role = new _role["default"](client);
    _this.course = new _course["default"](client);
    _this.enrol = new _enrol["default"](client);
    return _this;
  }

  return CoreModule;
}(_module["default"]);

exports["default"] = CoreModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvcmUvaW5kZXgudHMiXSwibmFtZXMiOlsiQ29yZU1vZHVsZSIsImNsaWVudCIsIndlYnNlcnZpY2UiLCJXZWJTZXJ2aWNlTW9kdWxlIiwidXNlciIsIlVzZXJNb2R1bGUiLCJyb2xlIiwiUm9sZU1vZHVsZSIsImNvdXJzZSIsIkNvdXJzZU1vZHVsZSIsImVucm9sIiwiRW5yb2xNb2R1bGUiLCJNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDcUJBLFU7Ozs7O0FBQ25CO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFHRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTs7QUFHRTtBQUNGO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxzQkFBbUJDLE1BQW5CLEVBQW1DO0FBQUE7O0FBQUE7QUFDakMsOEJBQU1BLE1BQU47QUFEaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVqQyxVQUFLQyxVQUFMLEdBQWtCLElBQUlDLHNCQUFKLENBQXFCRixNQUFyQixDQUFsQjtBQUNBLFVBQUtHLElBQUwsR0FBWSxJQUFJQyxnQkFBSixDQUFlSixNQUFmLENBQVo7QUFDQSxVQUFLSyxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBZU4sTUFBZixDQUFaO0FBQ0EsVUFBS08sTUFBTCxHQUFjLElBQUlDLGtCQUFKLENBQWlCUixNQUFqQixDQUFkO0FBQ0EsVUFBS1MsS0FBTCxHQUFhLElBQUlDLGlCQUFKLENBQWdCVixNQUFoQixDQUFiO0FBTmlDO0FBT2xDOzs7RUE5Q3FDVyxrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHZ1ZXByZXNzXG4gKiAtLS1cbiAqIHRpdGxlOiBjb3JlXG4gKiAtLS1cbiAqL1xuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vLi4vbW9kdWxlXCI7XG5pbXBvcnQgV2ViU2VydmljZU1vZHVsZSBmcm9tIFwiLi93ZWJzZXJ2aWNlXCI7XG5pbXBvcnQgVXNlck1vZHVsZSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgUm9sZU1vZHVsZSBmcm9tIFwiLi9yb2xlXCI7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiLi4vLi4vY2xpZW50XCI7XG5pbXBvcnQgQ291cnNlTW9kdWxlIGZyb20gXCIuL2NvdXJzZVwiO1xuaW1wb3J0IEVucm9sTW9kdWxlIGZyb20gXCIuL2Vucm9sXCI7XG5cbi8qKlxuICogRnVuY3Rpb25zIHJlbGF0aW5nIHRvIGNvcmUgTW9vZGxlIG9wZXJhdGlvbnMuXG4gKlxuICogQHNpbmNlIDAuMi4wXG4gKiBAZXh0ZW5kcyBNb2R1bGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZU1vZHVsZSBleHRlbmRzIE1vZHVsZSB7XG4gIC8qKlxuICAgKiBUaGUgbW9kdWxlIGNvbnRhaW5pbmcgZnVuY3Rpb25zIHJlbGF0aW5nIHRvIHN5c3RlbSBhY3Rpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMC4yLjBcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB3ZWJzZXJ2aWNlOiBXZWJTZXJ2aWNlTW9kdWxlO1xuXG4gIC8qKlxuICAgKiBUaGUgbW9kdWxlIGNvbnRhaW5pbmcgZnVuY3Rpb25zIGZvciB1c2VyLXJlbGF0ZWQgYWN0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDAuMi4wXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgdXNlcjogVXNlck1vZHVsZTtcblxuICAvKipcbiAgICogVGhlIG1vZHVsZSBjb250YWluaW5nIGZ1bmN0aW9ucyBmb3IgYXNzaWduaW5nIGFuZCB1bmFzc2lnbmluZyB1c2VyIHJvbGVzLlxuICAgKlxuICAgKiBAc2luY2UgMC4yLjFcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSByb2xlOiBSb2xlTW9kdWxlO1xuXG4gIC8qKlxuICAgKiBUaGUgbW9kdWxlIGNvbnRhaW5pbmcgZnVuY3Rpb25zIGZvciBjb3Vyc2UtcmVsYXRlZCBhY3Rpb25zLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGNvdXJzZTogQ291cnNlTW9kdWxlO1xuXG4gIC8qKlxuICAgKiBUaGUgbW9kdWxlIGNvbnRhaW5pbmcgZnVuY3Rpb25zIGZvciBlbnJvbG1lbnQtcmVsYXRlZCBhY3Rpb25zLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGVucm9sOiBFbnJvbE1vZHVsZTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIG1vZHVsZS5cbiAgICpcbiAgICogQHBhcmFtIGNsaWVudCBUaGUgcGFyZW50IGNsaWVudCBvZiB0aGlzIG1vZHVsZS5cbiAgICpcbiAgICogQHNpbmNlIDAuMi4wXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoY2xpZW50OiBDbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpO1xuICAgIHRoaXMud2Vic2VydmljZSA9IG5ldyBXZWJTZXJ2aWNlTW9kdWxlKGNsaWVudCk7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXJNb2R1bGUoY2xpZW50KTtcbiAgICB0aGlzLnJvbGUgPSBuZXcgUm9sZU1vZHVsZShjbGllbnQpO1xuICAgIHRoaXMuY291cnNlID0gbmV3IENvdXJzZU1vZHVsZShjbGllbnQpO1xuICAgIHRoaXMuZW5yb2wgPSBuZXcgRW5yb2xNb2R1bGUoY2xpZW50KTtcbiAgfVxufVxuIl19