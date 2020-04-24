export enum Competence {
  java,
  js,
  net
}

export class Candidat {

  private nom: string;
  private mail: string;
  private competence: Array<Competence>;


  constructor(nom: string, mail: string, competence: Array<Competence>) {
    this.nom = nom;
    this.mail = mail;
    this.competence = competence;
  }
}
