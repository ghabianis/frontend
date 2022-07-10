import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {AbstractRestService} from "../../services/genericservice";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-our-doctors',
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.css']
})
export class OurDoctorsComponent implements OnInit {
    doctors !: User[];
    role !: string;
    private path = `${environment.url}/doctors`;
    speciality !: string;
  constructor(private service: AbstractRestService<User>) {}

  ngOnInit(): void {
      const role = localStorage.getItem('role');
      if(role !== null)
      {
          this.role = role;
      }

      this.service.list(this.path, {
          params: {
              role: 'doctor'
          }
      }).subscribe((response) => {this.doctors = response});
      //
      // this.doctors = [
      //     {
      //         id: 1,
      //         firstname: 'omar',
      //         lastname: 'triki',
      //         email: 'omartriki712@gmail.com',
      //         avatarUrl: '/assets/img/doctors/omar.png',
      //         speciality: 'medecin generale',
      //         telephone: '+216127616'
      //     },
      //     {
      //         id: 2,
      //         firstname: 'ahmed',
      //         lastname: 'triki',
      //         email: 'ahmedtriki712@gmail.com',
      //         avatarUrl: '/assets/img/doctors/ahmed.jpg',
      //         speciality: 'medecin generale',
      //         telephone: '+216127615'
      //     },
      //     {
      //         id: 3,
      //         firstname: 'rim',
      //         lastname: 'zouhairi',
      //         email: 'zouhairirim712@gmail.com',
      //         avatarUrl: '/assets/img/doctors/rim.jpg',
      //         speciality: 'medecin generale',
      //         telephone: '+21644320549'
      //     },
      //     {
      //         id: 4,
      //         firstname: 'rami',
      //         lastname: 'triki',
      //         email: 'ramitriki712@gmail.com',
      //         avatarUrl: '/assets/img/doctors/rami.jpg',
      //         speciality: 'medecin generale',
      //         telephone: '+216128616'
      //     }
      // ]
  }
  selectBySpeciality($event: Event)
  {
      $event.preventDefault();
      this.service.list(this.path, {
          params: {
              speciality: this.speciality
          }
      }).subscribe((response) => {this.doctors = response});
  }
}
