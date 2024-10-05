import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { HistorialComponent } from './historial/historial.component';
import { AgendaComponent } from './agenda/agenda.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VideoconferenciaComponent } from './videoconferencia/videoconferencia.component';

export const routes: Routes = [
    {path: '', component: IndexComponent,pathMatch: 'full'},
    {path:'index', component: IndexComponent, pathMatch:'full'},
    {path: 'login',component: LoginComponent, pathMatch: 'full'},
    {path: 'registro',component: RegistroComponent, pathMatch: 'full'},
    {path: 'historial',component: HistorialComponent, pathMatch: 'full'},
    {path :'agenda', component: AgendaComponent, pathMatch:'full'},
    {path: 'recetas', component: RecetasComponent, pathMatch: 'full'},
    {path: 'examenes', component: ExamenesComponent, pathMatch:'full'},
    {path: 'profesionales', component: ProfesionalesComponent, pathMatch:'full'},
    { path:'pacientes', component: PacientesComponent, pathMatch: 'full' },
    { path:'usuarios', component: UsuariosComponent, pathMatch: 'full' },
    { path:'videoconferencia', component: VideoconferenciaComponent, pathMatch:'full'}

];
export const routing = RouterModule.forRoot(routes);