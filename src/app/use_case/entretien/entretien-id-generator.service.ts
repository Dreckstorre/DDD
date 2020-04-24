import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntretienIdGeneratorService {
  private entretienId : number = 0;

  constructor() { }

  public generateId() {
    this.entretienId++;
    return this.entretienId;
  }

}
