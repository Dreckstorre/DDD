import { Injectable } from '@angular/core';
import {Entretien} from "../model/Entretien/Entretien";

@Injectable({
  providedIn: 'root'
})
export class EntretienStorageService {

  private entretiens: Array<Entretien>;

  constructor() {
    this.entretiens = new Array<Entretien>();
  }

  public createEntretien(entretien: Entretien): void{
    this.entretiens.push(entretien);
  }

  public findEntretienById(id: number): Entretien{
    return this.entretiens.find((entretien: Entretien) => entretien.id === id)
  }

  public deleteEntretien(id: number){
    this.entretiens.find((entretien, index) =>{

      if(entretien.id === id){
        this.entretiens.splice(index, 1);
      }
    })
  }
}
