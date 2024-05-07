import nock from "nock";
import { Joodle } from "../../../src";

describe("The core.course module", () => {
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

  const successResponseGetCourses = [
    {
      id: 1,
      shortname: "LMS",
      categoryid: 0,
      categorysortorder: 1,
      fullname: "LMS",
      displayname: "LMS",
      idnumber: "",
      summary: "",
      summaryformat: 1,
      format: "site",
      showgrades: 1,
      newsitems: 3,
      startdate: 0,
      enddate: 0,
      numsections: 0,
      maxbytes: 0,
      showreports: 0,
      visible: 1,
      groupmode: 0,
      groupmodeforce: 0,
      defaultgroupingid: 0,
      timecreated: 1699538183,
      timemodified: 1701295366,
      enablecompletion: 0,
      completionnotify: 0,
      lang: "",
      forcetheme: "",
      courseformatoptions: [{ name: "numsections", value: 0 }],
      showactivitydates: false,
      showcompletionconditions: null,
    },
    {
      id: 2,
      shortname: "Moodle Features Demo",
      categoryid: 1,
      categorysortorder: 10004,
      fullname: "Moodle Features Demo",
      displayname: "Moodle Features Demo",
      idnumber: "",
      summary:
        "This course outlines Moodle's features by providing examples of activities and resources.",
      summaryformat: 1,
      format: "topics",
      showgrades: 1,
      newsitems: 5,
      startdate: 1263427200,
      enddate: 0,
      numsections: 14,
      maxbytes: 2097152,
      showreports: 0,
      visible: 1,
      hiddensections: 0,
      groupmode: 0,
      groupmodeforce: 0,
      defaultgroupingid: 0,
      timecreated: 1218464301,
      timemodified: 1561473008,
      enablecompletion: 1,
      completionnotify: 0,
      lang: "",
      forcetheme: "",
      courseformatoptions: [
        { name: "hiddensections", value: 0 },
        { name: "coursedisplay", value: 0 },
      ],
      showactivitydates: true,
      showcompletionconditions: true,
    },
  ];

  beforeAll(() => {
    joodle = new Joodle({
      baseURL,
      token,
    });

    // Mock the core_course_view_course function
    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_course_view_course&courseId=1&categoryId=2&fullname=Test+Course&shortname=test&visible=1&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        id: 123,
        shortname: "test",
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_course_view_course&courseId=1&categoryId=2&fullname=Test+Course&shortname=test&visible=1&wstoken=${invalidToken}&moodlewsrestformat=json`
      )
      .reply(200, error);

    // Mock the core_course_get_courses function
    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_course_get_courses&options%5Bids%5D%5B0%5D=1&options%5Bids%5D%5B1%5D=2&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, successResponseGetCourses);

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_course_get_courses&options%5Bids%5D%5B0%5D=1&options%5Bids%5D%5B1%5D=2&wstoken=${invalidToken}&moodlewsrestformat=json`
      )
      .reply(200, error);

    // Mock the core_course_update_courses function
    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_course_update_courses&courses%5B0%5D%5Bid%5D=2&courses%5B0%5D%5Bfullname%5D=Moodle+Features+Demo&courses%5B0%5D%5Bshortname%5D=Moodle+Features+Demo+%28Test%29&wstoken=${token}&moodlewsrestformat=json`
      )
      .reply(200, {
        warnings: [],
      });

    nock(baseURL)
      .get(
        `/webservice/rest/server.php?wsfunction=core_course_update_courses&courses%5B0%5D%5Bid%5D=2&courses%5B0%5D%5Bfullname%5D=Moodle+Features+Demo&courses%5B0%5D%5Bshortname%5D=Moodle+Features+Demo+%28Test%29&wstoken=${invalidToken}&moodlewsrestformat=json`
      )
      .reply(200, error);
  });

  // Duplicate Course
  describe("the duplicateCourse() function", () => {
    const input = {
      courseId: 1,
      categoryId: 2,
      fullname: "Test Course",
      shortname: "test",
      visible: true,
    };

    it("should handle successful responses", async () => {
      const {
        id,
        shortname,
      } = await joodle.modules.core.course.duplicateCourse(input);
      expect(id).toEqual(123);
      expect(shortname).toEqual("test");
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.modules.core.course.duplicateCourse(input)
      ).rejects.toBeDefined();
    });
  });

  // Get Courses
  describe("the getCourses() function", () => {
    it("should handle successful responses", async () => {
      const response = await joodle.modules.core.course.getCourses([1, 2]);
      expect(response.courses).toEqual(successResponseGetCourses);
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.modules.core.course.getCourses([1, 2])
      ).rejects.toBeDefined();
    });
  });

  // Update Courses
  describe("the updateCourses() function", () => {
    it("should handle successful responses", async () => {
      const response = await joodle.modules.core.course.updateCourses([
        {
          id: 2,
          fullname: "Moodle Features Demo",
          shortname: "Moodle Features Demo (Test)",
        },
      ]);
      expect(response.warnings).toEqual([]);
    });

    it("should handle erroneous responses", () => {
      return expect(
        joodle.modules.core.course.updateCourses([
          {
            id: 2,
            fullname: "Moodle Features Demo",
            shortname: "Moodle Features Demo (Test)",
          },
        ])
      ).rejects.toBeDefined();
    });
  });
});
