import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {Doc} from "../../models/Doc";

@Component({
  selector: 'app-users-docs',
  templateUrl: './users-docs.component.html',
  styleUrls: ['./users-docs.component.css']
})
export class UsersDocsComponent implements OnInit {
    numberUsers !: number;
    users !: User[];
    role !: string;
    user !: string;
    documents !: Doc[];
    constructor() { }

  ngOnInit(): void {
      this.numberUsers = 0;
      this.role = 'patient';
      this.user = this.role === 'patient' ? 'médecin' : "patient";
      this.users = [
          {
              firstname: 'omar',
              lastname: 'triki',
              email: 'omartriki712@gmail.com',
              avatarUrl: 'assets/users/omar.jpg',
              speciality: 'médecin générale',
              telephone: '24127616'
          },
          {
              firstname: 'omar',
              lastname: 'triki',
              email: 'omartriki712@gmail.com',
              avatarUrl: 'assets/users/omar.jpg',
              speciality: 'médecin générale',
              telephone: '24127616'
          },
          {
              firstname: 'omar',
              lastname: 'triki',
              email: 'omartriki712@gmail.com',
              avatarUrl: 'assets/users/omar.jpg',
              speciality: 'médecin générale',
              telephone: '24127616'
          },
          {
              firstname: 'omar',
              lastname: 'triki',
              email: 'omartriki712@gmail.com',
              avatarUrl: 'assets/users/omar.jpg',
              speciality: 'médecin générale',
              telephone: '24127616'
          },
          {
              firstname: 'omar',
              lastname: 'triki',
              email: 'omartriki712@gmail.com',
              avatarUrl: 'assets/users/omar.jpg',
              speciality: 'médecin générale',
              telephone: '24127616'
          },          {
              firstname: 'omar',
              lastname: 'triki',
              email: 'omartriki712@gmail.com',
              avatarUrl: 'assets/users/omar.jpg',
              speciality: 'médecin générale',
              telephone: '24127616'
          }
      ];
      this.documents = [
          {
              type: 'pdf',
              fileUrl: 'assets/files/image.png',
              id: 1
          },
          {
              type: 'doc',
              fileUrl: 'assets/files/image.png',
              id: 1
          },

          {
              type: 'img',
              fileUrl: 'assets/files/image.png',
              id: 1
          }
      ]
  }
}
