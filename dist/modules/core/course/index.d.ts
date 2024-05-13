import Module from "../../../module";
import { DuplicateCourseResponse, DuplicateCourseInput } from "./duplicate-course";
import { CourseItemForUpdate, UpdateCoursesResponse } from "./update-courses";
/**
 * Functions for course-related actions in Moodle.
 *
 * @extends Module
 */
export default class CourseModule extends Module {
    duplicateCourse(input: DuplicateCourseInput): Promise<DuplicateCourseResponse>;
    getCourses(ids?: number[]): Promise<any>;
    updateCourses(courses: CourseItemForUpdate[]): Promise<UpdateCoursesResponse>;
}
