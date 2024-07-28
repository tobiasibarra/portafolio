import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
 
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

 

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navbar = document.getElementById('myTopnav');
      if (window.pageYOffset > 0) {
        navbar?.classList.add('fixed');
      } else {
        navbar?.classList.remove('fixed');
      }
    }
  }

  descargarCV(): void {
    console.log('Ejecutando descargarCV en el navegador');
    if (isPlatformBrowser(this.platformId)) {
      console.log('Ejecutando descargarCV en el navegador');
      const link = document.createElement('a');
      link.href = 'http://localhost:4200/assets/TobiasIbarra_CV.pdf'; 
      link.target = '_blank';  // Asegúrate de que se abra en una nueva pestaña
      link.download = 'TobiasIbarra_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);  // Remueve el enlace después de la descarga
    }
  }
}
