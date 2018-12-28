import { Injectable, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import {Historial} from './historial';
import { Patient } from './patient';
import { PATIENTS } from './mock-patients';


@Injectable({
  providedIn: 'root',
})
export class HistorialService  implements OnInit{
  count: number;
  HISTORIALS: Historial[];
  constructor() { 
    this.HISTORIALS=[
      {id: 1, patient: PATIENTS[0], date: this.toDateInputValue(), bloodPressure: '120/80', heartRate: '60' },
      {id: 2, patient: PATIENTS[1], date: this.toDateInputValue(), bloodPressure: '120/80', heartRate: '60' }
      
    ];
    this.count=this.HISTORIALS.length;

  }

  toDateInputValue() {
    let local = new Date();
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  }

  getHistorials(): Observable<Historial[]> {
    
    return of(this.HISTORIALS);
  }

  ngOnInit() {
  }

  addHistorial(historial: Historial){
    this.HISTORIALS.push(historial);
  }

  findPatient(patient: Patient): Boolean{
    for(let historial of this.HISTORIALS){
      if(historial.patient.id===patient.id){
        return false
      }
    }
    return true;
  }

  remove(historial: Historial){
    this.HISTORIALS.splice(this.HISTORIALS.indexOf(historial),1);
  }

  getHistorial(id: number): Observable<Historial>{
    for(let historial of this.HISTORIALS){
      if(historial.id===id){
        return of(historial);
      }
    }
    return of({} as Historial);
  }

  getHistorialsRange(start: string, end: string): Observable<Historial []>{
    let aux: Historial []=[];
    for(let his of this.HISTORIALS){
      if(his.date>=start&&his.date<=end){
        aux.push(his);
        
      }
    }
    
    return of(aux);
  }
  
}

