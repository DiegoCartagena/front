import { routing } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import {LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from "@angular/common";
import { AppComponent } from "./app.component";
registerLocaleData(localeEs,'ES');



@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    FormsModule,
    BrowserModule,
    routing,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [],
})
export class AppModule {}