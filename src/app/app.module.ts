import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SignInFormComponent } from './Form/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './Form/sign-up-form/sign-up-form.component';
import { AcceuilService } from './acceuil/acceuil.service';
import { AcceuilBodyComponent } from './bodyContent/acceuil-body/acceuil-body.component';
import { HeaderComponent } from './Headers/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaveNewUserService } from './Form/sign-up-form/save-new-user.service';
import { PatientComponent } from './users/patient/patient/patient.component';
import { ToastrModule } from 'ngx-toastr';
import { SignInService } from './Form/sign-in-form/sign-in.service';
import { DoctorComponent } from './users/doctor/doctor/doctor.component';
import { PharmacyComponent } from './users/pharmacy/pharmacy/pharmacy.component';
import { PatientHeaderComponent } from './Headers/patient-header/patient-header.component';
import { PatientService } from './users/patient/patient/patient.service';
import { PatientDoctorComponent } from './users/patient/patient-doctor/patient-doctor.component';
import { AdminComponent } from './users/admin/admin/admin.component';
import { AdminHeaderComponent } from './Headers/admin-header/admin-header.component';
import { AdminService } from './users/admin/admin/admin.service';
import { AdminDoctorComponent } from './users/admin/admin-doctor/admin-doctor.component';
import { AdminPatientComponent } from './users/admin/admin-patient/admin-patient.component';
import { AdminPharmacyComponent } from './users/admin/admin-pharmacy/admin-pharmacy.component';
import { AdminDiseaseComponent } from './users/admin/admin-disease/admin-disease.component';
import { DoctorHeaderComponent } from './Headers/doctor-header/doctor-header.component';
import { SpecialityService } from './speciality/speciality.service';
import { AppointmentService } from './appointment/appointment.service';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { UserService } from './services/user.service';
import { MedicamentService } from './services/medicament.service';
import { PrescriptionService } from './services/prescription.service';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    SignInFormComponent,
    SignUpFormComponent,
    AcceuilBodyComponent,
    HeaderComponent,
    PatientComponent,
    DoctorComponent,
    PharmacyComponent,
    PatientHeaderComponent,
    PatientDoctorComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminDoctorComponent,
    AdminPatientComponent,
    AdminPharmacyComponent,
    AdminDiseaseComponent,
    DoctorHeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [AcceuilService,AppComponent,SaveNewUserService,
    SignInService,PatientService,PatientComponent,AdminService,
    AdminComponent,DoctorComponent,SpecialityService,AppointmentService,UserService,
    MedicamentService,PrescriptionService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
