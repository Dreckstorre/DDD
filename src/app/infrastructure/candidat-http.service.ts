import { Injectable } from '@angular/core';
import {Candidat} from "../model/entretien/candidat";
import {CandidatsInterface} from "../model/entretien/candidats-interface";

@Injectable({
  providedIn: 'root'
})
export class CandidatHttpService implements CandidatsInterface{

  private candidats: Array<Candidat>;

  constructor() {
    this.candidats = new Array<Candidat>();
  }

  public createCandidat(candidat: Candidat): void{
    this.candidats.push(candidat);
  }

  public findCandidatById(id: number): Candidat{
    return this.candidats.find((candidat: Candidat) => candidat.id === id)
  }

  public removeCandidat(id: number){
    this.candidats.find((candidat, index) =>{

      if(candidat.id === id){
        this.candidats.splice(index, 1);
      }
    })
  }
}
