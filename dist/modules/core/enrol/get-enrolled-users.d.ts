import { FunctionResponse } from "../../../functions";
interface CustomField {
    type: string;
    value: string;
    name: string;
    shortname: string;
}
interface Group {
    id: number;
    name: string;
    description: string;
    descriptionformat: number;
}
interface Role {
    roleid: number;
    name: string;
    shortname: string;
    sortorder: number;
}
interface Preference {
    name: string;
    value: string;
}
interface Course {
    id: number;
    fullname: string;
    shortname: string;
}
export interface EnrolledUser {
    id: number;
    username?: string;
    firstname?: string;
    lastname?: string;
    fullname: string;
    email?: string;
    address?: string;
    phone1?: string;
    phone2?: string;
    department?: string;
    institution?: string;
    idnumber?: string;
    interests?: string;
    firstaccess?: number;
    lastaccess?: number;
    lastcourseaccess?: number;
    description?: string;
    descriptionformat?: number;
    city?: string;
    country?: string;
    profileimageurlsmall?: string;
    profileimageurl?: string;
    customfields?: CustomField[];
    groups?: Group[];
    roles?: Role[];
    preferences?: Preference[];
    enrolledcourses?: Course[];
}
export interface GetEnrolledUsersResponse extends FunctionResponse {
    users: EnrolledUser[];
}
export {};
