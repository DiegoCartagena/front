import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter,Output} from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { MatButton } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[CommonModule,LoginComponent,RegistroComponent, MatButton, MatCommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  perfil = localStorage.getItem('perfil');
nombre = localStorage.getItem('nombre');
isSidebarOpen = false;
@Output() toggleSidebar = new EventEmitter<void>();

  constructor() { }

  onToggleSidebar() {
    this.toggleSidebar.emit();
    this.isSidebarOpen=!this.isSidebarOpen;
  }

ngOnInit(){
  
}

}
