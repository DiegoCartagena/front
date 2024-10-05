import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports:[NavbarComponent,ReactiveFormsModule,CommonModule],
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})


export class RegistroComponent implements OnInit {
  
    title='medicalCare';
    reg = new FormGroup ({
      nombre : new FormControl('', [Validators.required,Validators.minLength(3)]),
      id_perfil : new FormControl(),
      rut: new FormControl('',[Validators.minLength(8),Validators.required]),
      aPaterno: new FormControl(),
      aMaterno: new FormControl(),
      email : new FormControl('',[Validators.required, Validators.email, Validators.minLength(2)]),
      password : new FormControl('',[Validators.required, Validators.minLength(5)]),
      password2 : new FormControl('',[Validators.required, Validators.minLength(5)]),
    
    });
   

  constructor ( )  {
  }
  ngOnInit() {
  }
  
   async registro() {
      console.log(this.reg.valid);
      
     var dato=this.reg.value;
      const response = await fetch("http://apimed.test/usuario/new",{
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(dato), 
      });
      
      const data = await response.json();

    }
  
}
