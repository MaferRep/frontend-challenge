import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    const opacity = Math.max(0.2, 0.7 - scrollPosition / maxScroll);

    document.documentElement.style.setProperty('--grad-opacity', opacity.toString());
  }

}
