import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HomeComponent,
    DestinationsComponent,
    ContactUsComponent,
    FileNotFoundComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Wanderlusts';
}
