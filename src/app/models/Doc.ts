import {User} from "./User";

export interface Doc
{
    type: string;
    fileUrl: string;
    patient ?: User;
    doctor ?: User;
    id ?: number;
}
