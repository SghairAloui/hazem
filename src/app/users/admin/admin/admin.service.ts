import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminGet } from 'src/model/adminGet';
import { DoctorGet } from 'src/model/Doctorget';
import { SecureLoginString } from 'src/model/SecureLoginString';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public getAdminInfoFromSecureLogin(secureLogin:SecureLoginString){
    return this.http.post<AdminGet>("http://localhost:8080/admin/getAdminInfoFromSecureLogin",secureLogin);
  }
  public getPendingDoctors(){
    return this.http.get<DoctorGet[]>("http://localhost:8080/doctor/getPendingDoctors");
  }
}
