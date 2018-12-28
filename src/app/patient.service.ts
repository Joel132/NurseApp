import { Injectable } from '@angular/core';
import { PATIENTS } from './mock-patients';

import { Observable, of } from 'rxjs';
import {Patient} from './patient';
import {HistorialService} from './historial.service';
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  count: number;
  PATIENTS: Patient[]=PATIENTS;
  constructor(private historialService: HistorialService) { 
    this.count=PATIENTS.length;
  }

  getPatients(): Observable<Patient[]> {
    
    return of(this.PATIENTS);
  }

  addPatient(patient: Patient){
    this.PATIENTS.push(patient);
  }

  delete(patient: Patient): boolean{
    if(!this.historialService.findPatient(patient)){
      return false;
    }
    this.PATIENTS.splice(this.PATIENTS.indexOf(patient),1);
    return true;
  }

  getPatient(id: number): Observable<Patient>{
    for(let p of this.PATIENTS){
      if(p.id===id){
        return of(p);
      }
    }
    return of({} as Patient);
  }
}

