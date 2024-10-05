import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videoconferencia',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './videoconferencia.component.html',
  styleUrl: './videoconferencia.component.css'
})
export class VideoconferenciaComponent implements OnInit {
  videoconferencias: any[] = [
    { fecha: new Date(), descripcion: 'Videoconferencia de seguimiento' },
    { fecha: new Date('2024-06-20T15:00:00'), descripcion: 'Consulta inicial' }
  ];
  citasPendientes: string[] = ['Cita 1', 'Cita 2', 'Cita 3'];
  historialCitas: string[] = ['Cita 4', 'Cita 5', 'Cita 6'];
  constructor(){}
  ngOnInit(){}
}
