import { FunctionResponse } from "../../../functions";
/**
 * Represents a course format option.
 */
export interface CourseFormatOption {
    name: string;
    value: string;
}
/**
 * Represents a custom field in a course.
 */
export interface CustomField {
    name: string;
    shortname: string;
    type: string;
    valueraw: string;
    value: string;
}
/**
 * Represents a course item.
 */
export interface CourseItem {
    id: number;
    shortname: string;
    categoryid: number;
    categorysortorder?: number;
    fullname: string;
    displayname: string;
    idnumber?: string;
    summary: string;
    summaryformat: number;
    format: string;
    showgrades?: number;
    newsitems?: number;
    startdate: number;
    enddate: number;
    numsections?: number;
    maxbytes?: number;
    showreports?: number;
    visible?: number;
    hiddensections?: number;
    groupmode?: number;
    groupmodeforce?: number;
    defaultgroupingid?: number;
    timecreated?: number;
    timemodified?: number;
    enablecompletion?: number;
    completionnotify?: number;
    lang?: string;
    forcetheme?: string;
    courseformatoptions?: CourseFormatOption[];
    showactivitydates: number;
    showcompletionconditions: number;
    customfields?: CustomField[];
}
/**
 * Represents the response for getting courses.
 */
export interface GetCoursesResponse extends FunctionResponse {
    courses: CourseItem[];
}
