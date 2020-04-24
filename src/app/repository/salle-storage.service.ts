import { Injectable } from '@angular/core';
import {Salle} from "../model/salle/salle";

@Injectable({
  providedIn: 'root'
})
export class SalleStorageService {

  private salles: Array<Salle>;

  constructor() {
    this.salles = new Array<Salle>();
  }

  public createSalle(salle: Salle): void{
    this.salles.push(salle);
  }

  public findSalleById(id: number): Salle{
    return this.salles.find((salle: Salle) => salle.id === id)
  }

  public deleteSalle(id: number){
    this.salles.find((salle, index) =>{

      if(salle.id === id){
        this.salles.splice(index, 1);
      }
    })
  }
}
