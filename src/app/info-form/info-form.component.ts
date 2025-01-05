import { Component } from '@angular/core';
import { InfoDataService } from '../info-data.service';
import { FormsModule } from '@angular/forms';
@Component({
  standalone:true,
  imports:[FormsModule],
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent {
  info: any = {};

  constructor(private infoService: InfoDataService) {}

  submitInfo() {
    this.infoService.saveInfo(this.info);
  }
}
