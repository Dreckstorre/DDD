import { Injectable } from '@angular/core';
import {CreneauxInterface} from "../model/entretien/creneaux-interface";
import {Salle} from "../model/entretien/salle";
import {Creneau} from "../model/entretien/creneau";

@Injectable({
  providedIn: 'root'
})
export class CreneauHttpService implements CreneauxInterface{

  private creneaux: Array<Creneau>;

  constructor() {
    this.creneaux = new Array<Creneau>();
  }

  public createCreneau(creneau: Creneau): void{
    this.creneaux.push(creneau);
  }

  public findCreneauById(_creneau: Creneau): Creneau{
    return this.creneaux.find((creneau: Creneau) => creneau == _creneau)
  }

  public deleteCreneau(_creneau: Creneau){
    this.creneaux.find((creneau, index) =>{

      if(creneau == _creneau){
        this.creneaux.splice(index, 1);
      }
    })
  }
}
