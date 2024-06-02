import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-licuado-de-mango',
  standalone: true,
  imports: [NgFor],
  templateUrl: './licuado-de-mango.component.html',
  styleUrl: './licuado-de-mango.component.css'
})
export class LicuadoDeMangoComponent {
  constructor(private router: Router){}
  inicio(){
    this.router.navigate(['/inicio']);
  }

Ingredientes: string[]=['1 Lata de leche evaporada','1/2 taza de mango congelado','3 cucharadas de azucar'];

Procedimiento: string[]=['Licua la Leche evaporada con el mango y azucar. Sirve en vasos y agrega hielo'];
}


