import { FunctionResponse } from "../../../functions";
import { Option } from "../../shared";
export interface DuplicateCourseInput {
    courseId: number;
    categoryId: number;
    fullname: string;
    shortname: string;
    visible?: boolean;
    options?: Option[];
}
export interface DuplicateCourseResponse extends FunctionResponse {
    /**
     * The id of the course.
     */
    id: number;
    /**
     * The short name of the course.
     */
    shortname: string;
}
