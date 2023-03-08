import { Component } from '@angular/core';

@Component({
  // ! "@Component" è SEMPRE LEGATO SOLO ED ESCLUSSIVAMENTE ALLA CLASSE IMMEDIATAMENTE SOTTO. In questo caso alla classe "AnimaliComponent"
  selector: 'app-animali',
  templateUrl: './animali.component.html',
  styleUrls: ['./animali.component.css']
})
export class AnimaliComponent {
  // !opzione1
  // titolo: string = "I miei animali";
  // !opzione1
  // !opzione2
  titolo = "I miei animali";
  // !opzione2

}


// export class pippo {
//   constructor() {
//   let animali1 = new AnimaliComponent();
//   // ! il nome variabile "animali1" mi ritorna UN SINGOLO OGGETTO {titolo: "I miei animali" }
//   // let animali1 = {
//   //   titolo: "I miei animali"

//   // }
//   console.log(animali1.titolo);//! mi ritorna: "I miei animali"
//   }
// }
