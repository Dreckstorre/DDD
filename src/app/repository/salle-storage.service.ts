import { Injectable } from '@angular/core';
import {Candidat} from "../model/candidat/candidat";

@Injectable({
  providedIn: 'root'
})
export class SalleStorageService {

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

  public deleteCandidat(id: number){
    this.candidats.find((candidat, index) =>{

      if(candidat.id === id){
        this.candidats.splice(index, 1);
      }
    })
  }
}
