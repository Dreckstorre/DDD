import {Materiel} from "./materiel";

export class Salle {

  private nom: string;
  private materiel: Array<Materiel>;
  private contenance: number;


  constructor(_nom: string, _materiel: Array<Materiel>, _contenance: number) {
    this.nom = _nom;
    this.materiel = _materiel;
    this.contenance = _contenance;
  }
}
