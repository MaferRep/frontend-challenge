import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('starContainer', { static: false }) starContainer!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.generateStars(4.4);
    }
  }

  private generateStars(rating: number) {
    if (isPlatformBrowser(this.platformId)) {
      const container = this.starContainer.nativeElement;
      container.innerHTML = ''; // Limpiar el contenedor
      
      const fullStarUrl = 'https://static.vecteezy.com/system/resources/thumbnails/021/508/434/small/white-star-shotting-star-transparent-bokeh-stars-free-free-png.png';
      const fullStars = Math.floor(rating);
      const hasPartialStar = rating % 1 !== 0;
      
      // Añadir estrellas completas
      for (let i = 0; i < fullStars; i++) {
        container.appendChild(this.createStarElement(fullStarUrl, 'full-star'));
      }

      // Añadir estrella parcial si existe
      if (hasPartialStar) {
        const partialStar = this.createStarElement(fullStarUrl, 'partial-star');
        partialStar.style.clipPath = `inset(0 60% 0 0)`;
        container.appendChild(partialStar);
      }

      // Añadir estrellas vacías para completar 5 estrellas
      const emptyStars = 5 - Math.ceil(rating);
      for (let i = 0; i < emptyStars; i++) {
        const emptyStar = this.createStarElement(fullStarUrl, 'empty-star');
        emptyStar.style.filter = 'grayscale(100%)';
        emptyStar.style.opacity = '0.4';
        container.appendChild(emptyStar);
      }
    }
  }

  private createStarElement(src: string, className: string): HTMLImageElement {
    const star = document.createElement('img');
    star.src = src;
    star.className = className;
    star.style.width = '15px';
    star.style.height = '15px';
    return star;
  }
}
