import { Component, OnInit } from '@angular/core';
import { Historial } from '../historial';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {HistorialService} from '../historial.service';
import {PatientService} from '../patient.service';
import { Patient } from '../patient';
@Component({
  selector: 'app-modify-historial',
  templateUrl: './modify-historial.component.html',
  styleUrls: ['./modify-historial.component.css']
})
export class ModifyHistorialComponent implements OnInit {
  patients: Patient[];
  historial: Historial;
  selectedPatient: Patient;
  date: string;
  bp: string;
  hr: string;
  //compareFn;
  constructor(
    private route: ActivatedRoute,
    private historialService: HistorialService,
    private location: Location,
    private patientService: PatientService
  ) { }

  ngOnInit() {
    this.getHistorial();
    this.getPatient();
    this.selectedPatient=this.historial.patient;
    this.date=this.historial.date;
    this.bp=this.historial.bloodPressure;
    this.hr=this.historial.heartRate;
   // this.compareFn = this._compareFn.bind(this);
  }

  getHistorial(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.historialService.getHistorial(id)
      .subscribe(historial => this.historial = historial);
  }

  getPatient(){
    this.patientService.getPatients().subscribe(ps=>this.patients=ps);
  }

  modify(){
    this.historial.patient=this.selectedPatient;
    this.historial.date=this.date;
    this.historial.bloodPressure=this.bp;
    this.historial.heartRate=this.hr;
    this.location.back();
  }
  
 /* _compareFn(a, b) {
    return a.id === b.id;
  }*/
}
