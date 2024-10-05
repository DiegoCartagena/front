import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  public form;
  editar = new FormGroup ({
    retenida: new FormControl()
  });
  newUser = new FormGroup ({
    nombre : new FormControl('', [Validators.required,Validators.minLength(3)]),
    id_perfil : new FormControl(),
    rut: new FormControl('',[Validators.minLength(8),Validators.required]),
    aPaterno: new FormControl(),
    aMaterno: new FormControl(),
    email : new FormControl('',[Validators.required, Validators.email, Validators.minLength(2)]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    password2 : new FormControl('',[Validators.required, Validators.minLength(5)]),
    estado: new FormControl(),
    telefono : new FormControl('',[Validators.required,Validators.minLength(9)])
  
  });
  

constructor(public matDialogRef: MatDialogRef<ModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any,
  private router : Router
){
  console.log(data);
  if(this.data.origen!='Crear'){

    var values =  Object.keys(this.data.data).map(key => ({type: key, value: this.data.data[key]}));;
    values.forEach((element) => {
      if(element.type=='id'){
        var indice=values.indexOf(element);
      values.splice(indice,1);
    }
      if(element.type=='aMaterno'){
        element.type='Apellido Materno';
      }if(element.type=='aPaterno'){
        element.type='Apellido Paterno';
      }if(element.type=='id_perfil' && element.value==3){
        element.type='Perfil';
        element.value='Paciente';
      }if(element.type=='id_perfil' && element.value==2){
        element.type='Perfil';
        element.value='Profesional';
      }if(element.type=='id_perfil' && element.value==1){
        element.type='Perfil';
        element.value='Administrador';
      }
      if(element.type=='nombrePaciente'){
        element.type='Nombre Paciente'; 
      }
      if(element.type=='rutPaciente'){
        element.type='RUT Paciente'; 
      }
      if(element.type=='nombreProfesional'){
        element.type='Nombre Profesional'; 
      }if(element.type=='rutProfesional'){
        element.type='RUT Profesional'; 
      }
      if(element.type=='created_at'){
        element.type='Fecha Creación';
        
      }
      if(element.type=='updated_at'){
        element.type='Fecha Actualización';
        
      }
      if(element.type=='paciente'){
        var paciente= Object.keys(this.data.data).map(key => ({type: key, value: this.data.data[key]}));;
        //console.log(paciente);
        element.value=paciente[1].value;
      }
      if(element.type=='profesional'){
        var profesional= Object.keys(this.data.data).map(key => ({type: key, value: this.data.data[key]}));;
       //console.log(profesional);
        element.value=profesional[1].value;
      }
     
    });
    this.form=values;
   // this.form=this.data.data; 
    console.log(this.form);
  }

}
ngOnInit(){
  
}
edit=async()=>{
  const data =  await fetch("http://localhost:8000/getAllRecetas",{
    method: 'GET',
    headers: {'Content-type' : 'application/json'},
    
  });
}
crearUsuario = async () =>{
  var dato=this.newUser.value;
      const response = await fetch("http://apimed.test/usuario/new",{
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(dato), 
      });
      const data = await response.json();
      
        window.location.reload()
      
      
}
save = async () =>{
console.log('guardado con exito');
}
}
