import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { LoginSignupService } from 'src/app/services/login-signup.service';
import sweetalert from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    @ViewChild('updateAnnouncements')updateAnnouncements !: TemplateRef < any >;
    createUserForm = new FormGroup(
        {
            firstname: new FormControl(''),
            email: new FormControl(''),
            password: new FormControl(''),
            lastname: new FormControl(''),
            role: new FormControl(''),
            phone: new FormControl('')

        }
    )
  constructor(public dialog: MatDialog,private userService:LoginSignupService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(this.updateAnnouncements, {
      width: '30%',
    });
  }

  createUser(){
    this.userService.signup(this.createUserForm.value).subscribe(e=>{
        sweetalert.fire({
            title: "création de compte",
            text: "vous avez créer le compte",
            icon: "success"
        });
    })
  }
  users:any
  getAllUsers(){
    this.userService.getAllUsers().subscribe(e=>{
        this.users =e;
        console.log(this.users);
    })
  }
}

