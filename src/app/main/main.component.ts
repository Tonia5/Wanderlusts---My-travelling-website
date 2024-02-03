import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MauritiusComponent } from '../destinations/mauritius/mauritius.component';
import { CappadociaComponent } from '../destinations/cappadocia/cappadocia.component';
import { JapanComponent } from '../destinations/japan/japan.component';
import { DubrovnikComponent } from '../destinations/dubrovnik/dubrovnik.component';
import { TenerifeComponent } from '../destinations/tenerife/tenerife.component';
import { ZanzibarComponent } from '../destinations/zanzibar/zanzibar.component';
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, RouterLink,
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    MauritiusComponent,
    CappadociaComponent,
    JapanComponent,
    DubrovnikComponent,
    TenerifeComponent,
    ZanzibarComponent,
    FooterComponent,
    AboutUsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
