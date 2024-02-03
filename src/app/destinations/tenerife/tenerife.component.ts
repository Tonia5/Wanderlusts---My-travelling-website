import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../../navigation/navigation.component';
import { FooterComponent } from '../../footer/footer.component';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-tenerife',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,NavigationComponent,FooterComponent],
  templateUrl: './tenerife.component.html',
  styleUrl: './tenerife.component.css'
})
export class TenerifeComponent implements OnInit {
  scrollService = inject(ScrollService);

  ngOnInit(): void {
    this.scrollService.startFromTop();
  }
}