import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from '../modals/modal/modal.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [NavbarComponent,CommonModule,MatButtonModule,MatDialogModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
public usuarios;
public usuario;
  constructor (private _matDialog: MatDialog) {

  }
  ngOnInit() {
    this.getUsuarios();
  }
 getUsuarios = async() =>{

  const data =  await fetch("http://localhost:8000/getUsers",{
    method: 'GET',
    headers: {'Content-type' : 'application/json'},
    
  });
  const usuarios = await data.json();
  this.usuarios= await usuarios.Usuarios;
  this.usuarios.map(value=>{
    this.usuario = value
  }) 
}
editar(usuario){
  this._matDialog.open(ModalComponent,{
    width: '900px',
    height: '500px',
    data: {
      titulo:'Editar Usuario',
      data:usuario,
      origen : 'Editar'
    }
  });
}
crear(){
  this._matDialog.open(ModalComponent,{
    width:"900px",
    data:{
      titulo:'Crear Usuario',
      origen: 'Crear'
    }
  })
}
eliminar= async(id:string)=>{
  var ok = confirm("Seguro que deseas eliminar este usuario");
  if(ok){
    const eliminado  =  await fetch("http://localhost:8000/usuarios/"+id,{
      method: 'DELETE',
      headers: {'Content-type' : 'application/json'},
      
    });
    const deleted = await eliminado.json();
    alert(deleted.Mensaje);
  }else{
    alert("No se a eliminado ningun usuario");
  }
  window.location.reload()
}



}
