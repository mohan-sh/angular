import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/login/navbar/navbar.component';
import { InfoDisplayComponent } from './info-display/info-display.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NavbarComponent,InfoDisplayComponent,InfoFormComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
