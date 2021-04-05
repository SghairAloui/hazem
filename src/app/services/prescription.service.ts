import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { prescriptionGet } from 'src/model/prescriptionGet';

const PRES_API = 'http://localhost:8080/api/prescription/';
const PRESMED_API = 'http://localhost:8080/api/prescriptionMedicament/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http:HttpClient) { }

  public addPres (patientId:number,doctorId:number){
    return this.http.post<number>(PRES_API + 'add',{patientId,doctorId},httpOptions);
  }

  public addMedicamentToPresById(medicamentName:string,treatmentPeriode:string,prescriptionId:number){
    return this.http.post<boolean>(PRESMED_API+'add',{medicamentName,prescriptionId,treatmentPeriode},httpOptions);
  }

  public deleteById(id:number){
    return this.http.delete<boolean>(PRES_API+'deleteById/'+id,httpOptions);
  }

  public getPrescriptionByDoctorIdPatientIdAndDate(doctorId:number,patientId:number,prescriptionDate:string){
    return this.http.post<prescriptionGet>(PRES_API+'getPrescriptionByDoctorIdPatientIdAndDate',{doctorId,patientId,prescriptionDate},httpOptions);
  }
}