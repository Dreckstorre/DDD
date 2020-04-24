
export enum MaterielType {
  "Lumière",
  "Mobilier",
  "Informatique",
  ""
}

export class Materiel {

  private id: number;
  private nom: string;
  private type: MaterielType;


  constructor(id: number, nom: string, type: MaterielType) {
    this.id = id;
    this.nom = nom;
    this.type = type;
  }
}
