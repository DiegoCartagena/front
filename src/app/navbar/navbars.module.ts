import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { LoginComponent } from "../login/login.component";
import { RegistroComponent } from "../registro/registro.component";
import { routing } from "../app.routes";

@NgModule({
  declarations: [],
  imports: [FormsModule,BrowserModule, routing,CommonModule],
  providers: [],
  bootstrap: [],
})
export class NavbarModule {}