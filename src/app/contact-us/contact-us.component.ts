import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollService } from '../services/scroll.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink, NavigationComponent, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  @ViewChild('messageForm') messageForm!: NgForm;
  messageSent: boolean = false;
  onFormSubmit() {
    console.log('Form submitted');
    this.messageSent = true;

    // Manually reset form controls after a delay
    setTimeout(() => {
      this.resetForm();
    }, 10000);}

    resetForm() {
      // Manually reset form controls
      if (this.messageForm) {
        const formControls = this.messageForm.form.controls;
  
        Object.keys(formControls).forEach((key) => {
          const control = formControls[key];
          control.setValue(null); 
          control.markAsPristine(); // Mark form control as pristine
          control.markAsUntouched(); // Mark form control as untouched
        });
  
        // Mark the entire form as pristine
        this.messageForm.form.markAsPristine();
        this.messageForm.form.markAsUntouched();
      }
        this.messageSent = false;
      }
      
     
  scrollService = inject(ScrollService);

  ngOnInit(): void {
    this.scrollService.startFromTop();
  }}

