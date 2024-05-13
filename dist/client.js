"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _qs = _interopRequireDefault(require("qs"));

var _got = _interopRequireDefault(require("got"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Attempts to handle a JSON body returned by a call to Moodle's Web Services API. If the body contains an `exception`
 * property, then the response is assumed to be erroneous, and a rejected Promise is returned.
 *
 * @param response The response returned by a Moodle API call.
 * @since 1.0.0
 */
var handleResponse = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(response) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!response.exception) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", Promise.reject(response));

          case 2:
            return _context.abrupt("return", response);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleResponse(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * A client that can send HTTP requests to a Moodle site's Web Services API.
 *
 * @since 0.1.0
 * @abstract
 */
var Client = /*#__PURE__*/function () {
  /**
   * The base URL of the Moodle site to send requests to.
   *
   * @since 0.1.0
   */

  /**
   * The token used to authenticate with Moodle's Web Services API.
   *
   * @since 0.1.0
   */

  /**
   * The underlying got instance used for HTTP requests.
   *
   * @since 0.1.0
   */

  /**
   * Initializes the client as well as the client's `got` instance so HTTP requests can be made.
   *
   * @param {ClientOptions} [options]     The client's configuration options.
   * @param {HttpOptions}   [httpOptions] HTTP configuration options to pass along to `got`.
   * @since 0.1.0
   */
  function Client(options, httpOptions) {
    (0, _classCallCheck2["default"])(this, Client);
    (0, _defineProperty2["default"])(this, "baseURL", void 0);
    (0, _defineProperty2["default"])(this, "token", void 0);
    (0, _defineProperty2["default"])(this, "got", void 0);
    this.baseURL = options && options.baseURL || process.env.JOODLE_BASE_URL;
    this.token = options && options.token || process.env.JOODLE_TOKEN;

    if (this.baseURL === undefined) {
      throw new Error("`baseURL` cannot be undefined!");
    } else if (this.token === undefined) {
      throw new Error("`token` cannot be undefined!");
    }

    this.got = _got["default"].extend({
      prefixUrl: this.baseURL,
      searchParams: {
        wstoken: this.token,
        moodlewsrestformat: "json"
      },
      // HTTP Options
      timeout: httpOptions && httpOptions.timeout || undefined,
      retry: httpOptions && httpOptions.retries || 2,
      https: {
        rejectUnauthorized: httpOptions && httpOptions.rejectInvalidSSL !== undefined ? httpOptions.rejectInvalidSSL : true
      },
      cache: httpOptions && httpOptions.cache !== undefined ? httpOptions.cache : undefined,
      http2: httpOptions && httpOptions.http2 !== undefined ? httpOptions.http2 : false
    });
  }
  /**
   * Invokes a Moodle Web Services API function.
   *
   * @param {string} wsfunction  The name of the Moodle Web Services API function to invoke.
   * @param {any} [searchParams] Any additional GET parameters to include in the request.
   *
   * @since 1.0.0
   */


  (0, _createClass2["default"])(Client, [{
    key: "invoke",
    value: function () {
      var _invoke = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(wsfunction, searchParams) {
        var response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.got.get("webservice/rest/server.php", {
                  searchParams: _qs["default"].stringify(_objectSpread({
                    wsfunction: wsfunction
                  }, searchParams)),
                  responseType: "json"
                });

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", handleResponse(_objectSpread({
                  getHttpResponse: function getHttpResponse() {
                    return response;
                  }
                }, response.body)));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function invoke(_x2, _x3) {
        return _invoke.apply(this, arguments);
      }

      return invoke;
    }()
  }]);
  return Client;
}();

exports.Client = Client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnQudHMiXSwibmFtZXMiOlsiaGFuZGxlUmVzcG9uc2UiLCJyZXNwb25zZSIsImV4Y2VwdGlvbiIsIlByb21pc2UiLCJyZWplY3QiLCJDbGllbnQiLCJvcHRpb25zIiwiaHR0cE9wdGlvbnMiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIkpPT0RMRV9CQVNFX1VSTCIsInRva2VuIiwiSk9PRExFX1RPS0VOIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJnb3QiLCJleHRlbmQiLCJwcmVmaXhVcmwiLCJzZWFyY2hQYXJhbXMiLCJ3c3Rva2VuIiwibW9vZGxld3NyZXN0Zm9ybWF0IiwidGltZW91dCIsInJldHJ5IiwicmV0cmllcyIsImh0dHBzIiwicmVqZWN0VW5hdXRob3JpemVkIiwicmVqZWN0SW52YWxpZFNTTCIsImNhY2hlIiwiaHR0cDIiLCJ3c2Z1bmN0aW9uIiwiZ2V0IiwicXMiLCJzdHJpbmdpZnkiLCJyZXNwb25zZVR5cGUiLCJnZXRIdHRwUmVzcG9uc2UiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7O0FBQ0E7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsY0FBYztBQUFBLDJGQUFHLGlCQUNyQkMsUUFEcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdoQkEsUUFBRCxDQUFrQkMsU0FIRDtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FJWkMsT0FBTyxDQUFDQyxNQUFSLENBQWVILFFBQWYsQ0FKWTs7QUFBQTtBQUFBLDZDQU1kQSxRQU5jOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRELGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7O0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNzQkssTTtBQUNwQjtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFHRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLGtCQUFzQkMsT0FBdEIsRUFBK0NDLFdBQS9DLEVBQTBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEUsU0FBS0MsT0FBTCxHQUFnQkYsT0FBTyxJQUFJQSxPQUFPLENBQUNFLE9BQXBCLElBQWdDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFBM0Q7QUFDQSxTQUFLQyxLQUFMLEdBQWNOLE9BQU8sSUFBSUEsT0FBTyxDQUFDTSxLQUFwQixJQUE4QkgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFlBQXZEOztBQUVBLFFBQUksS0FBS0wsT0FBTCxLQUFpQk0sU0FBckIsRUFBZ0M7QUFDOUIsWUFBTSxJQUFJQyxLQUFKLENBQVUsZ0NBQVYsQ0FBTjtBQUNELEtBRkQsTUFFTyxJQUFJLEtBQUtILEtBQUwsS0FBZUUsU0FBbkIsRUFBOEI7QUFDbkMsWUFBTSxJQUFJQyxLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNEOztBQUVELFNBQUtDLEdBQUwsR0FBV0EsZ0JBQUlDLE1BQUosQ0FBVztBQUNwQkMsTUFBQUEsU0FBUyxFQUFFLEtBQUtWLE9BREk7QUFFcEJXLE1BQUFBLFlBQVksRUFBRTtBQUNaQyxRQUFBQSxPQUFPLEVBQUUsS0FBS1IsS0FERjtBQUVaUyxRQUFBQSxrQkFBa0IsRUFBRTtBQUZSLE9BRk07QUFNcEI7QUFDQUMsTUFBQUEsT0FBTyxFQUFHZixXQUFXLElBQUlBLFdBQVcsQ0FBQ2UsT0FBNUIsSUFBd0NSLFNBUDdCO0FBUXBCUyxNQUFBQSxLQUFLLEVBQUdoQixXQUFXLElBQUlBLFdBQVcsQ0FBQ2lCLE9BQTVCLElBQXdDLENBUjNCO0FBU3BCQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsa0JBQWtCLEVBQ2hCbkIsV0FBVyxJQUFJQSxXQUFXLENBQUNvQixnQkFBWixLQUFpQ2IsU0FBaEQsR0FDSVAsV0FBVyxDQUFDb0IsZ0JBRGhCLEdBRUk7QUFKRCxPQVRhO0FBZXBCQyxNQUFBQSxLQUFLLEVBQ0hyQixXQUFXLElBQUlBLFdBQVcsQ0FBQ3FCLEtBQVosS0FBc0JkLFNBQXJDLEdBQ0lQLFdBQVcsQ0FBQ3FCLEtBRGhCLEdBRUlkLFNBbEJjO0FBbUJwQmUsTUFBQUEsS0FBSyxFQUNIdEIsV0FBVyxJQUFJQSxXQUFXLENBQUNzQixLQUFaLEtBQXNCZixTQUFyQyxHQUNJUCxXQUFXLENBQUNzQixLQURoQixHQUVJO0FBdEJjLEtBQVgsQ0FBWDtBQXdCRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztvSEFFSUMsVSxFQUNBWCxZOzs7Ozs7O3VCQUl1QixLQUFLSCxHQUFMLENBQVNlLEdBQVQsQ0FBYSw0QkFBYixFQUEyQztBQUNoRVosa0JBQUFBLFlBQVksRUFBRWEsZUFBR0MsU0FBSDtBQUNaSCxvQkFBQUEsVUFBVSxFQUFWQTtBQURZLHFCQUVUWCxZQUZTLEVBRGtEO0FBS2hFZSxrQkFBQUEsWUFBWSxFQUFFO0FBTGtELGlCQUEzQyxDOzs7QUFBakJqQyxnQkFBQUEsUTtrREFRQ0QsY0FBYztBQUNuQm1DLGtCQUFBQSxlQUFlLEVBQUU7QUFBQSwyQkFBTWxDLFFBQU47QUFBQTtBQURFLG1CQUVmQSxRQUFRLENBQUNtQyxJQUZNLEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB2dWVwcmVzc1xuICogLS0tXG4gKiB0aXRsZTogQ2xpZW50XG4gKiAtLS1cbiAqL1xuaW1wb3J0IHFzIGZyb20gXCJxc1wiO1xuaW1wb3J0IGdvdCwgeyBHb3QgfSBmcm9tIFwiZ290XCI7XG5pbXBvcnQgQ2FjaGVhYmxlUmVxdWVzdCBmcm9tIFwiY2FjaGVhYmxlLXJlcXVlc3RcIjtcbmltcG9ydCB7IEZ1bmN0aW9uUmVzcG9uc2UgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcblxuLyoqXG4gKiBBdHRlbXB0cyB0byBoYW5kbGUgYSBKU09OIGJvZHkgcmV0dXJuZWQgYnkgYSBjYWxsIHRvIE1vb2RsZSdzIFdlYiBTZXJ2aWNlcyBBUEkuIElmIHRoZSBib2R5IGNvbnRhaW5zIGFuIGBleGNlcHRpb25gXG4gKiBwcm9wZXJ0eSwgdGhlbiB0aGUgcmVzcG9uc2UgaXMgYXNzdW1lZCB0byBiZSBlcnJvbmVvdXMsIGFuZCBhIHJlamVjdGVkIFByb21pc2UgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHJlc3BvbnNlIFRoZSByZXNwb25zZSByZXR1cm5lZCBieSBhIE1vb2RsZSBBUEkgY2FsbC5cbiAqIEBzaW5jZSAxLjAuMFxuICovXG5jb25zdCBoYW5kbGVSZXNwb25zZSA9IGFzeW5jIChcbiAgcmVzcG9uc2U6IEZ1bmN0aW9uUmVzcG9uc2Vcbik6IFByb21pc2U8RnVuY3Rpb25SZXNwb25zZT4gPT4ge1xuICBpZiAoKHJlc3BvbnNlIGFzIGFueSkuZXhjZXB0aW9uKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsaWVudE9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGJhc2UgVVJMIG9mIHRoZSBNb29kbGUgc2l0ZSB0byBzZW5kIEFQSSByZXF1ZXN0cyB0by4gSWYgdGhpcyB2YWx1ZSBpcyBub3QgcHJvdmlkZWQsIHRoZW4gdGhlIGNsaWVudCBmYWxscyBiYWNrXG4gICAqIHRvIHRoZSBgSk9PRExFX0JBU0VfVVJMYCBlbnZpcm9ubWVudCB2YXJpYWJsZS5cbiAgICovXG4gIGJhc2VVUkw/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0b2tlbiB1c2VkIHRvIGF1dGhlbnRpY2F0ZSB3aXRoIHRoZSBNb29kbGUgc2l0ZSdzIFdlYiBTZXJ2aWNlcyBBUEkuIElmIHRoaXMgdmFsdWUgaXMgbm90IHByb3ZpZGVkLCB0aGVuIHRoZVxuICAgKiBjbGllbnQgZmFsbHMgYmFjayB0byB0aGUgYEpPT0RMRV9UT0tFTmAgZW52aXJvbm1lbnQgdmFyaWFibGUuXG4gICAqL1xuICB0b2tlbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIdHRwT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGhlIGNsaWVudCBzaG91bGQgd2FpdCBmb3IgYSByZXNwb25zZSBiZWZvcmUgYWJvcnRpbmcgdGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZXJlIGlzIG5vIHJlc3BvbnNlIHRpbWVvdXQgZHVyYXRpb24uXG4gICAqL1xuICB0aW1lb3V0PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgbWFueSByZXRyaWVzIHNob3VsZCB0aGUgY2xpZW50IGF0dGVtcHQgdG8gbWFrZSBvbiBmYWlsdXJlLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgY2xpZW50IHdpbGwgYXR0ZW1wdCAyIHJldHJpZXMgaWYgdGhlIGZpcnN0IHJlcXVlc3QgZmFpbHMuXG4gICAqL1xuICByZXRyaWVzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjbGllbnQgc2hvdWxkIHJlamVjdCBpbnZhbGlkIFNTTCBjZXJ0aWZpY2F0ZXMgKHRydWUpIG9yIG5vdCAoZmFsc2UpLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgY2xpZW50IHdpbGwgcmVqZWN0IGludmFsaWQgU1NMIGNlcnRpZmljYXRlcy4gVGhpcyBvcHRpb24gaGFzIHNlY3VyaXR5IGltcGxpY2F0aW9ucyBpZiBzZXQgdG8gdHJ1ZSxcbiAgICogYW5kIHdlIG9ubHkgcmVjb21tZW5kIHlvdSBkbyBzbyB3aGVuIGNvbm5lY3RpbmcgdG8gYSBsb2NhbCBNb29kbGUgaW5zdGFuY2UuXG4gICAqL1xuICByZWplY3RJbnZhbGlkU1NMPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQW4gb2JqZWN0IHRoYXQgaW1wbGVtZW50cyB0aGUgTWFwIEFQSSAoc3VjaCBhcyBhIGBuZXcgTWFwKClgIG9yIGEgS2V5diBpbnN0YW5jZSkgY2FuIGJlIHN1cHBsaWVkIGhlcmUgdG8gY2FjaGVcbiAgICogcmVxdWVzdHMuIFRoaXMgY2FjaGluZyBiZWhhdmlvciBpcyBjb21wbGlhbnQgd2l0aCBSRkMgNzIzNCwgYW5kIHVzZXMgdGhlIGBJZi1Ob25lLU1hdGNoYC9gSWYtTW9kaWZpZWQtU2luY2VgXG4gICAqIEhUVFAgaGVhZGVycyB0byByZXZhbGlkYXRlIHN0YWxlIGNhY2hlIGVudHJpZXMuXG4gICAqL1xuICBjYWNoZT86IHN0cmluZyB8IGZhbHNlIHwgQ2FjaGVhYmxlUmVxdWVzdC5TdG9yYWdlQWRhcHRlcjtcblxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIEpvb2RsZSB3aWxsIGFkZGl0aW9uYWxseSBhY2NlcHQgSFRUUC8yIHJlcXVlc3RzLiBIVFRQLzEuMSBvciBIVFRQLzIgd2lsbCBiZSB1c2VkIGRlcGVuZGluZyBvbiB0aGVcbiAgICogQUxQTiBwcm90b2NvbC5cbiAgICovXG4gIGh0dHAyPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBBIGNsaWVudCB0aGF0IGNhbiBzZW5kIEhUVFAgcmVxdWVzdHMgdG8gYSBNb29kbGUgc2l0ZSdzIFdlYiBTZXJ2aWNlcyBBUEkuXG4gKlxuICogQHNpbmNlIDAuMS4wXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENsaWVudCB7XG4gIC8qKlxuICAgKiBUaGUgYmFzZSBVUkwgb2YgdGhlIE1vb2RsZSBzaXRlIHRvIHNlbmQgcmVxdWVzdHMgdG8uXG4gICAqXG4gICAqIEBzaW5jZSAwLjEuMFxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBiYXNlVVJMPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdG9rZW4gdXNlZCB0byBhdXRoZW50aWNhdGUgd2l0aCBNb29kbGUncyBXZWIgU2VydmljZXMgQVBJLlxuICAgKlxuICAgKiBAc2luY2UgMC4xLjBcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgdG9rZW4/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB1bmRlcmx5aW5nIGdvdCBpbnN0YW5jZSB1c2VkIGZvciBIVFRQIHJlcXVlc3RzLlxuICAgKlxuICAgKiBAc2luY2UgMC4xLjBcbiAgICovXG4gIHB1YmxpYyBnb3Q6IEdvdDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGNsaWVudCBhcyB3ZWxsIGFzIHRoZSBjbGllbnQncyBgZ290YCBpbnN0YW5jZSBzbyBIVFRQIHJlcXVlc3RzIGNhbiBiZSBtYWRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0NsaWVudE9wdGlvbnN9IFtvcHRpb25zXSAgICAgVGhlIGNsaWVudCdzIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICogQHBhcmFtIHtIdHRwT3B0aW9uc30gICBbaHR0cE9wdGlvbnNdIEhUVFAgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHBhc3MgYWxvbmcgdG8gYGdvdGAuXG4gICAqIEBzaW5jZSAwLjEuMFxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBDbGllbnRPcHRpb25zLCBodHRwT3B0aW9ucz86IEh0dHBPcHRpb25zKSB7XG4gICAgdGhpcy5iYXNlVVJMID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5iYXNlVVJMKSB8fCBwcm9jZXNzLmVudi5KT09ETEVfQkFTRV9VUkw7XG4gICAgdGhpcy50b2tlbiA9IChvcHRpb25zICYmIG9wdGlvbnMudG9rZW4pIHx8IHByb2Nlc3MuZW52LkpPT0RMRV9UT0tFTjtcblxuICAgIGlmICh0aGlzLmJhc2VVUkwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYGJhc2VVUkxgIGNhbm5vdCBiZSB1bmRlZmluZWQhXCIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50b2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgdG9rZW5gIGNhbm5vdCBiZSB1bmRlZmluZWQhXCIpO1xuICAgIH1cblxuICAgIHRoaXMuZ290ID0gZ290LmV4dGVuZCh7XG4gICAgICBwcmVmaXhVcmw6IHRoaXMuYmFzZVVSTCxcbiAgICAgIHNlYXJjaFBhcmFtczoge1xuICAgICAgICB3c3Rva2VuOiB0aGlzLnRva2VuLFxuICAgICAgICBtb29kbGV3c3Jlc3Rmb3JtYXQ6IFwianNvblwiLFxuICAgICAgfSxcbiAgICAgIC8vIEhUVFAgT3B0aW9uc1xuICAgICAgdGltZW91dDogKGh0dHBPcHRpb25zICYmIGh0dHBPcHRpb25zLnRpbWVvdXQpIHx8IHVuZGVmaW5lZCxcbiAgICAgIHJldHJ5OiAoaHR0cE9wdGlvbnMgJiYgaHR0cE9wdGlvbnMucmV0cmllcykgfHwgMixcbiAgICAgIGh0dHBzOiB7XG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDpcbiAgICAgICAgICBodHRwT3B0aW9ucyAmJiBodHRwT3B0aW9ucy5yZWplY3RJbnZhbGlkU1NMICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gaHR0cE9wdGlvbnMucmVqZWN0SW52YWxpZFNTTFxuICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNhY2hlOlxuICAgICAgICBodHRwT3B0aW9ucyAmJiBodHRwT3B0aW9ucy5jYWNoZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBodHRwT3B0aW9ucy5jYWNoZVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgaHR0cDI6XG4gICAgICAgIGh0dHBPcHRpb25zICYmIGh0dHBPcHRpb25zLmh0dHAyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IGh0dHBPcHRpb25zLmh0dHAyXG4gICAgICAgICAgOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VzIGEgTW9vZGxlIFdlYiBTZXJ2aWNlcyBBUEkgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB3c2Z1bmN0aW9uICBUaGUgbmFtZSBvZiB0aGUgTW9vZGxlIFdlYiBTZXJ2aWNlcyBBUEkgZnVuY3Rpb24gdG8gaW52b2tlLlxuICAgKiBAcGFyYW0ge2FueX0gW3NlYXJjaFBhcmFtc10gQW55IGFkZGl0aW9uYWwgR0VUIHBhcmFtZXRlcnMgdG8gaW5jbHVkZSBpbiB0aGUgcmVxdWVzdC5cbiAgICpcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgaW52b2tlKFxuICAgIHdzZnVuY3Rpb246IHN0cmluZyxcbiAgICBzZWFyY2hQYXJhbXM/OiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfVxuICApOiBQcm9taXNlPEZ1bmN0aW9uUmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ290LmdldChcIndlYnNlcnZpY2UvcmVzdC9zZXJ2ZXIucGhwXCIsIHtcbiAgICAgIHNlYXJjaFBhcmFtczogcXMuc3RyaW5naWZ5KHtcbiAgICAgICAgd3NmdW5jdGlvbixcbiAgICAgICAgLi4uc2VhcmNoUGFyYW1zLFxuICAgICAgfSksXG4gICAgICByZXNwb25zZVR5cGU6IFwianNvblwiLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGhhbmRsZVJlc3BvbnNlKHtcbiAgICAgIGdldEh0dHBSZXNwb25zZTogKCkgPT4gcmVzcG9uc2UsXG4gICAgICAuLi4ocmVzcG9uc2UuYm9keSBhcyBhbnkpLFxuICAgIH0pO1xuICB9XG59XG4iXX0=