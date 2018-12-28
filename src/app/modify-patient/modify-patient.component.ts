import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-modify-patient',
  templateUrl: './modify-patient.component.html',
  styleUrls: ['./modify-patient.component.css']
})
export class ModifyPatientComponent implements OnInit {

  patient: Patient;
  name: string;
  age: number;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private patientService: PatientService) { }

  ngOnInit() {
    this.getHistorial();
    this.name=this.patient.name;
    this.age=this.patient.age;
  }

  getHistorial(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatient(id)
      .subscribe(pt => this.patient = pt);
  }

  modify(){
    this.patient.name=this.name;
    this.patient.age=this.age;
    this.location.back();
  }

}
