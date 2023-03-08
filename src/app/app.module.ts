import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimaliComponent } from './animali/animali.component';
import { PersoneComponent } from './persone/persone.component';
import { PippoComponent } from './pippo/pippo.component';


// !QUESTO FILE "app.module.ts" E' IL CONTENITORE DI TUTTO CIO CHE CI SERVE PER POTER FARE IL NOSTRO PROGETTO
// ! Quindi "app.module.ts" è la borsa della spessa
@NgModule({
  declarations: [
    AppComponent,//*esso lo ha generato angular AUTOMATICAMENTE
    AnimaliComponent,//*esso lo abbiamo generato noi scrivendo in un NUOVO terminale di csCode:  ng generation component animali  oppure:  ng g c animali
    // * in questo modo il nome di classe "AnimaliComponent" sarà VISIBILE in tutti i file del mio progetto "MIA-APP"
    PersoneComponent, PippoComponent//*esso lo abbiamo generato noi scrivendo in un NUOVO terminale di csCode:  ng generation component persone oppure:  ng g c persone 
    // * in questo modo il nome di classe "PersoneComponent" sarà VISIBILE in tutti i file del mio progetto "MIA-APP"

    // ! qua possiamo anche mettere
    // !1) direttive
    // !2) paip
  ],
  imports: [
    BrowserModule
    // ! qua possiamo mettere
    // !1) altri moduli
  ],
  providers: [],
  bootstrap: [AppComponent]
  // ! "bootstrap" ci dice qual è il PRIMO componente che deve partire.In questo caso:"AppComponent"

})
export class AppModule { }
