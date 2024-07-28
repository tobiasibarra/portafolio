import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';

  selectedCategory: string = 'todas';

  descargarCV() {
    const link = document.createElement('a');
    link.href = 'assets/TobiasIbarra_CV.pdf';  // Ruta correcta al archivo en el servidor
    link.download = 'TobiasIbarra_CV.pdf';  // Nombre del archivo que se descargará
    link.click();
  }


  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }



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

  infoTempo() {
    Swal.fire({
      title: "TemPo!",

      html: `

      <h5> <strong>TemPo</strong> es una plataforma web diseñada para optimizar la administración de las finanzas personales. 
<br> Desarrollada con <strong>Angular, TypeScript, NodeJS, ExpressJS, MongoDB y más... </strong>


<br>  Es mi tesis a presentar en el proyecto final.</h5>
    Ir al proyecto en
    <a href="https://github.com/tobiasibarra/TemPo" autofocus>GitHb</a>
  `,
    });
  }
}
