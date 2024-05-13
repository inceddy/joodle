"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Joodle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _client = require("./client");

var _auth = _interopRequireDefault(require("./modules/auth"));

var _core = _interopRequireDefault(require("./modules/core"));

var _gradereport = _interopRequireDefault(require("./modules/gradereport"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * The main Joodle client class. Used to make API calls to Moodle's Web Services API.
 *
 * @since 0.1.0
 * @extends Client
 */
// eslint-disable-next-line import/prefer-default-export
var Joodle = /*#__PURE__*/function (_Client) {
  (0, _inherits2["default"])(Joodle, _Client);

  var _super = _createSuper(Joodle);

  /**
   * The modules that have been implemented by Joodle. Each module serves as a container of numerous Moodle Web
   * Services API functions.
   *
   * @since 1.0.0
   */

  /**
   * Initializes a new Joodle client instance for making API calls to Moodle's Web Services API.
   *
   * @param {ClientOptions} [options]     The client's configuration options.
   * @param {HttpOptions}  [httpOptions]  HTTP configuration options to pass along to `got`.
   * @since 0.1.0
   */
  function Joodle(options, httpOptions) {
    var _this;

    (0, _classCallCheck2["default"])(this, Joodle);
    _this = _super.call(this, options, httpOptions);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "modules", void 0);
    _this.modules = {
      auth: new _auth["default"]((0, _assertThisInitialized2["default"])(_this)),
      core: new _core["default"]((0, _assertThisInitialized2["default"])(_this)),
      gradereport: new _gradereport["default"]((0, _assertThisInitialized2["default"])(_this))
    };
    return _this;
  }

  return Joodle;
}(_client.Client);

exports.Joodle = Joodle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJKb29kbGUiLCJvcHRpb25zIiwiaHR0cE9wdGlvbnMiLCJtb2R1bGVzIiwiYXV0aCIsIkF1dGhNb2R1bGUiLCJjb3JlIiwiQ29yZU1vZHVsZSIsImdyYWRlcmVwb3J0IiwiR3JhZGVSZXBvcnRNb2R1bGUiLCJDbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDYUEsTTs7Ozs7QUFDWDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxrQkFBbUJDLE9BQW5CLEVBQTRDQyxXQUE1QyxFQUF1RTtBQUFBOztBQUFBO0FBQ3JFLDhCQUFNRCxPQUFOLEVBQWVDLFdBQWY7QUFEcUU7QUFHckUsVUFBS0MsT0FBTCxHQUFlO0FBQ2JDLE1BQUFBLElBQUksRUFBRSxJQUFJQyxnQkFBSixnREFETztBQUViQyxNQUFBQSxJQUFJLEVBQUUsSUFBSUMsZ0JBQUosZ0RBRk87QUFHYkMsTUFBQUEsV0FBVyxFQUFFLElBQUlDLHVCQUFKO0FBSEEsS0FBZjtBQUhxRTtBQVF0RTs7O0VBeEJ5QkMsYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHZ1ZXByZXNzXG4gKiAtLS1cbiAqIHRpdGxlOiBKb29kbGVcbiAqIC0tLVxuICovXG5pbXBvcnQgeyBDbGllbnQsIENsaWVudE9wdGlvbnMsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4vY2xpZW50XCI7XG5pbXBvcnQgQXV0aE1vZHVsZSBmcm9tIFwiLi9tb2R1bGVzL2F1dGhcIjtcbmltcG9ydCBDb3JlTW9kdWxlIGZyb20gXCIuL21vZHVsZXMvY29yZVwiO1xuaW1wb3J0IEdyYWRlUmVwb3J0TW9kdWxlIGZyb20gXCIuL21vZHVsZXMvZ3JhZGVyZXBvcnRcIjtcblxuaW50ZXJmYWNlIE1vZHVsZXMge1xuICAvKipcbiAgICogVGhlIG1vZHVsZSBjb250YWluaW5nIGZ1bmN0aW9ucyByZWxhdGluZyB0byBhdXRoZW50aWNhdGlvbiBpbiBNb29kbGUgKHNwZWNpZmljYWxseSBzZWxmLXJlZ2lzdHJhdGlvbikuXG4gICAqXG4gICAqIEBzaW5jZSAwLjEuMFxuICAgKi9cbiAgcmVhZG9ubHkgYXV0aDogQXV0aE1vZHVsZTtcblxuICAvKipcbiAgICogVGhlIG1vZHVsZSBjb250YWluaW5nIGZ1bmN0aW9ucyByZWxhdGluZyB0byBjb3JlIE1vb2RsZSBvcGVyYXRpb25zLlxuICAgKlxuICAgKiBAc2luY2UgMC4yLjBcbiAgICovXG4gIHJlYWRvbmx5IGNvcmU6IENvcmVNb2R1bGU7XG5cbiAgLyoqXG4gICAqIFRoZSBtb2R1bGUgY29udGFpbmluZyBmdW5jdGlvbnMgZm9yIGdyYWRlLXJlbGF0ZWQgb3BlcmF0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDAuMi4yXG4gICAqL1xuICByZWFkb25seSBncmFkZXJlcG9ydDogR3JhZGVSZXBvcnRNb2R1bGU7XG59XG5cbi8qKlxuICogVGhlIG1haW4gSm9vZGxlIGNsaWVudCBjbGFzcy4gVXNlZCB0byBtYWtlIEFQSSBjYWxscyB0byBNb29kbGUncyBXZWIgU2VydmljZXMgQVBJLlxuICpcbiAqIEBzaW5jZSAwLjEuMFxuICogQGV4dGVuZHMgQ2xpZW50XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY2xhc3MgSm9vZGxlIGV4dGVuZHMgQ2xpZW50IHtcbiAgLyoqXG4gICAqIFRoZSBtb2R1bGVzIHRoYXQgaGF2ZSBiZWVuIGltcGxlbWVudGVkIGJ5IEpvb2RsZS4gRWFjaCBtb2R1bGUgc2VydmVzIGFzIGEgY29udGFpbmVyIG9mIG51bWVyb3VzIE1vb2RsZSBXZWJcbiAgICogU2VydmljZXMgQVBJIGZ1bmN0aW9ucy5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgbW9kdWxlczogTW9kdWxlcztcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBuZXcgSm9vZGxlIGNsaWVudCBpbnN0YW5jZSBmb3IgbWFraW5nIEFQSSBjYWxscyB0byBNb29kbGUncyBXZWIgU2VydmljZXMgQVBJLlxuICAgKlxuICAgKiBAcGFyYW0ge0NsaWVudE9wdGlvbnN9IFtvcHRpb25zXSAgICAgVGhlIGNsaWVudCdzIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICogQHBhcmFtIHtIdHRwT3B0aW9uc30gIFtodHRwT3B0aW9uc10gIEhUVFAgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHBhc3MgYWxvbmcgdG8gYGdvdGAuXG4gICAqIEBzaW5jZSAwLjEuMFxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBDbGllbnRPcHRpb25zLCBodHRwT3B0aW9ucz86IEh0dHBPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucywgaHR0cE9wdGlvbnMpO1xuXG4gICAgdGhpcy5tb2R1bGVzID0ge1xuICAgICAgYXV0aDogbmV3IEF1dGhNb2R1bGUodGhpcyksXG4gICAgICBjb3JlOiBuZXcgQ29yZU1vZHVsZSh0aGlzKSxcbiAgICAgIGdyYWRlcmVwb3J0OiBuZXcgR3JhZGVSZXBvcnRNb2R1bGUodGhpcyksXG4gICAgfTtcbiAgfVxufVxuIl19