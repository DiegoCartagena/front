import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, getCurrencySymbol } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from '../modals/modal/modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [NavbarComponent,CommonModule, MatButtonModule, MatDialogModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent implements OnInit {
 public recetas;
 public receta;
 perfil = localStorage.getItem('perfil');
  nombre = localStorage.getItem('nombre');
  constructor(private _matDialog: MatDialog){}
  ngOnInit() {
    this.getRecetas();
  }
 getRecetas = async() =>{

  const data =  await fetch("http://localhost:8000/getAllRecetas",{
    method: 'GET',
    headers: {'Content-type' : 'application/json'},
    
  });
  const recetas = await data.json();
  this.recetas= await recetas.recetas;
  this.recetas.map(value=>{
    this.receta = value
  }) 
}
editar(receta){
  //this.showEditModal= true;
  this._matDialog.open(ModalComponent,{
    width: '900px',
    height: '500px',
    data: {
      titulo:'Editar Receta',
      data:receta,
      origen : 'Editar'
    }
  });
}
crear(){
  this._matDialog.open(ModalComponent,{
    width:"900px",
    data:{
      titulo:'Crear Receta',
      origen: 'Crear'
    }
  })
}
eliminar= async(id:string)=>{
  const eliminado  =  await fetch("http://localhost:8000/recetas/"+id,{
    method: 'DELETE',
    headers: {'Content-type' : 'application/json'},
    
  });
  const deleted = await eliminado.json();
  alert(deleted.Mensaje);
  window.location.reload()
}
}
