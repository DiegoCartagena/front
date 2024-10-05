import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  currentMonth: Date = new Date();
  daysInMonth: Date[] = [];
  selectedDay: Date | null = null;
  horarios: string[] = ['09:00', '10:00', '11:00', '12:00', '13:00'];
  citasPendientes: string[] = ['Cita 1', 'Cita 2', 'Cita 3'];
  historialCitas: string[] = ['Cita 4', 'Cita 5', 'Cita 6'];
  selectedHorario: string | null = null;
  constructor() {
    this.generateCalendar();
  }

  ngOnInit() {}

  generateCalendar(): void {
    const startOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const endOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    this.daysInMonth = this.getDates(startOfMonth, endOfMonth);
  }

  getDates(startDate: Date, endDate: Date): Date[] {
    const dates = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate)); // Asegurarse de crear un nuevo objeto Date
      currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
    }
    return dates;
  }

  isSelectedDay(day: Date): boolean {
    return this.selectedDay && day.getTime() === this.selectedDay.getTime();
  }

  selectDay(day: Date): void {
    this.selectedDay = day;
  }
 
  

  selectHorario = async (horario: string) => {
    try {
      const res = await fetch("http://localhost:8000/google", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!res.ok) {
        throw new Error('Error al obtener la URL de Google Meet');
      }

      const resp = await res.json();
      console.log(resp.url);
      
      // Redirigir a la URL de Google Meet obtenida
      window.location.replace(resp.url);
      this.selectedHorario = horario; 
      console.log(`Horario seleccionado: ${horario} del día ${this.selectedDay}`);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  isSelectedHorario(horario: string): boolean {
    return this.selectedHorario === horario;
  }
}
