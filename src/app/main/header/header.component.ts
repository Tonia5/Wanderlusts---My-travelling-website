import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  scrollService = inject(ScrollService);

  ngOnInit(): void {
    this.scrollService.startFromTop();
    // Get the carousel element
    const mycarouselElement = document.querySelector('#myCarousel');
    // Initialize the carousel
    const carousel = new bootstrap.Carousel(mycarouselElement, {
      interval: 2000,
      touch: false,
    });
  }
}
