import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modals/modal/modal.component';

@Component({
  selector: 'app-profesionales',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FormsModule,MatButtonModule,MatDialogModule,ModalComponent],
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css'
})
export class ProfesionalesComponent implements OnInit {

  public profesionales;
public profesional;
  constructor (private _matDialog: MatDialog) {
    this.getprofesionales();
  }
  ngOnInit() {
   
  }
 getprofesionales = async() =>{

  const data =  await fetch("http://localhost:8000/getProfesionales",{
    method: 'GET',
    headers: {'Content-type' : 'application/json'},
    
  });
  const profesionales = await data.json();
  this.profesionales= await profesionales.Profesionales;
  if(profesionales.Cantidad>0){

    this.profesionales.map(value=>{
      this.profesional = value
    }) 
  }else{
    this.profesional=this.profesionales;
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
      titulo:'Crear Profesional',
      origen: 'Crear'
    }
  })
}
eliminar= async(id:string)=>{
  var ok = confirm("Seguro que deseas eliminar este profesional");
  if(ok){
    const eliminado  =  await fetch("http://localhost:8000/profesionales/"+id,{
      method: 'DELETE',
      headers: {'Content-type' : 'application/json'},
      
    });
    const deleted = await eliminado.json();
    alert(deleted.Mensaje);
  }else{
    alert("No se a eliminado ningun profesional");
  }
  window.location.reload()
}

}
