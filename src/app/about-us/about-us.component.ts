import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule,NavigationComponent,FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {
  scrollService = inject(ScrollService);

  ngOnInit(): void {
    this.scrollService.startFromTop();
  }
}


