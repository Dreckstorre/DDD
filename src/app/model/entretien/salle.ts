
export class Salle {

  public id: number;
  private nom: string;
  private contenance: number;


  constructor(id: number, nom: string, contenance: number) {
    this.id = id;
    this.nom = nom;
    this.contenance = contenance;
  }
}
