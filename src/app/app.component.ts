import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//! esso serve per richiamare la classe "AppComponent"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ! "AppComponent" è una classe
  // ! "AppComponent" ha un decoratore chiamato "@Component"
  // ! "@Component" mi dice dove sono i pezzi della classe "AppComponent"
  // ! tali pezzi sono 
  // !1) './app.component.html'
  // !2) './app.component.css'
  title = 'mia-app';
}
