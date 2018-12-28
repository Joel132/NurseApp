import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHistorialComponent } from './add-historial/add-historial.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { ModifyHistorialComponent } from './modify-historial/modify-historial.component';
import { ModifyPatientComponent } from './modify-patient/modify-patient.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddHistorialComponent,
    AddPatientComponent,
    ShowPatientComponent,
    ModifyHistorialComponent,
    ModifyPatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
