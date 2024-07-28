import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos'; // Ajuste en la importación
import 'aos/dist/aos.css';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  descargarCV() {
    const link = document.createElement('a');
    
    link.href = 'assets/TobiasIbarra_CV.pdf';  
    link.download = 'TobiasIbarra_CV.pdf'; 
    link.click();
  }
}
