import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-file-not-found',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './file-not-found.component.html',
  styleUrl: './file-not-found.component.css'
})
export class FileNotFoundComponent {

}
