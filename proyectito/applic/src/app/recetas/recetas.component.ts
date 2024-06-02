import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})

export class RecetasComponent {

  recetas: string[]=['Pure de papa','Espaguetti a la carbonara','Licuado de mango'];

  id=0;
  botonid(){
    this.id = this.id+1;
  }
  constructor(private router: Router){}

  inicio(){
    this.router.navigate(['/inicio']);
  }
  espaguetti(){
    this.router.navigate(['/recetas/espaguetti-a-la-carbonara']);
  }
  licuadomango(){
    this.router.navigate(['/recetas/licuado-de-mango']);
  }
  purepapa(){
    this.router.navigate(['/recetas/pure-de-papa']);
  }

  redirect(id: any): void {
    
    switch (id) {
      case '1':
        this.router.navigate(['/recetas/pure-de-papas']);
        break;
      case '2':
        this.router.navigate(['/recetas/espaguetti-a-la-carbonara']);
        break;  
      case '3':
        this.router.navigate(['/recetas/licuado-de-mango']);
        break;
      default:
        break;
    }
  }

  
}
