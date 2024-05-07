import qs from "qs";
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
  public async getEnrolledUsers(
    courseId: number,
    options?: Option[]
  ): Promise<GetEnrolledUsersResponse> {
    const response = await this.client.invoke("core_enrol_get_enrolled_users", {
      courseid: courseId,
      options,
    });

    const response1: GetEnrolledUsersResponse = {
      users: [],
      getHttpResponse: response.getHttpResponse,
    };

    response1.users = Object.values(response).filter(
      (value) => typeof value !== "function"
    );

    return response1;
  }

  public async manualEnrolUsers(
    enrolments: EnrolmentInput[]
  ): Promise<FunctionResponse> {
    return this.client.invoke("enrol_manual_enrol_users", {
      enrolments,
    });
  }

  public async manualUnenrolUsers(
    enrolments: EnrolmentInput[]
  ): Promise<FunctionResponse> {
    return this.client.invoke("enrol_manual_unenrol_users", {
      enrolments,
    });
  }

  public async submitUserEnrolmentForm(
    formdata: EnrolmentFormData
  ): Promise<FunctionResponse> {
    return this.client.invoke("core_enrol_submit_user_enrolment_form", {
      formdata: qs.stringify(formdata),
    });
  }
}
