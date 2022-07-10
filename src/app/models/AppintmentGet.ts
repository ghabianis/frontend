import {User} from "./User";
import {AvailabilityGet} from "./AvailabilityGet";

export interface AppointmentGet
{
    dateCreation: Date | string;
    status: boolean;
    subject: string;
    patient: User;
    id ?: number;
    availability: AvailabilityGet;
}
