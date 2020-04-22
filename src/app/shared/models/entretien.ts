import { Creneau } from './creneau';

export enum EntretienStatut {
  attente,
  confirme,
  annule
}

export class Entretien {
  private entretienId: number;
  private statut: EntretienStatut;
  private creneau: Creneau;
  private recruteur: string;
  private candidat: string;
  private raison: string;

  constructor(_entretienId: number, _statut: EntretienStatut, _creneau: Creneau, _recruteur: string, _candidat: string) {
    this.entretienId = _entretienId;
    this.statut = _statut;
    this.creneau = _creneau;
    this.recruteur = _recruteur;
    this.candidat = _candidat;
    this.raison = '';
  }

  public getStatut(): EntretienStatut {
    return this.statut;
  }

  public getRaison(): string {
    return this.raison;
  }

  public confirmer(): void {
    this.statut = EntretienStatut.confirme;
  }

  public annuler(_raison: string): void {
    this.raison = _raison;
    this.statut = EntretienStatut.annule;
  }
}
