import { Creneau } from './creneau';

export enum EntretienStatut {
  confirme = 'confirmé',
  annule = 'annulé'
}

export class Entretien {
  private entretienId: number;
  private statut: string;
  private creneau: Creneau;
  private recruteur: string;
  private candidat: string;

  constructor(_entretienId: number, _statut: string, _creneau: Creneau, _recruteur: string, _candidat: string) {
    this.entretienId = _entretienId;
    this.statut = _statut;
    this.creneau = _creneau;
    this.recruteur = _recruteur;
    this.candidat = _candidat;
  }

  public confirmer(): void {
    this.statut = EntretienStatut.confirme;
  }

  public annuler(raison: string): void {
    this.statut = EntretienStatut.annule;
  }
}
