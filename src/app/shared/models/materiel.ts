
export enum MaterielType {
  "Lumière",
  "Mobilier",
  "Informatique",
  ""
}

export class Materiel {

  private nom: string;
  private type: MaterielType;


  constructor(nom: string, type: MaterielType) {
    this.nom = nom;
    this.type = type;
  }
}
