import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'login',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})


export class LoginComponent implements OnInit {
  title='medicalCare';
  logins = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email, Validators.minLength(2)]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)])
  });

  constructor(private router : Router) {}
ngOnInit() {
  
}
  login =async()=>{
     var dato=this.logins.value;
      const response = await fetch("http://localhost:8000/login",{
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(dato), 
      });
      
      const data = await response.json();
      if( this.logins.valid && data.codigo==0){
        localStorage.setItem('perfil',data.user.id_perfil);
        localStorage.setItem('nombre',data.user.nombre);
      this.router.navigate(['/index']);
      }else{
        this.router.navigate(['/registro']);
      }
    
  }
  async loginWithGoogle() {
    try {
      const res = await fetch("http://localhost:8000/google-login", {
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
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
}