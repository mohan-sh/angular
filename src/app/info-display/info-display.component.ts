import { Component, OnInit } from '@angular/core';
import { InfoDataService } from '../info-data.service';

@Component({
  standalone:true,
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.css']
})
export class InfoDisplayComponent implements OnInit {
  info: any = {};

  constructor(private infoService: InfoDataService) {}

  ngOnInit(): any {
    this.info = this.infoService.getInfo();
  }
}
