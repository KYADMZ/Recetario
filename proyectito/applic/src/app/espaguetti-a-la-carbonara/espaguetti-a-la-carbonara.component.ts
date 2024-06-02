import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espaguetti-a-la-carbonara',
  standalone: true,
  imports: [NgFor],
  templateUrl: './espaguetti-a-la-carbonara.component.html',
  styleUrl: './espaguetti-a-la-carbonara.component.css'
})
export class EspaguettiALaCarbonaraComponent {

  
  constructor(private router: Router){}
    inicio(){
      this.router.navigate(['/inicio']);
    }
  
  Ingredientes: string[]=['1/2 kilo de spaguetti','2 cucharadas de aceite de oliva','2 onzas de tocino','3 dientes de ajo, picaditos',
    '2 huevos grandes','1 taza de queso parmesano rallado','pimienta negra','perejil picado'];

  Procedimiento: string[]=['Prepare la salsa mientras pone a cocinar la pasta para que la pata este muy caliente y ayude a cocinar la salsa',
    'Mientras tanto, caliente el aceite de oliva en un sartén a fuego medio. añada el tocino y cocine durante unos 3 minutos, hasta que el tocino esté crujiente y suelte la grasa. Añada el ajo y cocinelo por 1 minuto.',
    'Añada el spaguetti escurrido caliente al sartén y mezcle durante 2 minutos para cubrir la pasta en la rasa del tocino. Bata los huevos y el queso parmesano en un recipiente, revolviendo bien para evitar grumos y agregue 1/2 taza del agua en la que se cocio la pasta',
    'Retire la cacerola del fuego y agregue la mezcla del huevo a la pasta, batiendo los huevos rápidamente hasta espesar',
    'Agregue sal y pimienta recién molida a la pasta y espolvoree el perejil.'
  ];

  
 

}
