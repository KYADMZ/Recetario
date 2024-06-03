import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})

export class RecetasComponent {

  recetas: string[]=['Pure de papa','Espaguetti a la carbonara','Licuado de mango'];
  audio = new Audio('assets/poyoyo.mp3');
  id=0;

  precios: { [key: string]: number } = {
    'Pure de papa': 60,
    'Espaguetti a la carbonara': 180,
    'Licuado de mango': 30
  };
  cantidades: { [key: string]: number } = {
    'Pure de papa': 0,
    'Espaguetti a la carbonara': 0,
    'Licuado de mango': 0
  };
  total: number = 0;

  inputData: string = '';

  constructor(private router: Router){}


  inicio(){
    this.router.navigate(['/inicio']);
  }
  espaguetti(){
    this.router.navigate(['/recetas/espaguetti-a-la-carbonara']);
    this.audio.play();
  }
  licuadomango(){
    this.router.navigate(['/recetas/licuado-de-mango']);
    this.audio.play();
  }
  purepapa(){
    this.router.navigate(['/recetas/pure-de-papa']);
    this.audio.play();
  }

  calcularTotalGeneral() {
    this.total = this.recetas.reduce((acc, receta) => {
      return acc + (this.cantidades[receta] * this.precios[receta]);
    }, 0);
  }

}
