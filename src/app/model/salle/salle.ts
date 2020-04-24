import {Materiel} from "../materiel/materiel";

export class Salle {

  private id: number;
  private nom: string;
  private materiel: Array<Materiel>;
  private contenance: number;


  constructor(id: number, nom: string, materiel: Array<Materiel>, contenance: number) {
    this.id = id;
    this.nom = nom;
    this.materiel = materiel;
    this.contenance = contenance;
  }
}
