import { Component, OnInit } from '@angular/core';
import {Historial} from '../historial';
import {Patient} from '../patient';
import { PatientService } from '../patient.service';
import { HistorialService } from '../historial.service';
@Component({
  selector: 'app-add-historial',
  templateUrl: './add-historial.component.html',
  styleUrls: ['./add-historial.component.css']
})
export class AddHistorialComponent implements OnInit {
  patients: Patient[];
  selectedPatient: Patient;
  date: string;
  bp: string;
  hr: string;
  constructor(private patientService: PatientService, private historialService: HistorialService) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatients().subscribe(patients=>this.patients=patients);
  }

  add(){
    this.historialService.count++;
    this.historialService.addHistorial({id:this.historialService.count,
       patient: this.selectedPatient,date: this.date,bloodPressure: this.bp,heartRate: this.hr});
    this.selectedPatient=null;
    this.date=null;
    this.bp='';
    this.hr='';
  }

}
