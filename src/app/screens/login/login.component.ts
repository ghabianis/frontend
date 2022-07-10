import {Component, OnInit, ElementRef, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginSignupService, Token} from "../../services/login-signup.service";
import {SecureStorageService} from "../../services/secure-storage.service";
import {AbstractRestService, saveDataToLocalhost} from "../../services/genericservice";
import {Router} from "@angular/router";
import {ConnectionService} from "../../services/connection.service";
import {User} from "../../models/User";
import sweetalert from 'sweetalert2';

declare var $: any;

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    signin = new FormGroup(
        {
            email: new FormControl(''),
            password: new FormControl(''),
        }
    )
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    shown !: boolean;
    private path = "http://localhost:3000/users";
    constructor(private element: ElementRef, private loginSignupService: LoginSignupService,
                private secureStorageService: SecureStorageService, private router: Router,
                private connection: ConnectionService,
                private userService: AbstractRestService<User>) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        // body.classList.add('login-page');
        // body.classList.add('off-canvas-sidebar');
        // card.classList.remove('card-hidden');
        setTimeout(() => {
            // after 1000 ms we add the class animated to the login/register card
            this.shown = true;
        }, 100);
        this.signin = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        // body.classList.remove('off-canvas-sidebar');
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' +
          btoa('username:password'));
      }
    submit($event: Event) {
        let headers = new Headers();
        $event.preventDefault();
        this.userService.list(this.path, {
            params: {
                email: this.signin.value.email
            }
        }).subscribe(async (response) => {

            if(response[0].password === this.signin.value.password)
            {
                localStorage.setItem("userId", String(response[0].id));
                localStorage.setItem("role", String(response[0].role));
                localStorage.setItem("firstname", response[0].firstname);
                localStorage.setItem("lastname", response[0].lastname);
            }
            sweetalert.fire({
                title: "création de compte",
                text: "vous avez créer le compte",
                icon: "success"
            })?.then((result) => {
                 this.router.navigate(["/"]);
            })
        });
        this.loginSignupService.login(this.signin.value).subscribe(async (response: Token) => {
            response.access = this.secureStorageService.getToken("token");
            // response.refresh = this.secureStorageService.setToken(r);
            saveDataToLocalhost(response);
            this.connection.setConnection({firstname: response.firstname, lastname: response.lastname})
            await this.router.navigate(['/']);
        })
    }
}
