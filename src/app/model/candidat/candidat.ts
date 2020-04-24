export enum Competence {
  java,
  js,
  net
}

export class Candidat {

  private id: number;
  private nom: string;
  private mail: string;
  private competence: Array<Competence>;


  constructor(id: number, nom: string, mail: string, competence: Array<Competence>) {
    this.id = id;
    this.nom = nom;
    this.mail = mail;
    this.competence = competence;
  }
}
