import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { doctor } from 'src/model/Doctor';
import { IntegerAndStringPost } from 'src/model/IntegerAndStringPost';
import { SearchedDoctorInfo } from 'src/model/SearchedDoctorInfo';
import { SpecialityGet } from 'src/model/SpecialityGet';
import { AppointmentService } from '../appointment/appointment.service';
import { SpecialityService } from '../speciality/speciality.service';
import { DoctorService } from '../users/doctor/doctor/doctor.service';
import { AcceuilService } from './acceuil.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  constructor(private acceuilService: AcceuilService, private router: Router, private translate: TranslateService, private toastr: ToastrService, private doctorService: DoctorService, private specialityService: SpecialityService, private appointmentService: AppointmentService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }

  slectedDay: boolean = true;
  searchedDoctorWorkDays: string;
  monthDays: any[] = [];
  monthDaysDis: boolean[] = [];
  daysNameEn: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysName: string[] = [];
  daysNameDouble: string[] = [];
  date: Date = new Date();
  today: number = /*28;*/this.date.getUTCDate();
  todayName: string;
  todayNumber: number;
  year: number = this.date.getUTCFullYear();
  month: number = this.date.getUTCMonth() + 1;
  lastMonthDay: number;
  specialityDes: boolean = false;
  retrieveResonse: any; base64Data: any; retrievedImage: any;
  chooseSpeciality: boolean;
  getAllSpecialitiesReturn: boolean;
  specialityCode: string;
  specialityName: string;
  disabledSearchDoc: boolean;
  body: String = 'acceuilBody';
  FormName: any;
  specialityGet: SpecialityGet[] = [];
  doctors: doctor[] = [];
  doctorName: String;
  doctorId: number;
  searchedDoctor: SearchedDoctorInfo;
  searchedDoctorContainer: boolean;

  ngOnInit(): void {
    this.disabledSearchDoc = true;
    this.getAllSpecialities();
    this.acceuilService.displayForm$.subscribe(data => {
      this.FormName = data;
    });
  }
  changeLangTo(lang: string) {
    this.translate.use(lang);
  }

  public getAllApprovedDocBySpecialityId(specialityId: number): boolean {
    this.doctorService.getApprovedDoctorsBySpecialityId(specialityId).subscribe(
      res => {
        this.doctors = res;
        if (this.doctors.length > 0) {
          this.disabledSearchDoc = false;
        }
        else {
          this.disabledSearchDoc = true;
          this.toastr.info(this.translate.instant('noDoctorFound'), this.translate.instant('search'), {
            timeOut: 5000,
            positionClass: 'toast-bottom-left'
          });
        }
      },
      err => {
        this.toastr.warning(this.translate.instant('checkCnx'), this.translate.instant('cnx'), {
          timeOut: 5000,
          positionClass: 'toast-bottom-left'
        });
      }
    );
    return this.getAllSpecialitiesReturn;
  }

  getAllSpecialities() {
    this.specialityService.getSpecialities().subscribe(
      res => {
        this.specialityGet = res;
      }
    );
  }

  checkDisabledSearchDoc() {
    for (let spec of this.specialityGet) {
      if (this.specialityName.toLowerCase() == this.translate.instant(spec.specialityCode).toLowerCase()) {
        this.getAllApprovedDocBySpecialityId(spec.specialityId);
        this.specialityCode = spec.specialityCode;
        this.doctorName = "";
      } else
        this.disabledSearchDoc = true;
    }
  }

  showDoctorNameInfo() {
    if (this.disabledSearchDoc) {
      this.chooseSpeciality = true;
      this.toastr.warning(this.translate.instant('chooseSpecialityFirst'), this.translate.instant('info'), {
        timeOut: 5000,
        positionClass: 'toast-bottom-left'
      });
    }
  }

  toSearchedDoctorSection() {
    document.getElementById("searchedDoctorSection").scrollIntoView({ behavior: "smooth" });
  }

  searchDoctor() {
    for (let doc of this.doctors) {
      if (this.doctorName.slice(4, this.doctorName.length) == doc.doctorFirstName + ' ' + doc.doctorLastName) {
        this.searchedDoctor = new SearchedDoctorInfo(doc.doctorId, doc.doctorFirstName, doc.doctorLastName, doc.doctorCity, doc.doctorGender, doc.doctorRate, doc.exactAdress, doc.workDays, doc.maxPatientPerDay);
        this.searchedDoctorWorkDays = doc.workDays;
        this.generateMonthDay();
        this.searchedDoctorContainer = true;
        this.doctorService.getDoctorPofilePhoto(doc.doctorId + 'doctorProfilePic').subscribe(
          res => {
            if (res != null) {
              this.retrieveResonse = res;
              this.base64Data = this.retrieveResonse.picByte;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            }else
              this.retrieveResonse=null;
          }
        );
        this.toSearchedDoctorSection();
      } else
        this.searchedDoctorContainer = false;
    }
  }

  getMonthLastDay() {
    if (this.month == 1)
      this.lastMonthDay = 31;
    else if (this.month == 2) {
      if ((this.year % 4) == 0)
        this.lastMonthDay = 29;
      else
        this.lastMonthDay = 28;
    } else if (this.month == 3)
      this.lastMonthDay = 31;
    else if (this.month == 4)
      this.lastMonthDay = 30;
    else if (this.month == 5)
      this.lastMonthDay = 31;
    else if (this.month == 6)
      this.lastMonthDay = 30;
    else if (this.month == 7)
      this.lastMonthDay = 31;
    else if (this.month == 8)
      this.lastMonthDay = 31;
    else if (this.month == 9)
      this.lastMonthDay = 30;
    else if (this.month == 10)
      this.lastMonthDay = 31;
    else if (this.month == 11)
      this.lastMonthDay = 30;
    else if (this.month == 12)
      this.lastMonthDay = 31;
  }

  generateMonthDay() {
    this.daysName = [this.translate.instant('sun'), this.translate.instant('mon'), this.translate.instant('tue'), this.translate.instant('wed'), this.translate.instant('thu'), this.translate.instant('fri'), this.translate.instant('sat')];
    this.daysNameDouble = [this.translate.instant('sun'), this.translate.instant('mon'), this.translate.instant('tue'), this.translate.instant('wed'), this.translate.instant('thu'), this.translate.instant('fri'), this.translate.instant('sat'), this.translate.instant('sun'), this.translate.instant('mon'), this.translate.instant('tue'), this.translate.instant('wed'), this.translate.instant('thu'), this.translate.instant('fri'), this.translate.instant('sat'), this.translate.instant('sat')];
    this.getMonthLastDay();
    let day: number = 0;
    let todayNumber: number;
    this.todayName = /*'Sun';*/this.date.toString().slice(0, 3);
    let checkAppointmentMonth: number;
    let checkAppointmentYear: number;
    let appointmentDate: string;
    let integerAndStringPost: IntegerAndStringPost;
    let j1: number;
    for (let c = 0; c < 7; c++) {
      if (this.daysNameEn[c] == this.todayName) {
        todayNumber = c;
        this.todayNumber = c;
      }
    }
    for (let c = 1; c <= 7; c++) {
      this.monthDays[day] = this.daysNameDouble[todayNumber];
      todayNumber++;
      day++;
    }

    for (var i = this.today; i <= this.lastMonthDay; i++) {
      this.monthDays[day] = i;
      if (this.searchedDoctorWorkDays.indexOf(this.daysNameEn[(this.todayNumber + i + (7 - this.todayNumber)) % 7]) == -1)
        this.monthDaysDis[i] = true;
      else {
        if (i == this.today)
          this.monthDaysDis[this.today] = true;
        else {
          checkAppointmentMonth = this.month;
          checkAppointmentYear = this.year;
          if (checkAppointmentMonth <= 9)
            appointmentDate = checkAppointmentYear + '/0' + checkAppointmentMonth + '/' + i;
          else
            appointmentDate = checkAppointmentYear + '/' + checkAppointmentMonth + '/' + i;
          integerAndStringPost = new IntegerAndStringPost(this.searchedDoctor.getDoctorId(), appointmentDate);
          this.checkIfDayAppFull(i, integerAndStringPost);
        }
      }
      day++;
    }
    for (var j = 0; j <= (this.today - this.lastMonthDay) + 26; j++) {
      this.monthDays[day + j] = j + 1;
      if (this.searchedDoctorWorkDays.indexOf(this.daysNameEn[(this.todayNumber + day + j) % 7]) == -1)
        this.monthDaysDis[j + 1] = true;
      else {
        j1 = j + 1;
        checkAppointmentMonth = this.month + 1;
        checkAppointmentYear = this.year;
        if (checkAppointmentMonth <= 9)
          appointmentDate = checkAppointmentYear + '/0' + checkAppointmentMonth + '/' + j1;
        else {
          if (checkAppointmentMonth == 13) {
            checkAppointmentMonth = 1;
            checkAppointmentYear = checkAppointmentYear + 1;
          }
          appointmentDate = checkAppointmentYear + '/' + checkAppointmentMonth + '/' + j1;
        }
        integerAndStringPost = new IntegerAndStringPost(this.searchedDoctor.getDoctorId(), appointmentDate);
        this.checkIfDayAppFull(j1, integerAndStringPost);
      }
    }
  }

  checkIfDayAppFull(i: number, integerAndStringPost: IntegerAndStringPost) {
    this.appointmentService.appointmentsCountByDoctorIdAndDate(integerAndStringPost).subscribe(
      res => {
        if (res >= this.searchedDoctor.getMaxPatientPerDay())
          this.monthDaysDis[i] = true;
        else
          this.monthDaysDis[i] = false;
      }
    );
  }

  daySelected(day: number) {
    if (day > 0 && day <= 31)
      this.slectedDay = false;
    else
      this.slectedDay = true;
  }

  checkDaySelected() {
    if (this.slectedDay) {
      this.toastr.warning(this.translate.instant('selectDayFirst'), this.translate.instant('info'), {
        timeOut: 5000,
        positionClass: 'toast-bottom-left'
      });
    } else {
      document.getElementById("connexionSection").scrollIntoView({ behavior: "smooth" });
      this.toastr.info(this.translate.instant('openAccountFirst'), this.translate.instant('info'), {
        timeOut: 5000,
        positionClass: 'toast-bottom-left'
      });
    }
  }
}
