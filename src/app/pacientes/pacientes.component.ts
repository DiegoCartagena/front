import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from '../modals/modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FormsModule,MatDialogModule,MatButtonModule, ModalComponent],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent implements OnInit {
  public pacientes;
  public paciente;
  constructor(private _matDialog: MatDialog){
  }
  ngOnInit() {
    this.getPacientes();
  }

  getPacientes= async() =>{

    const data =  await fetch("http://localhost:8000/getPacientes",{
      method: 'GET',
      headers: {'Content-type' : 'application/json'},
      
    });
    const pacientes = await data.json();
  this.pacientes= await pacientes.Pacientes;
  if(pacientes.Cantidad>0){

    this.pacientes.map(value=>{
      this.paciente = value
    }) 
  }else{
    this.paciente=this.pacientes;
  }
}

editar(profesional){
  this._matDialog.open(ModalComponent,{
    width: '900px',
    height: '500px',
    data: {
      titulo:'Editar profesional',
      data:profesional,
      origen : 'Editar'
    }
  });
}
crear(){
  this._matDialog.open(ModalComponent,{
    width:"900px",
    data:{
      titulo:'Crear Paciente',
      origen: 'Crear'
    }
  })
}
eliminar= async(id:string)=>{
  var ok = confirm("Seguro que deseas eliminar este paciente");
  if(ok){
    const eliminado  =  await fetch("http://localhost:8000/pacientes/"+id,{
      method: 'DELETE',
      headers: {'Content-type' : 'application/json'},
      
    });
    const deleted = await eliminado.json();
    alert(deleted.Mensaje);
  }else{
    alert("No se a eliminado ningun paciente");
  }
  window.location.reload()
}


}

