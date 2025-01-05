import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoDataService {
  private info: any = {};

  constructor() { }

  saveInfo(data: any): void {
    this.info = data;
  }

  getInfo(): any {
    return this.info;
  }
}
