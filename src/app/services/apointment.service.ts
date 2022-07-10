import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApointmentService {

  constructor(private httpclient:HttpClient) { }


  createpointement(data:any){
    return this.httpclient.post('http://127.0.0.1:8000/api/createUserAppointment',data);
  }
  getpointement(){
    return this.httpclient.get('http://127.0.0.1:8000/api/getAppointment');
  }

  getDoctors(){
    return this.httpclient.get('http://127.0.0.1:8000/api/getDoctors');
  }
}
