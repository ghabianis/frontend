import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {LoginComponent} from './screens/login/login.component';
import {MatButtonModule} from "@angular/material/button";
import {SignupComponent} from './screens/signup/signup.component';
import {MatRadioModule} from "@angular/material/radio";
import {OurDoctorsComponent} from './screens/our-doctors/our-doctors.component';
import {DoctorsComponent} from './components/doctors/doctors.component';
import {IndexComponent} from './screens/index/index.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AvailabilitiesDoctorComponent } from './screens/availibilities-doctor/availabilities-doctor.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { AdminUsersComponent } from './screens/admin-users/admin-users.component';
import { ProfileComponent } from './screens/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import { AvailabilitiesComponent } from './components/availabilities/availabilities.component';
import {MatLuxonDateModule} from "@angular/material-luxon-adapter";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MAT_DATETIME_FORMATS, MatDatetimepickerModule, MatNativeDatetimeModule} from "@mat-datetimepicker/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ConsultationsComponent } from './components/consultations/consultations.component';
import { AppointmentsPatientComponent } from './screens/appointments-patient/appointments-patient.component';
import { AvailabilitiesCalendarComponent } from './screens/avaialabilities-calandar/availabilities-calendar.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { DocumentsShareComponent } from './screens/documents-share/documents-share.component';
import { UsersDocsComponent } from './screens/users-docs/users-docs.component';
import { HomeComponent } from './screens/home/home.component';
import {MatDialogModule} from '@angular/material/dialog';

import {MatIconModule} from '@angular/material/icon';
import { UsersComponent } from './users/users/users.component';

@NgModule({
    declarations: [AppComponent, AuthLayoutComponent, AdminLayoutComponent, SidebarComponent,
        LoginComponent, SignupComponent, OurDoctorsComponent, DoctorsComponent, IndexComponent, AvailabilitiesDoctorComponent,
        AdminUsersComponent, ProfileComponent, AvailabilitiesComponent, ConsultationsComponent, AppointmentsPatientComponent, AvailabilitiesCalendarComponent, DocumentsComponent, DocumentsShareComponent, UsersDocsComponent, HomeComponent, UsersComponent],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, MatButtonModule, MatRadioModule, ReactiveFormsModule,
        MatTooltipModule, MatLuxonDateModule, MatFormFieldModule, MatDatepickerModule, MatInputModule,
        MatNativeDatetimeModule, MatDatetimepickerModule, FormsModule,MatIconModule,MatDialogModule],
    providers: [
        {
            provide: MAT_DATETIME_FORMATS,
            useValue: {
                parse: {},
                display: {
                    dateInput: {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                    },
                    monthInput: {
                        month: 'long',
                    },
                    datetimeInput: {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                    },
                    timeInput: {
                        hour: '2-digit',
                        minute: '2-digit',
                    },
                    monthYearLabel: {
                        year: 'numeric',
                        month: 'short',
                    },
                    dateA11yLabel: {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    },
                    monthYearA11yLabel: {
                        year: 'numeric',
                        month: 'long',
                    },
                    popupHeaderDateLabel: {
                        weekday: 'short',
                        month: 'short',
                        day: '2-digit',
                    },
                },
            },
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
