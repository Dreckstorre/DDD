import { Injectable } from '@angular/core';
import {Materiel} from "../model/materiel/materiel";

@Injectable({
  providedIn: 'root'
})
export class MaterielStorageService {

  private materiels: Array<Materiel>;

  constructor() {
    this.materiels = new Array<Materiel>();
  }

  public createMateriel(materiel: Materiel): void{
    this.materiels.push(materiel);
  }

  public findMaterielById(id: number): Materiel{
    return this.materiels.find((materiel: Materiel) => materiel.id === id)
  }

  public deleteMateriel(id: number){
    this.materiels.find((materiel, index) =>{

      if(materiel.id === id){
        this.materiels.splice(index, 1);
      }
    })
  }
}
