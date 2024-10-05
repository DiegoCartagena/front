import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  perfil = localStorage.getItem('perfil');
  nombre = localStorage.getItem('nombre');
 
  constructor (private router : Router){}
  ngOnInit(){
    this.showPerfil();
  }
  navigate=(ruta:string)=>{
    this.router.navigate([ruta]);
  }
   showPerfil = ()=>{
    console.log(this.perfil,this.nombre);
  }
}
