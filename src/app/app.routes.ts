import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CappadociaComponent } from './destinations/cappadocia/cappadocia.component';
import { ZanzibarComponent } from './destinations/zanzibar/zanzibar.component';
import { MauritiusComponent } from './destinations/mauritius/mauritius.component';
import { TenerifeComponent } from './destinations/tenerife/tenerife.component';
import { DubrovnikComponent } from './destinations/dubrovnik/dubrovnik.component';
import { JapanComponent } from './destinations/japan/japan.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'cappadocia', component: CappadociaComponent },
  { path: 'zanzibar', component: ZanzibarComponent },
  { path: 'mauritius', component: MauritiusComponent },
  { path: 'tenerife', component: TenerifeComponent },
  { path: 'dubrovnik', component: DubrovnikComponent },
  { path: 'japan', component: JapanComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: FileNotFoundComponent },
];
