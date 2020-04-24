import { Injectable } from '@angular/core';
import { Recruteur } from '../model/entretien/recruteur';

@Injectable({
  providedIn: 'root'
})
export class RecruteurHttpService {

  private recruteurs: Array<Recruteur>;

  constructor() {
    this.recruteurs = new Array<Recruteur>();
  }

  public createrecruteur(recruteur: Recruteur): void {
    this.recruteurs.push(recruteur);
  }

  public findRecruteurById(id: number): Recruteur {
    return this.recruteurs.find((recruteur: Recruteur) => recruteur.id === id)
  }

  public getAllRecruteurs(): Array<Recruteur> {
    return this.recruteurs;
  }


  public removeRecruteur(id: number){
    this.recruteurs.find((recruteur, index) => {
      if(recruteur.id === id){
        this.recruteurs.splice(index, 1);
      }
    })
  }
}
