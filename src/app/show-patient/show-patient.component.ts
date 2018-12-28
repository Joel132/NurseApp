import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import {Patient } from '../patient';
@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {
  patients: Patient[];
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatients().subscribe(patients=>this.patients=patients);
  }

  delete(patient: Patient){
    if(!this.patientService.delete(patient)){
      window.alert("No se puede eliminar el elemento");
    }
    
  }
  

}
