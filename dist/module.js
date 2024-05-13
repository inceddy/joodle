"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * @vuepress
 * ---
 * title: Module
 * ---
 */

/**
 * Represents a collection of Moodle Web Services API functions.
 *
 * @abstract
 * @since 0.1.0
 */
var Module =
/**
 * The Joodle client that this module belongs to.
 *
 * @since 0.1.0
 */

/**
 * Initializes the module.
 *
 * @param {Client} [client] The parent client of this module.
 *
 * @since 0.1.0
 */
function Module(client) {
  (0, _classCallCheck2["default"])(this, Module);
  (0, _defineProperty2["default"])(this, "client", void 0);
  this.client = client;
};

exports["default"] = Module;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2R1bGUudHMiXSwibmFtZXMiOlsiTW9kdWxlIiwiY2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUM4QkEsTTtBQUM1QjtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0UsZ0JBQW1CQyxNQUFuQixFQUFtQztBQUFBO0FBQUE7QUFDakMsT0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHZ1ZXByZXNzXG4gKiAtLS1cbiAqIHRpdGxlOiBNb2R1bGVcbiAqIC0tLVxuICovXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwiLi9jbGllbnRcIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiBNb29kbGUgV2ViIFNlcnZpY2VzIEFQSSBmdW5jdGlvbnMuXG4gKlxuICogQGFic3RyYWN0XG4gKiBAc2luY2UgMC4xLjBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgTW9kdWxlIHtcbiAgLyoqXG4gICAqIFRoZSBKb29kbGUgY2xpZW50IHRoYXQgdGhpcyBtb2R1bGUgYmVsb25ncyB0by5cbiAgICpcbiAgICogQHNpbmNlIDAuMS4wXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2xpZW50OiBDbGllbnQ7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBtb2R1bGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Q2xpZW50fSBbY2xpZW50XSBUaGUgcGFyZW50IGNsaWVudCBvZiB0aGlzIG1vZHVsZS5cbiAgICpcbiAgICogQHNpbmNlIDAuMS4wXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoY2xpZW50OiBDbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxufVxuIl19