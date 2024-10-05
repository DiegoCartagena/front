import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modals/modal/modal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,CommonModule,ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="medicalCare";
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen =  !this.isSidebarOpen;
  }
}
