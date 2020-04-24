import { Creneau } from './creneau';
import { Salle } from './salle';
import {Candidat} from "./candidat";

export enum EntretienStatut {
  attente,
  confirme,
  annule
}

export class Entretien {
  public id: number;
  public statut: EntretienStatut;
  private creneau: Creneau;
  private recruteur: string;
  private candidat: Candidat;
  public raison: string;
  private salle: Salle;

  constructor(_entretienId: number, _statut: EntretienStatut, _creneau: Creneau, _recruteur: string, _candidat: Candidat, _salle: Salle) {
    this.id = _entretienId;
    this.statut = _statut;
    this.creneau = _creneau;
    this.recruteur = _recruteur;
    this.candidat = _candidat;
    this.raison = '';
    this.salle = _salle;
  }

}
