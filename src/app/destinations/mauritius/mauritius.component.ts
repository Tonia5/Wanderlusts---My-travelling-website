import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../navigation/navigation.component';
import { FooterComponent } from '../../footer/footer.component';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-mauritius',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavigationComponent,FooterComponent],
  templateUrl: './mauritius.component.html',
  styleUrl: './mauritius.component.css'
})
export class MauritiusComponent implements OnInit {
  scrollService = inject(ScrollService);

  ngOnInit(): void {
    this.scrollService.startFromTop();
  }
}