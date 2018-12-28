import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ModifyPatientComponent } from './modify-patient/modify-patient.component';
import { AddHistorialComponent } from './add-historial/add-historial.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { ModifyHistorialComponent } from './modify-historial/modify-historial.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
 { path: 'modifyHistorial/:id', component: ModifyHistorialComponent },
 { path: 'modifyPatient/:id', component: ModifyPatientComponent },
 {path:'addHistorial', component: AddHistorialComponent},
 {path:'addPatient',  component: AddPatientComponent},
 {path:'showPatient', component: ShowPatientComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
