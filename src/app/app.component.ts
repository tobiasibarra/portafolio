import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';

  descargarCV() {
    const link = document.createElement('a');
    link.href = 'assets/TobiasIbarra_CV.pdf';  // Ruta correcta al archivo en el servidor
    link.download = 'TobiasIbarra_CV.pdf';  // Nombre del archivo que se descargará
    link.click();
  }

  
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
}
