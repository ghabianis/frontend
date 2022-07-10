import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/User";
import {Router} from "@angular/router";
import { ApointmentService } from 'src/app/services/apointment.service';

@Component({
    selector: 'app-doctors', templateUrl: './doctors.component.html', styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
    @Input() rows !: User[];
    @Input() role !: string;

    constructor(private router: Router,private apointmentService : ApointmentService) {
    }

    ngOnInit(): void {
        this.getDoctors()
    }

    activateAccount(id: number | undefined) {
        console.log(id);
    }

    async goToAvailabilities(doctorId: number | undefined): Promise<void> {
        await this.router.navigate(['/availabilities-calendar', {doctorId: doctorId}])
    }
    doc: any
    getDoctors(){
        this.apointmentService.getpointement().subscribe(e=>{
            this.doc = e;
            console.log(this.doc)
        })
    }
}
