import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';

export const routes: Routes = [
    {'path': '',component:HomeComponent},
    {'path':'about',component:AboutComponent},
    {'path':'contact-information',component:ContactInformationComponent}
];
