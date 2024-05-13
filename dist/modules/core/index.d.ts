/**
 * @vuepress
 * ---
 * title: core
 * ---
 */
import Module from "../../module";
import WebServiceModule from "./webservice";
import UserModule from "./user";
import RoleModule from "./role";
import { Client } from "../../client";
import CourseModule from "./course";
import EnrolModule from "./enrol";
/**
 * Functions relating to core Moodle operations.
 *
 * @since 0.2.0
 * @extends Module
 */
export default class CoreModule extends Module {
    /**
     * The module containing functions relating to system actions.
     *
     * @since 0.2.0
     */
    readonly webservice: WebServiceModule;
    /**
     * The module containing functions for user-related actions.
     *
     * @since 0.2.0
     */
    readonly user: UserModule;
    /**
     * The module containing functions for assigning and unassigning user roles.
     *
     * @since 0.2.1
     */
    readonly role: RoleModule;
    /**
     * The module containing functions for course-related actions.
     */
    readonly course: CourseModule;
    /**
     * The module containing functions for enrolment-related actions.
     */
    readonly enrol: EnrolModule;
    /**
     * Initializes the module.
     *
     * @param client The parent client of this module.
     *
     * @since 0.2.0
     */
    constructor(client: Client);
}
