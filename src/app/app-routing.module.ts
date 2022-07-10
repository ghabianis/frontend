import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./screens/login/login.component";
import {SignupComponent} from "./screens/signup/signup.component";
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {IndexComponent} from "./screens/index/index.component";
import {OurDoctorsComponent} from "./screens/our-doctors/our-doctors.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AdminUsersComponent} from "./screens/admin-users/admin-users.component";
import {AvailabilitiesDoctorComponent} from "./screens/availibilities-doctor/availabilities-doctor.component";
import {ProfileComponent} from "./screens/profile/profile.component";
import {AppointmentsPatientComponent} from "./screens/appointments-patient/appointments-patient.component";
import {AvailabilitiesCalendarComponent} from "./screens/avaialabilities-calandar/availabilities-calendar.component";
import {UsersDocsComponent} from "./screens/users-docs/users-docs.component";
import { HomeComponent } from './screens/home/home.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [

            {path: '', redirectTo: 'index', pathMatch: 'full'},
            {path: 'login', component: LoginComponent},
            {path: 'Home', component: HomeComponent},
            {path: 'signup', component: SignupComponent},
            { path: 'index', component: IndexComponent},
            {path: 'our-doctors', component: OurDoctorsComponent},
            {path: 'profile', component: ProfileComponent},
            {path: 'appointments', component: AppointmentsPatientComponent},
            {path: 'availabilities', component: AvailabilitiesCalendarComponent},
            {path: 'users', component: UsersComponent},
            {path: 'docs', component: UsersDocsComponent}
        ]
    },
    {
        path: 'dashboard',
        component: AdminLayoutComponent,
        children: [
            {
                path: '', redirectTo: 'index', pathMatch: 'full'
            },
            {
                path: 'users', component: AdminUsersComponent
            },
            {
                path: 'availabilities', component: AvailabilitiesDoctorComponent
            },
            {
                path: 'availabilities/:id', component: AppointmentsPatientComponent
            },
            {
                path: 'users/:id', component: ProfileComponent
            },
            {
                path: 'docs', component: UsersDocsComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
