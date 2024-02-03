import { CommonModule } from '@angular/common';
import { Component,Renderer2, ElementRef, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DestinationsComponent } from '../destinations/destinations.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule,RouterOutlet,
  RouterLink,FormsModule, DestinationsComponent, ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{searchQuery: string = '';
destinations = [
  { name: 'Cappadocia', route: '/cappadocia' },
  { name: 'Zanzibar', route: '/zanzibar' },
  { name: 'Mauritius', route: '/mauritius' },
  { name: 'Tenerife', route: '/tenerife' },
  { name: 'Dubrovnik', route: '/dubrovnik' },
  { name: 'Japan', route: '/japan' },
  
];

constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) {}

ngOnInit(): void {
  // Get the native element of the dropdown button
  const dropdownButton = this.el.nativeElement.querySelector('.dropdown-toggle');

  // Add a click event listener to the dropdown button
  this.renderer.listen(dropdownButton, 'click', () => {
    // Toggle the 'show' class on the dropdown menu
    const dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
    this.renderer.addClass(dropdownMenu, 'show');
  });
  
  console.log('Destinations:', this.destinations);

  // Add a click event listener to the document to close the dropdown when clicking outside
  this.renderer.listen('document', 'click', (event: Event) => {
    const isClickedInside = this.el.nativeElement.contains(event.target);
    if (!isClickedInside) {
      const dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
      this.renderer.removeClass(dropdownMenu, 'show');
    }
  });
}

searchDestinations(): void {
  const lowerCaseQuery = this.searchQuery.toLowerCase().trim();
  console.log('Lowercase Query:', lowerCaseQuery);
  const matchingDestination = this.destinations.find(destination =>
    destination.name.toLowerCase().includes(lowerCaseQuery)
  );

  console.log('Searching for:', this.searchQuery);
  console.log('Matching Destination:', matchingDestination);
  if (matchingDestination) {
    const index = this.destinations.indexOf(matchingDestination);
    this.router.navigate([this.destinations[index].route]);
  } else {
    console.log('No matching destination found for:', this.searchQuery);
    this.router.navigate(['/not-found']);
  }
}}
