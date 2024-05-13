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

var _user = _interopRequireDefault(require("./user"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Functions for grade-related operations.
 *
 * @since 0.2.2
 * @extends Module
 */
var CoreModule = /*#__PURE__*/function (_Module) {
  (0, _inherits2["default"])(CoreModule, _Module);

  var _super = _createSuper(CoreModule);

  /**
   * The module containing functions for user grades-related actions.
   *
   * @since 0.2.2
   */

  /**
   * Initializes the module.
   *
   * @param {Client} client The parent client of this module.
   *
   * @since 0.2.2
   */
  function CoreModule(client) {
    var _this;

    (0, _classCallCheck2["default"])(this, CoreModule);
    _this = _super.call(this, client);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "user", void 0);
    _this.user = new _user["default"](client);
    return _this;
  }

  return CoreModule;
}(_module["default"]);

exports["default"] = CoreModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2dyYWRlcmVwb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbIkNvcmVNb2R1bGUiLCJjbGllbnQiLCJ1c2VyIiwiVXNlck1vZHVsZSIsIk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7O0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNxQkEsVTs7Ozs7QUFDbkI7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFHRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLHNCQUFtQkMsTUFBbkIsRUFBbUM7QUFBQTs7QUFBQTtBQUNqQyw4QkFBTUEsTUFBTjtBQURpQztBQUVqQyxVQUFLQyxJQUFMLEdBQVksSUFBSUMsZ0JBQUosQ0FBZUYsTUFBZixDQUFaO0FBRmlDO0FBR2xDOzs7RUFsQnFDRyxrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHZ1ZXByZXNzXG4gKiAtLS1cbiAqIHRpdGxlOiBncmFkZXJlcG9ydFxuICogLS0tXG4gKi9cbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4uLy4uL21vZHVsZVwiO1xuaW1wb3J0IFVzZXJNb2R1bGUgZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xuXG4vKipcbiAqIEZ1bmN0aW9ucyBmb3IgZ3JhZGUtcmVsYXRlZCBvcGVyYXRpb25zLlxuICpcbiAqIEBzaW5jZSAwLjIuMlxuICogQGV4dGVuZHMgTW9kdWxlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmVNb2R1bGUgZXh0ZW5kcyBNb2R1bGUge1xuICAvKipcbiAgICogVGhlIG1vZHVsZSBjb250YWluaW5nIGZ1bmN0aW9ucyBmb3IgdXNlciBncmFkZXMtcmVsYXRlZCBhY3Rpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMC4yLjJcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSB1c2VyOiBVc2VyTW9kdWxlO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgbW9kdWxlLlxuICAgKlxuICAgKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50IFRoZSBwYXJlbnQgY2xpZW50IG9mIHRoaXMgbW9kdWxlLlxuICAgKlxuICAgKiBAc2luY2UgMC4yLjJcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihjbGllbnQ6IENsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudCk7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXJNb2R1bGUoY2xpZW50KTtcbiAgfVxufVxuIl19