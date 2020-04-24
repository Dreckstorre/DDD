import {Candidat} from "./candidat";

export interface CandidatsInterface {

  createCandidat(candidat: Candidat): void;
  findCandidatById(id: number): Candidat;
  removeCandidat(id: number);
}
