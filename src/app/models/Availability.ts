import {User} from "./User";

export interface Availability {
    dateTimeStart: Date | string;
    dateTimeEnd: Date | string;
    id ?: number;
    doctor ?: User;
}
