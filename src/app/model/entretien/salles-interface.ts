import {Salle} from "./salle";

export interface SallesInterface {

  createSalle(salle: Salle): void;
  findSalleById(id: number): Salle;
  deleteSalle(id: number): void;
}
