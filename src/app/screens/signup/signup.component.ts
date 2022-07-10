import {Component, ElementRef, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginSignupService} from "../../services/login-signup.service";
import {User} from "../../models/User";
import {Router} from "@angular/router";
import sweetalert from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    registration = new FormGroup(
        {
            firstname: new FormControl(''),
            email: new FormControl(''),
            password: new FormControl(''),
            lastname: new FormControl(''),
            role: new FormControl(''),
            phone: new FormControl('')

        }
    )
    role: string = 'patient';
    shown !: boolean;
    constructor(private element: ElementRef, private loginSignupService: LoginSignupService, private router: Router) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
         //  body.classList.add('off-canvas-sidebar');
        setTimeout(()=> {
            // after 1000 ms we add the class animated to the login/register card
            this.shown = true;
        }, 700);

    }
    sidebarToggle() {
      const toggleButton = this.toggleButton;
      const body = document.getElementsByTagName('body')[0];
      if (!this.sidebarVisible) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('off-canvas-sidebar');
    }
    resp:any
    submit($event: Event): void {
        $event.preventDefault();
        const user: User = {
            ...this.registration.value
        }
        this.loginSignupService.signup(user).subscribe( res => {
            this.resp = res
             sweetalert.fire({
                title: "création de compte",
                text: "vous avez créer le compte",
                icon: "success"
            });
            localStorage.setItem("token",this.resp.authorisation["token"]);
             this.router.navigate(['/login'])
        });
    }

    changeRole(role: string) {
        this.role = role;
        this.registration.value.role = role;
        if(role === 'doctor')
        {
            this.registration.addControl('speciality', new FormControl('', [Validators.required]))
        }
        else if(this.registration.contains('speciality'))
        {
            this.registration.removeControl('speciality');
        }
    }
}
