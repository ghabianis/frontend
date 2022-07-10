import {Component, Input, OnInit} from '@angular/core';
import {AppointmentGet} from "../../models/AppintmentGet";
import {Appointment} from "../../models/Appointment";

@Component({
    selector: 'app-consultations',
    templateUrl: './consultations.component.html',
    styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent implements OnInit {
    @Input() rows !: Appointment[];
    @Input() role !: string;

    constructor() {
    }

    ngOnInit(): void {
        this.role = 'doctor';
        this.rows = [
            {
                id: 1,
                dateCreation: new Date('2014-01-02 22:01:02'),
                status: true,
                subject: 'i got a stomac ache',
                patient: {
                    firstname: 'omar',
                    lastname: 'triki',
                    email: 'omartriki712@gmail.com',
                    telephone: '24127616',
                    avatarUrl: ''
                },
                availability: {
                    dateTimeEnd: new Date('2014-02-01 22:01:02'),
                    dateTimeStart: new Date('2014-01-02 22:01:02'),
                    doctor:
                        {
                            firstname: '',
                            lastname: '',
                            email: '',
                            avatarUrl: '',
                            telephone: ''
                        }
                }
            },
            {
                id: 1,
                dateCreation: new Date('2014-01-02 10:02:02'),
                status: true,
                subject: 'i got a had aches',
                patient: {
                    firstname: 'omar',
                    lastname: 'triki',
                    email: 'omartriki712@gmail.com',
                    telephone: '24127616',
                    avatarUrl: ''
                },
                availability: {
                    dateTimeEnd: new Date('2014-02-01 22:01:02'),
                    dateTimeStart: new Date('2014-01-02 22:01:02'),
                    doctor:
                        {
                            firstname: '',
                            lastname: '',
                            email: '',
                            avatarUrl: '',
                            telephone: ''
                        }
                }
            }
        ]
        this.role = 'doctor';
    }

    delete(id: number | undefined, i: number) {

    }
}
