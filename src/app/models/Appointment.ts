import {User} from "./User";
import {Availability} from "./Availability";

export interface Appointment
{
    dateCreation: Date | string;
    status: boolean;
    subject: string;
    id ?: number;
    patient ?: User;
    availability ?: Availability;
}
