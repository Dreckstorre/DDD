import {Entretien} from "./entretien";

export interface EntretiensInterface {

  createEntretien(entretien: Entretien): void;
  findEntretienById(id: number): Entretien;
  deleteEntretien(id: number):void;
}
