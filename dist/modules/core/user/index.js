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
 * Functions for user-related actions.
 *
 * @since 0.2.0
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
    key: "agreeSitePolicy",

    /**
     * Agrees to the Moodle site policy for the current web service user.
     *
     * @returns {Promise<SitePolicyAgreementResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */
    value: function () {
      var _agreeSitePolicy = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.client.invoke("core_user_agree_site_policy");

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function agreeSitePolicy() {
        return _agreeSitePolicy.apply(this, arguments);
      }

      return agreeSitePolicy;
    }()
    /**
     * Creates users and adds them to the Moodle site.
     *
     * @param users The users to create.
     *
     * @returns {Promise<CreateUsersResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */

  }, {
    key: "createUsers",
    value: function () {
      var _createUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _len,
            users,
            _key,
            response,
            response1,
            _args2 = arguments;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len = _args2.length, users = new Array(_len), _key = 0; _key < _len; _key++) {
                  users[_key] = _args2[_key];
                }

                _context2.next = 3;
                return this.client.invoke("core_user_create_users", {
                  users: users
                });

              case 3:
                response = _context2.sent;
                response1 = {
                  users: [],
                  getHttpResponse: response.getHttpResponse
                };
                response1.users = Object.values(response).filter(function (value) {
                  return typeof value !== "function";
                });
                return _context2.abrupt("return", response1);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createUsers() {
        return _createUsers.apply(this, arguments);
      }

      return createUsers;
    }()
    /**
     * Deletes users from the Moodle site.
     *
     * @param {number[]} users The IDs of the users to delete.
     *
     * @returns {Promise<FunctionResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */

  }, {
    key: "deleteUsers",
    value: function () {
      var _deleteUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _len2,
            users,
            _key2,
            _args3 = arguments;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                for (_len2 = _args3.length, users = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  users[_key2] = _args3[_key2];
                }

                _context3.next = 3;
                return this.client.invoke("core_user_delete_users", {
                  userids: users
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteUsers() {
        return _deleteUsers.apply(this, arguments);
      }

      return deleteUsers;
    }()
    /**
     * Gets the course profiles for users.
     *
     * @param {CourseUser[]} users The users (comprising of user ID and course ID) to lookup.
     *
     * @returns {Promise<GetCourseUserProfilesResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */

  }, {
    key: "getCourseUserProfiles",
    value: function () {
      var _getCourseUserProfiles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _len3,
            users,
            _key3,
            response,
            profiles,
            _args4 = arguments;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                for (_len3 = _args4.length, users = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  users[_key3] = _args4[_key3];
                }

                _context4.next = 3;
                return this.client.invoke("core_user_get_course_user_profiles", {
                  userlist: users
                });

              case 3:
                response = _context4.sent;
                profiles = {
                  profiles: [],
                  getHttpResponse: response.getHttpResponse
                };
                profiles.profiles = Object.values(response).filter(function (value) {
                  return typeof value !== "function";
                });
                return _context4.abrupt("return", profiles);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getCourseUserProfiles() {
        return _getCourseUserProfiles.apply(this, arguments);
      }

      return getCourseUserProfiles;
    }()
    /**
     * Returns general information about files in a user's private files area.
     *
     * @param {number} [user] The ID of the user to lookup file info on. If none is provided, the ID of the web service
     *                        user is used.
     *
     * @returns {Promise<GetPrivateFilesInfoResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */

  }, {
    key: "getPrivateFilesInfo",
    value: function () {
      var _getPrivateFilesInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(user) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.client.invoke("core_user_get_private_files_info", {
                  userid: user === undefined ? 0 : user
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getPrivateFilesInfo(_x) {
        return _getPrivateFilesInfo.apply(this, arguments);
      }

      return getPrivateFilesInfo;
    }()
    /**
     * Returns user preferences for a Moodle user.
     *
     * @param {string} [name] The name of the preference to lookup. If none is provided, all preferences are returned.
     * @param {number} [user] The ID of the user to lookup preferences for. If none is provided, the ID of the web service
     *                        user is used.
     *
     * @returns {Promise<GetUserPreferencesResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */

  }, {
    key: "getUserPreferences",
    value: function () {
      var _getUserPreferences = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(name, user) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.client.invoke("core_user_get_user_preferences", {
                  name: name,
                  userid: user === undefined ? 0 : user
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getUserPreferences(_x2, _x3) {
        return _getUserPreferences.apply(this, arguments);
      }

      return getUserPreferences;
    }()
    /**
     * Sets user preferences for Moodle users.
     *
     * @param {NewPreference[]} preferences The preferences to set.
     *
     * @returns {Promise<SetUserPreferencesResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */

  }, {
    key: "setUserPreferences",
    value: function () {
      var _setUserPreferences = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var _len4,
            preferences,
            _key4,
            _args7 = arguments;

        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                for (_len4 = _args7.length, preferences = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                  preferences[_key4] = _args7[_key4];
                }

                _context7.next = 3;
                return this.client.invoke("core_user_set_user_preferences", {
                  preferences: preferences
                });

              case 3:
                return _context7.abrupt("return", _context7.sent);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function setUserPreferences() {
        return _setUserPreferences.apply(this, arguments);
      }

      return setUserPreferences;
    }()
    /**
     * Searches for users on the Moodle site that match the provided criteria.
     *
     * @param {SearchCriteria[]} criteria The search criteria used to search for
     *                                    users.
     *
     * @returns {Promise<GetUsersResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */

  }, {
    key: "getUsers",
    value: function () {
      var _getUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var _len5,
            criteria,
            _key5,
            _args8 = arguments;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                for (_len5 = _args8.length, criteria = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                  criteria[_key5] = _args8[_key5];
                }

                _context8.next = 3;
                return this.client.invoke("core_user_get_users", {
                  criteria: criteria
                });

              case 3:
                return _context8.abrupt("return", _context8.sent);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getUsers() {
        return _getUsers.apply(this, arguments);
      }

      return getUsers;
    }()
    /**
     * Searches for users on the Moodle site that match a specific field value.
     *
     * @param {"id" | "idnumber" | "username" | "email"} field  The name of the
     *                                                          field to search for.
     * @param                                            values The value to search
     *                                                          users' fields for.
     *
     * @returns {Promise<GetUsersByFieldResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */

  }, {
    key: "getUsersByField",
    value: function () {
      var _getUsersByField = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(field) {
        var _len6,
            values,
            _key6,
            response,
            users,
            _args9 = arguments;

        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                for (_len6 = _args9.length, values = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                  values[_key6 - 1] = _args9[_key6];
                }

                _context9.next = 3;
                return this.client.invoke("core_user_get_users_by_field", {
                  field: field,
                  values: values
                });

              case 3:
                response = _context9.sent;
                users = {
                  users: [],
                  getHttpResponse: response.getHttpResponse
                };
                users.users = Object.values(response).filter(function (value) {
                  return typeof value !== "function";
                });
                return _context9.abrupt("return", users);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getUsersByField(_x4) {
        return _getUsersByField.apply(this, arguments);
      }

      return getUsersByField;
    }()
    /**
     * Updates a user's profile picture.
     *
     * @param {number} draftItemId The ID of the draft file to use as the picture.
     * @param {number} [user]      The ID of the user to update the picture of. If
     *                             none is provided, the ID of the web service user
     *                             is used.
     *
     * @returns {Promise<UserPictureResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */

  }, {
    key: "updateUserPicture",
    value: function () {
      var _updateUserPicture = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(draftItemId, user) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.client.invoke("core_user_update_picture", {
                  draftitemid: draftItemId,
                  userid: user === undefined ? 0 : user
                });

              case 2:
                return _context10.abrupt("return", _context10.sent);

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function updateUserPicture(_x5, _x6) {
        return _updateUserPicture.apply(this, arguments);
      }

      return updateUserPicture;
    }()
    /**
     * Deletes a user's profile picture.
     *
     * @param {number} [user] The ID of the user to delete the picture of. If none
     *                        is provided, the ID of the web service user is used.
     *
     * @returns {Promise<UserPictureResponse>} The response returned by Moodle.
     *
     * @since 0.2.0
     * @async
     */

  }, {
    key: "deleteUserPicture",
    value: function () {
      var _deleteUserPicture = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(user) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.client.invoke("core_user_update_picture", {
                  draftitemid: 0,
                  "delete": 1,
                  userid: user === undefined ? 0 : user
                });

              case 2:
                return _context11.abrupt("return", _context11.sent);

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function deleteUserPicture(_x7) {
        return _deleteUserPicture.apply(this, arguments);
      }

      return deleteUserPicture;
    }()
  }]);
  return UserModule;
}(_module["default"]);

exports["default"] = UserModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvcmUvdXNlci9pbmRleC50cyJdLCJuYW1lcyI6WyJVc2VyTW9kdWxlIiwiY2xpZW50IiwiaW52b2tlIiwidXNlcnMiLCJyZXNwb25zZSIsInJlc3BvbnNlMSIsImdldEh0dHBSZXNwb25zZSIsIk9iamVjdCIsInZhbHVlcyIsImZpbHRlciIsInZhbHVlIiwidXNlcmlkcyIsInVzZXJsaXN0IiwicHJvZmlsZXMiLCJ1c2VyIiwidXNlcmlkIiwidW5kZWZpbmVkIiwibmFtZSIsInByZWZlcmVuY2VzIiwiY3JpdGVyaWEiLCJmaWVsZCIsImRyYWZ0SXRlbUlkIiwiZHJhZnRpdGVtaWQiLCJNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7QUFDbkI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7dUJBRWtCLEtBQUtDLE1BQUwsQ0FBWUMsTUFBWixDQUNaLDZCQURZLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQUVPQyxLO0FBQUFBLGtCQUFBQSxLOzs7O3VCQUVxQixLQUFLRixNQUFMLENBQVlDLE1BQVosQ0FBbUIsd0JBQW5CLEVBQTZDO0FBQ25FQyxrQkFBQUEsS0FBSyxFQUFMQTtBQURtRSxpQkFBN0MsQzs7O0FBQWxCQyxnQkFBQUEsUTtBQUlBQyxnQkFBQUEsUyxHQUFpQztBQUNyQ0Ysa0JBQUFBLEtBQUssRUFBRSxFQUQ4QjtBQUVyQ0csa0JBQUFBLGVBQWUsRUFBRUYsUUFBUSxDQUFDRTtBQUZXLGlCO0FBS3ZDRCxnQkFBQUEsU0FBUyxDQUFDRixLQUFWLEdBQWtCSSxNQUFNLENBQUNDLE1BQVAsQ0FBY0osUUFBZCxFQUF3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Y2VzQ29udGVudCI6WyIvKipcbiAqIEB2dWVwcmVzc1xuICogLS0tXG4gKiB0aXRsZTogY29yZS51c2VyXG4gKiAtLS1cbiAqL1xuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlXCI7XG5pbXBvcnQgeyBGdW5jdGlvblJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uLy4uL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgU2l0ZVBvbGljeUFncmVlbWVudFJlc3BvbnNlIH0gZnJvbSBcIi4vYWdyZWUtc2l0ZS1wb2xpY3lcIjtcbmltcG9ydCB7XG4gIFVzZXJQcm92aWRlZFBhc3N3b3JkLFxuICBVc2VyR2VuZXJhdGVkUGFzc3dvcmQsXG4gIENyZWF0ZVVzZXJzUmVzcG9uc2UsXG59IGZyb20gXCIuL2NyZWF0ZS11c2Vyc1wiO1xuaW1wb3J0IHtcbiAgQ291cnNlVXNlcixcbiAgR2V0Q291cnNlVXNlclByb2ZpbGVzUmVzcG9uc2UsXG59IGZyb20gXCIuL2dldC1jb3Vyc2UtdXNlci1wcm9maWxlc1wiO1xuaW1wb3J0IHsgR2V0UHJpdmF0ZUZpbGVzSW5mb1Jlc3BvbnNlIH0gZnJvbSBcIi4vZ2V0LXByaXZhdGUtZmlsZXMtaW5mb1wiO1xuaW1wb3J0IHsgR2V0VXNlclByZWZlcmVuY2VzUmVzcG9uc2UgfSBmcm9tIFwiLi9nZXQtdXNlci1wcmVmZXJlbmNlc1wiO1xuaW1wb3J0IHtcbiAgTmV3UHJlZmVyZW5jZSxcbiAgU2V0VXNlclByZWZlcmVuY2VzUmVzcG9uc2UsXG59IGZyb20gXCIuL3NldC11c2VyLXByZWZlcmVuY2VzXCI7XG5pbXBvcnQgeyBTZWFyY2hDcml0ZXJpYSwgR2V0VXNlcnNSZXNwb25zZSB9IGZyb20gXCIuL2dldC11c2Vyc1wiO1xuaW1wb3J0IHsgR2V0VXNlcnNCeUZpZWxkUmVzcG9uc2UgfSBmcm9tIFwiLi9nZXQtdXNlcnMtYnktZmllbGRcIjtcbmltcG9ydCB7IFVzZXJQaWN0dXJlUmVzcG9uc2UgfSBmcm9tIFwiLi91c2VyLXBpY3R1cmVcIjtcblxuLyoqXG4gKiBGdW5jdGlvbnMgZm9yIHVzZXItcmVsYXRlZCBhY3Rpb25zLlxuICpcbiAqIEBzaW5jZSAwLjIuMFxuICogQGV4dGVuZHMgTW9kdWxlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNb2R1bGUgZXh0ZW5kcyBNb2R1bGUge1xuICAvKipcbiAgICogQWdyZWVzIHRvIHRoZSBNb29kbGUgc2l0ZSBwb2xpY3kgZm9yIHRoZSBjdXJyZW50IHdlYiBzZXJ2aWNlIHVzZXIuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFNpdGVQb2xpY3lBZ3JlZW1lbnRSZXNwb25zZT59IFRoZSByZXNwb25zZSByZXR1cm5lZCBieSBNb29kbGUuXG4gICAqXG4gICAqIEBzaW5jZSAwLjIuMFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyBhZ3JlZVNpdGVQb2xpY3koKTogUHJvbWlzZTxTaXRlUG9saWN5QWdyZWVtZW50UmVzcG9uc2U+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuY2xpZW50Lmludm9rZShcbiAgICAgIFwiY29yZV91c2VyX2FncmVlX3NpdGVfcG9saWN5XCJcbiAgICApKSBhcyBTaXRlUG9saWN5QWdyZWVtZW50UmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB1c2VycyBhbmQgYWRkcyB0aGVtIHRvIHRoZSBNb29kbGUgc2l0ZS5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJzIFRoZSB1c2VycyB0byBjcmVhdGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENyZWF0ZVVzZXJzUmVzcG9uc2U+fSBUaGUgcmVzcG9uc2UgcmV0dXJuZWQgYnkgTW9vZGxlLlxuICAgKlxuICAgKiBAc2luY2UgMC4yLjBcbiAgICogQGFzeW5jXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgY3JlYXRlVXNlcnMoXG4gICAgLi4udXNlcnM6IChVc2VyUHJvdmlkZWRQYXNzd29yZCB8IFVzZXJHZW5lcmF0ZWRQYXNzd29yZClbXVxuICApOiBQcm9taXNlPENyZWF0ZVVzZXJzUmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCB0aGlzLmNsaWVudC5pbnZva2UoXCJjb3JlX3VzZXJfY3JlYXRlX3VzZXJzXCIsIHtcbiAgICAgIHVzZXJzLFxuICAgIH0pKSBhcyBGdW5jdGlvblJlc3BvbnNlO1xuXG4gICAgY29uc3QgcmVzcG9uc2UxOiBDcmVhdGVVc2Vyc1Jlc3BvbnNlID0ge1xuICAgICAgdXNlcnM6IFtdLFxuICAgICAgZ2V0SHR0cFJlc3BvbnNlOiByZXNwb25zZS5nZXRIdHRwUmVzcG9uc2UsXG4gICAgfTtcblxuICAgIHJlc3BvbnNlMS51c2VycyA9IE9iamVjdC52YWx1ZXMocmVzcG9uc2UpLmZpbHRlcihcbiAgICAgICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCJcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHVzZXJzIGZyb20gdGhlIE1vb2RsZSBzaXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcltdfSB1c2VycyBUaGUgSURzIG9mIHRoZSB1c2VycyB0byBkZWxldGUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZ1bmN0aW9uUmVzcG9uc2U+fSBUaGUgcmVzcG9uc2UgcmV0dXJuZWQgYnkgTW9vZGxlLlxuICAgKlxuICAgKiBAc2luY2UgMC4yLjBcbiAgICogQGFzeW5jXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZGVsZXRlVXNlcnMoLi4udXNlcnM6IG51bWJlcltdKTogUHJvbWlzZTxGdW5jdGlvblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmNsaWVudC5pbnZva2UoXCJjb3JlX3VzZXJfZGVsZXRlX3VzZXJzXCIsIHtcbiAgICAgIHVzZXJpZHM6IHVzZXJzLFxuICAgIH0pKSBhcyBGdW5jdGlvblJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGNvdXJzZSBwcm9maWxlcyBmb3IgdXNlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7Q291cnNlVXNlcltdfSB1c2VycyBUaGUgdXNlcnMgKGNvbXByaXNpbmcgb2YgdXNlciBJRCBhbmQgY291cnNlIElEKSB0byBsb29rdXAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEdldENvdXJzZVVzZXJQcm9maWxlc1Jlc3BvbnNlPn0gVGhlIHJlc3BvbnNlIHJldHVybmVkIGJ5IE1vb2RsZS5cbiAgICpcbiAgICogQHNpbmNlIDAuMi4wXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldENvdXJzZVVzZXJQcm9maWxlcyhcbiAgICAuLi51c2VyczogQ291cnNlVXNlcltdXG4gICk6IFByb21pc2U8R2V0Q291cnNlVXNlclByb2ZpbGVzUmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCB0aGlzLmNsaWVudC5pbnZva2UoXG4gICAgICBcImNvcmVfdXNlcl9nZXRfY291cnNlX3VzZXJfcHJvZmlsZXNcIixcbiAgICAgIHtcbiAgICAgICAgdXNlcmxpc3Q6IHVzZXJzLFxuICAgICAgfVxuICAgICkpIGFzIEZ1bmN0aW9uUmVzcG9uc2U7XG5cbiAgICBjb25zdCBwcm9maWxlczogR2V0Q291cnNlVXNlclByb2ZpbGVzUmVzcG9uc2UgPSB7XG4gICAgICBwcm9maWxlczogW10sXG4gICAgICBnZXRIdHRwUmVzcG9uc2U6IHJlc3BvbnNlLmdldEh0dHBSZXNwb25zZSxcbiAgICB9O1xuXG4gICAgcHJvZmlsZXMucHJvZmlsZXMgPSBPYmplY3QudmFsdWVzKHJlc3BvbnNlKS5maWx0ZXIoXG4gICAgICAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiXG4gICAgKTtcblxuICAgIHJldHVybiBwcm9maWxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGdlbmVyYWwgaW5mb3JtYXRpb24gYWJvdXQgZmlsZXMgaW4gYSB1c2VyJ3MgcHJpdmF0ZSBmaWxlcyBhcmVhLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3VzZXJdIFRoZSBJRCBvZiB0aGUgdXNlciB0byBsb29rdXAgZmlsZSBpbmZvIG9uLiBJZiBub25lIGlzIHByb3ZpZGVkLCB0aGUgSUQgb2YgdGhlIHdlYiBzZXJ2aWNlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgdXNlciBpcyB1c2VkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZXRQcml2YXRlRmlsZXNJbmZvUmVzcG9uc2U+fSBUaGUgcmVzcG9uc2UgcmV0dXJuZWQgYnkgTW9vZGxlLlxuICAgKlxuICAgKiBAc2luY2UgMC4yLjBcbiAgICogQGFzeW5jXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0UHJpdmF0ZUZpbGVzSW5mbyhcbiAgICB1c2VyPzogbnVtYmVyXG4gICk6IFByb21pc2U8R2V0UHJpdmF0ZUZpbGVzSW5mb1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmNsaWVudC5pbnZva2UoXCJjb3JlX3VzZXJfZ2V0X3ByaXZhdGVfZmlsZXNfaW5mb1wiLCB7XG4gICAgICB1c2VyaWQ6IHVzZXIgPT09IHVuZGVmaW5lZCA/IDAgOiB1c2VyLFxuICAgIH0pKSBhcyBHZXRQcml2YXRlRmlsZXNJbmZvUmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB1c2VyIHByZWZlcmVuY2VzIGZvciBhIE1vb2RsZSB1c2VyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIFRoZSBuYW1lIG9mIHRoZSBwcmVmZXJlbmNlIHRvIGxvb2t1cC4gSWYgbm9uZSBpcyBwcm92aWRlZCwgYWxsIHByZWZlcmVuY2VzIGFyZSByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFt1c2VyXSBUaGUgSUQgb2YgdGhlIHVzZXIgdG8gbG9va3VwIHByZWZlcmVuY2VzIGZvci4gSWYgbm9uZSBpcyBwcm92aWRlZCwgdGhlIElEIG9mIHRoZSB3ZWIgc2VydmljZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgaXMgdXNlZC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8R2V0VXNlclByZWZlcmVuY2VzUmVzcG9uc2U+fSBUaGUgcmVzcG9uc2UgcmV0dXJuZWQgYnkgTW9vZGxlLlxuICAgKlxuICAgKiBAc2luY2UgMC4yLjBcbiAgICogQGFzeW5jXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0VXNlclByZWZlcmVuY2VzKFxuICAgIG5hbWU/OiBzdHJpbmcsXG4gICAgdXNlcj86IG51bWJlclxuICApOiBQcm9taXNlPEdldFVzZXJQcmVmZXJlbmNlc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmNsaWVudC5pbnZva2UoXCJjb3JlX3VzZXJfZ2V0X3VzZXJfcHJlZmVyZW5jZXNcIiwge1xuICAgICAgbmFtZSxcbiAgICAgIHVzZXJpZDogdXNlciA9PT0gdW5kZWZpbmVkID8gMCA6IHVzZXIsXG4gICAgfSkpIGFzIEdldFVzZXJQcmVmZXJlbmNlc1Jlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXNlciBwcmVmZXJlbmNlcyBmb3IgTW9vZGxlIHVzZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge05ld1ByZWZlcmVuY2VbXX0gcHJlZmVyZW5jZXMgVGhlIHByZWZlcmVuY2VzIHRvIHNldC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8U2V0VXNlclByZWZlcmVuY2VzUmVzcG9uc2U+fSBUaGUgcmVzcG9uc2UgcmV0dXJuZWQgYnkgTW9vZGxlLlxuICAgKlxuICAgKiBAc2luY2UgMC4yLjBcbiAgICogQGFzeW5jXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2V0VXNlclByZWZlcmVuY2VzKFxuICAgIC4uLnByZWZlcmVuY2VzOiBOZXdQcmVmZXJlbmNlW11cbiAgKTogUHJvbWlzZTxTZXRVc2VyUHJlZmVyZW5jZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5jbGllbnQuaW52b2tlKFwiY29yZV91c2VyX3NldF91c2VyX3ByZWZlcmVuY2VzXCIsIHtcbiAgICAgIHByZWZlcmVuY2VzLFxuICAgIH0pKSBhcyBTZXRVc2VyUHJlZmVyZW5jZXNSZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3IgdXNlcnMgb24gdGhlIE1vb2RsZSBzaXRlIHRoYXQgbWF0Y2ggdGhlIHByb3ZpZGVkIGNyaXRlcmlhLlxuICAgKlxuICAgKiBAcGFyYW0ge1NlYXJjaENyaXRlcmlhW119IGNyaXRlcmlhIFRoZSBzZWFyY2ggY3JpdGVyaWEgdXNlZCB0byBzZWFyY2ggZm9yXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEdldFVzZXJzUmVzcG9uc2U+fSBUaGUgcmVzcG9uc2UgcmV0dXJuZWQgYnkgTW9vZGxlLlxuICAgKlxuICAgKiBAc2luY2UgMC4yLjBcbiAgICogQGFzeW5jXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0VXNlcnMoXG4gICAgLi4uY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhW11cbiAgKTogUHJvbWlzZTxHZXRVc2Vyc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmNsaWVudC5pbnZva2UoXCJjb3JlX3VzZXJfZ2V0X3VzZXJzXCIsIHtcbiAgICAgIGNyaXRlcmlhLFxuICAgIH0pKSBhcyBHZXRVc2Vyc1Jlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciB1c2VycyBvbiB0aGUgTW9vZGxlIHNpdGUgdGhhdCBtYXRjaCBhIHNwZWNpZmljIGZpZWxkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1wiaWRcIiB8IFwiaWRudW1iZXJcIiB8IFwidXNlcm5hbWVcIiB8IFwiZW1haWxcIn0gZmllbGQgIFRoZSBuYW1lIG9mIHRoZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCB0byBzZWFyY2ggZm9yLlxuICAgKiBAcGFyYW0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyBUaGUgdmFsdWUgdG8gc2VhcmNoXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzJyBmaWVsZHMgZm9yLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZXRVc2Vyc0J5RmllbGRSZXNwb25zZT59IFRoZSByZXNwb25zZSByZXR1cm5lZCBieSBNb29kbGUuXG4gICAqXG4gICAqIEBzaW5jZSAwLjIuMFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyBnZXRVc2Vyc0J5RmllbGQoXG4gICAgZmllbGQ6IFwiaWRcIiB8IFwiaWRudW1iZXJcIiB8IFwidXNlcm5hbWVcIiB8IFwiZW1haWxcIixcbiAgICAuLi52YWx1ZXM6IChzdHJpbmcgfCBudW1iZXIpW11cbiAgKTogUHJvbWlzZTxHZXRVc2Vyc0J5RmllbGRSZXNwb25zZT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHRoaXMuY2xpZW50Lmludm9rZShcImNvcmVfdXNlcl9nZXRfdXNlcnNfYnlfZmllbGRcIiwge1xuICAgICAgZmllbGQsXG4gICAgICB2YWx1ZXMsXG4gICAgfSkpIGFzIEdldFVzZXJzQnlGaWVsZFJlc3BvbnNlO1xuXG4gICAgY29uc3QgdXNlcnM6IEdldFVzZXJzQnlGaWVsZFJlc3BvbnNlID0ge1xuICAgICAgdXNlcnM6IFtdLFxuICAgICAgZ2V0SHR0cFJlc3BvbnNlOiByZXNwb25zZS5nZXRIdHRwUmVzcG9uc2UsXG4gICAgfTtcblxuICAgIHVzZXJzLnVzZXJzID0gT2JqZWN0LnZhbHVlcyhyZXNwb25zZSkuZmlsdGVyKFxuICAgICAgKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIlxuICAgICk7XG5cbiAgICByZXR1cm4gdXNlcnM7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBhIHVzZXIncyBwcm9maWxlIHBpY3R1cmUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkcmFmdEl0ZW1JZCBUaGUgSUQgb2YgdGhlIGRyYWZ0IGZpbGUgdG8gdXNlIGFzIHRoZSBwaWN0dXJlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3VzZXJdICAgICAgVGhlIElEIG9mIHRoZSB1c2VyIHRvIHVwZGF0ZSB0aGUgcGljdHVyZSBvZi4gSWZcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgaXMgcHJvdmlkZWQsIHRoZSBJRCBvZiB0aGUgd2ViIHNlcnZpY2UgdXNlclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMgdXNlZC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8VXNlclBpY3R1cmVSZXNwb25zZT59IFRoZSByZXNwb25zZSByZXR1cm5lZCBieSBNb29kbGUuXG4gICAqXG4gICAqIEBzaW5jZSAwLjIuMFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyB1cGRhdGVVc2VyUGljdHVyZShcbiAgICBkcmFmdEl0ZW1JZDogbnVtYmVyLFxuICAgIHVzZXI/OiBudW1iZXJcbiAgKTogUHJvbWlzZTxVc2VyUGljdHVyZVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmNsaWVudC5pbnZva2UoXCJjb3JlX3VzZXJfdXBkYXRlX3BpY3R1cmVcIiwge1xuICAgICAgZHJhZnRpdGVtaWQ6IGRyYWZ0SXRlbUlkLFxuICAgICAgdXNlcmlkOiB1c2VyID09PSB1bmRlZmluZWQgPyAwIDogdXNlcixcbiAgICB9KSkgYXMgVXNlclBpY3R1cmVSZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgdXNlcidzIHByb2ZpbGUgcGljdHVyZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt1c2VyXSBUaGUgSUQgb2YgdGhlIHVzZXIgdG8gZGVsZXRlIHRoZSBwaWN0dXJlIG9mLiBJZiBub25lXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgaXMgcHJvdmlkZWQsIHRoZSBJRCBvZiB0aGUgd2ViIHNlcnZpY2UgdXNlciBpcyB1c2VkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxVc2VyUGljdHVyZVJlc3BvbnNlPn0gVGhlIHJlc3BvbnNlIHJldHVybmVkIGJ5IE1vb2RsZS5cbiAgICpcbiAgICogQHNpbmNlIDAuMi4wXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGRlbGV0ZVVzZXJQaWN0dXJlKHVzZXI/OiBudW1iZXIpOiBQcm9taXNlPFVzZXJQaWN0dXJlUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuY2xpZW50Lmludm9rZShcImNvcmVfdXNlcl91cGRhdGVfcGljdHVyZVwiLCB7XG4gICAgICBkcmFmdGl0ZW1pZDogMCxcbiAgICAgIGRlbGV0ZTogMSxcbiAgICAgIHVzZXJpZDogdXNlciA9PT0gdW5kZWZpbmVkID8gMCA6IHVzZXIsXG4gICAgfSkpIGFzIFVzZXJQaWN0dXJlUmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==