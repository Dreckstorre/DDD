import { Injectable } from '@angular/core';
import {CandidatStorageService} from "../repository/candidat-storage.service";
import {Candidat} from "../model/candidat/candidat";

@Injectable({
  providedIn: 'root'
})
export class CandidatHttpService {

  constructor(private candidatRepository: CandidatStorageService) { }

  public getCandidatById(id: number): Candidat{
    return this.candidatRepository.findCandidatById(id);
  }

  public deleteCandidat(id: number): void{
    this.candidatRepository.removeCandidat(id);
  }

  public postCandidat(candidat: Candidat): void{
    this.candidatRepository.createCandidat(candidat);
  }
}
