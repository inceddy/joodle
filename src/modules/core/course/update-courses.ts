import { FunctionResponse } from "../../../functions";
import { Warning } from "../../shared";

/**
 * Represents a course format option.
 */
interface CourseFormatOption {
  name: string;
  value: string;
}

/**
 * Represents a custom field in a course.
 */
interface CustomField {
  shortname: string;
  value: string;
}

/**
 * Represents a course item.
 */
export interface CourseItemForUpdate {
  id: number;
  fullname?: string;
  shortname?: string;
  categoryid?: number;
  idnumber?: string;
  summary?: string;
  summaryformat?: number;
  format?: string;
  showgrades?: number;
  newsitems?: number;
  startdate?: number;
  enddate?: number;
  numsections?: number;
  maxbytes?: number;
  showreports?: number;
  visible?: number;
  hiddensections?: number;
  groupmode?: number;
  groupmodeforce?: number;
  defaultgroupingid?: number;
  enablecompletion?: number;
  completionnotify?: number;
  lang?: string;
  forcetheme?: string;
  courseformatoptions?: CourseFormatOption[];
  customfields?: CustomField[];
}

/**
 * Represents the response for getting courses.
 */
export interface UpdateCoursesResponse extends FunctionResponse {
  warnings?: Warning[];
}
