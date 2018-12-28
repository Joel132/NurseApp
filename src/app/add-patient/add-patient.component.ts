import { Component, OnInit } from '@angular/core';
import {PatientService} from '../patient.service';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  nP: string;
  aP: number;
  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  add(){
    this.patientService.addPatient({id: ++this.patientService.count ,name: this.nP,age: this.aP});
    this.nP='';
    this.aP=null;
  }

}
