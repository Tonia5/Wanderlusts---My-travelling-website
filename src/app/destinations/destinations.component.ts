import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {

}
