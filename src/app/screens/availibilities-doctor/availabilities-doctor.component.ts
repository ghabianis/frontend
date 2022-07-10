import {Component, OnInit} from '@angular/core';
import {Availability} from "../../models/Availability";
import {AbstractRestService} from "../../services/genericservice";
import {environment} from "../../../environments/environment";
import {SecureStorageService} from "../../services/secure-storage.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-availabilities-doctor',
    templateUrl: './availabilities-doctor.component.html',
    styleUrls: ['./availabilities-doctor.component.css']
})
export class AvailabilitiesDoctorComponent implements OnInit {
    private path = `${environment.url}/availabilities`;
    formGroup !: FormGroup;
    availabilities !: Availability[];

    constructor(protected service: AbstractRestService<Availability>,
                protected secureStorageService: SecureStorageService) {
    }

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            dateTimeStart: new FormControl('', [Validators.required]),
            dateTimeEnd: new FormControl('', [Validators.required])
        });
        this.availabilities = [
            {
                id: 1,
                dateTimeStart: new Date('2014-02-04 10:30:25'),
                dateTimeEnd: new Date('2014-02-04 10:30:25')
            },
            {
                id: 2,
                dateTimeStart: new Date('2014-02-04 11:30:25'),
                dateTimeEnd: new Date('2014-02-04 10:30:25')
            },
            {
                id: 3,
                dateTimeStart: new Date('2014-02-04 12:30:14'),
                dateTimeEnd: new Date('2014-02-04 10:30:25')
            },
            {
                id: 4,
                dateTimeStart: new Date('2014-02-04 12:30:25'),
                dateTimeEnd: new Date('2014-02-04 10:30:25')
            }
        ]
    }

    submit($event: Event) {
        $event.preventDefault();
        const id = this.availabilities.length + 1;
        this.availabilities.push(
            {
                id,
                dateTimeStart: new Date(this.formGroup.value.dateTimeStart),
                dateTimeEnd: new Date(this.formGroup.value.dateTimeEnd)
            }
        )
    }

    delete(id: number | undefined, index: number) {
        if(id !== undefined)
        {
            this.availabilities.splice(index, 1);
        }
    }
}
