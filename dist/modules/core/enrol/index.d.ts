import { FunctionResponse } from "../../../functions";
import Module from "../../../module";
import { Option } from "../../shared";
import { GetEnrolledUsersResponse } from "./get-enrolled-users";
import { EnrolmentInput } from "./manuel-enrol-users";
import { EnrolmentFormData } from "./submit-user-enrolment-form";
/**
 * Functions for course-related actions in Moodle.
 *
 * @extends Module
 */
export default class EnrolModule extends Module {
    getEnrolledUsers(courseId: number, options?: Option[]): Promise<GetEnrolledUsersResponse>;
    manualEnrolUsers(enrolments: EnrolmentInput[]): Promise<FunctionResponse>;
    manualUnenrolUsers(enrolments: EnrolmentInput[]): Promise<FunctionResponse>;
    submitUserEnrolmentForm(formdata: EnrolmentFormData): Promise<FunctionResponse>;
}
