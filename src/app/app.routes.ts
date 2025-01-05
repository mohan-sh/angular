import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact-information', component: ContactInformationComponent }
    ,
    { path: '**', redirectTo: 'home', pathMatch: 'full' } // Wildcard route to handle undefined paths
];
