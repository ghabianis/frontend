import {Availability} from "./Availability";
import {User} from "./User";

export interface AvailabilityGet extends Availability
{
    doctor: User;
}
