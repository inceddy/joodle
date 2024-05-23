import Module from "../../../module";
// import { AddContentItemToUserFavouritesResponse } from "./add-content-item-to-user-favourites";
import {
  DuplicateCourseResponse,
  DuplicateCourseInput,
} from "./duplicate-course";
import { GetCoursesResponse } from "./get-courses";
import { CourseItemForUpdate, UpdateCoursesResponse } from "./update-courses";

/**
 * Functions for course-related actions in Moodle.
 *
 * @extends Module
 */
export default class CourseModule extends Module {
  public async duplicateCourse(
    input: DuplicateCourseInput
  ): Promise<DuplicateCourseResponse> {
    return (await this.client.invoke("core_course_duplicate_course", {
      ...input,
      visible: input.visible ? 1 : 0,
    })) as DuplicateCourseResponse;
  }

  public async getCourses(ids?: number[]): Promise<any> {
    const response = await this.client.invoke("core_course_get_courses", {
      options: {
        ids,
      },
    });

    const response1: GetCoursesResponse = {
      courses: [],
      getHttpResponse: response.getHttpResponse,
    };

    response1.courses = Object.values(response).filter(
      (value) => typeof value !== "function"
    );

    return response1;
  }

  public async updateCourses(
    courses: CourseItemForUpdate[]
  ): Promise<UpdateCoursesResponse> {
    return (await this.client.invoke("core_course_update_courses", {
      courses,
    })) as UpdateCoursesResponse;
  }

  /*
    public async addContentItemToUserFavourites(componentName: string, contentItemId: number): Promise<AddContentItemToUserFavouritesResponse> {
        return (await this.client.invoke(
            "core_course_add_content_item_to_user_favourites",
            {
                componentName,
                contentItemId,
            }
        )) as AddContentItemToUserFavouritesResponse;
    }
    */
}
