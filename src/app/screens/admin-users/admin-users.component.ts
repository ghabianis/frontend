import { Component, OnInit } from '@angular/core';
import {AbstractRestService} from "../../services/genericservice";
import {User} from "../../models/User";
import {SecureStorageService} from "../../services/secure-storage.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
    numberDoctors !: number;
    numberPatients !: number;
    users !: User[];
    private path = `${environment.url}/users`;
  constructor(private service: AbstractRestService<User>, private secureStorageService: SecureStorageService) { }

  ngOnInit(): void {
      this.numberDoctors = this.numberPatients = 0;
      this.users = [];
      this.service.list(this.path).subscribe((response) => {
          response.forEach(user => {
              this.users.push(user);
              if(user.role === 'doctor')
              {
                  this.numberDoctors++;
              } else if (user.role == 'patient')
              {
                  this.numberPatients ++;
              }
          })
          this.users = response;
      });
  }
}
