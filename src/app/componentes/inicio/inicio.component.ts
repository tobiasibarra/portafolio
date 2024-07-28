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

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

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
    if (isPlatformBrowser(this.platformId)) {
      const link = document.createElement('a');
      link.href = 'assets/TobiasIbarra_CV.pdf';
      link.download = 'TobiasIbarra_CV.pdf';
      link.click();
    }
  }
}
