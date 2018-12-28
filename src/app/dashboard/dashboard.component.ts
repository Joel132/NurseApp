import { Component, OnInit } from '@angular/core';
import {Historial} from '../historial';
import { HistorialService } from '../historial.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  historials: Historial[];
  startDate: string;
  endDate: string;
  constructor(private historialService: HistorialService) { 
    let aux=new Date();
    this.startDate=this.historialService.toDateInputValue();
    this.endDate=this.historialService.toDateInputValue();
    
  }

  ngOnInit() {
    this.getHistorials();
  }

  getHistorials(){
    this.historialService.getHistorialsRange(this.startDate,this.endDate)
        .subscribe(historials => this.historials = historials)
  }

  

  removeHistorial(historial: Historial){
    this.historialService.remove(historial);
    this.mychange('');
  }
  mychange(val)
{
  this.historialService.getHistorialsRange(this.startDate,this.endDate)
        .subscribe(historials => this.historials = historials)
  //TODO: hacer la llamada al servicio para actualizar los historiales a mostrar
}
}
