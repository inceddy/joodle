import nock from "nock";
import { Joodle } from "../../../src";

describe("The core.enrol module", () => {
  const baseURL = "https://moodle.example.com/";
  const token = "abc123";
  const invalidToken = "xyz789";
  let joodle: Joodle;

  const error = {
    exception: "webservice_access_exception",
    errorcode: "accessexception",
    message: "Access control exception (Access to the function is not allowed.",
    debuginfo: "Access to the function is not allowed.",
  };

  const successResponseGetEnrolledUsers = [
    {
      id: 2,
      username: "admin",
      firstname: "Admin",
      lastname: "User",
      fullname: "Admin User",
      email: "changeme@moodle.example.com",
      department: "",
      firstaccess: 1699538454,
      lastaccess: 1714121600,
      lastcourseaccess: 1706010124,
      description: "",
      descriptionformat: 1,
      profileimageurlsmall:
        "https://moodle.example.com/theme/image.php/base/core/1707745314/u/f1",
      profileimageurl:
        "https://moodle.example.com/theme/image.php/base/core/1707745314/u/f1",
      roles: [
        {
          roleid: 5,
          name: "",
          shortname: "student",
          sortorder: 0,
        },
      ],
      preferences: [
        {
          name: "auth_forcepasswordchange",
          value: "0",
        },
      ],
      enrolledcourses: [
        {
          id: 7,
          fullname: "Testkurs 3 copy 1",
          shortname: "TK3_1",
        },
      ],
    },
  ];

  beforeAll(() => {
    joodle = new Joodle({
      baseURL,
      token,
    });

    // Mock the core_enrol_get_enrolled_users
    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_enrol_get_enrolled_users&courseid=2&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, successResponseGetEnrolledUsers);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_course_view_course&courseId=1&categoryId=2&fullname=Test+Course&shortname=test&visible=1&wstoken=${invalidToken}&moodlewsrestformat=json`
      )
      .reply(200, error);

    // Mock the core_enrol_manual_enrol_users
    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=enrol_manual_unenrol_users&enrolments%5B0%5D%5Buserid%5D=1&enrolments%5B0%5D%5Bcourseid%5D=2&enrolments%5B0%5D%5Broleid%5D=5&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        warnings: [],
      });
  });

  // Get enrolled users
  describe("the getEnrolledUsers() function", () => {
    it("should handle successful responses", async () => {
      const repsonse = await joodle.modules.core.enrol.getEnrolledUsers(2);
      expect(repsonse).toBe(successResponseGetEnrolledUsers);
    });
  });

  // Manual enrol users
  describe("the manualEnrolUsers() function", () => {
    it("should handle successful responses", async () => {
      const response = await joodle.modules.core.enrol.manualEnrolUsers([
        {
          userid: 1,
          courseid: 2,
          roleid: 5,
        },
      ]);
      expect(response.users).toBeUndefined();
    });
  });

  // Update enrollment
  describe("the submitUserEnrolmentForm() function", () => {
    it("should handle successful responses", async () => {
      const response = await joodle.modules.core.enrol.submitUserEnrolmentForm({
        ue: 10,
        ifilter: 0,
        status: 1,
        /*
                timestart: {
                    day: 1,
                    month: 1,
                    year: 2000,
                    hour: 0,
                    minute: 0,
                    enabled: 1
                },
                timeend: {
                    day: 31,
                    month: 12,
                    year: 2000,
                    hour: 0,
                    minute: 0,
                    enabled: 1
                }
                */
      });
      expect(response).toBeUndefined();
    });
  });
});
