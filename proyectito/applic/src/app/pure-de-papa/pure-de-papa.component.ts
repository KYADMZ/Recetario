import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pure-de-papa',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pure-de-papa.component.html',
  styleUrl: './pure-de-papa.component.css'
})
export class PureDePapaComponent {
  constructor(private router: Router){}
  inicio(){
    this.router.navigate(['/inicio']);
  }

Ingredientes: string[]=['6 Papas peladas y cocidas','1 Envase de Leche Evaporada(360g)',
  '2 Cucharadas de mantequilla','1 Cucharada de consomé de pollo en polvo','1/2 Cucharadita de pimienta negra molida'
];

Procedimiento: string[]=['Machaca las papas para preparar un puré. Agrega la leche evaporada, la mantequilla, el consomé de pollo y la pimienta.',
  'Cocina durante 5 minutos a fuego medio, moviendo constantemente para que no se pegue.',
  'Sirve el puré como guarnición de tu platillo favorito'
];
}
