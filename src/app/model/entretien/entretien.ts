import { Creneau } from './creneau';
import { Salle } from './salle';
import {Candidat} from "./candidat";
import { Recruteur } from './recruteur';

export enum EntretienStatut {
  attente,
  confirme,
  annule
}

export class Entretien {
  public id: number;
  public statut: EntretienStatut;
  private creneau: Creneau;
  private recruteur: Array<Recruteur>;
  private candidat: Candidat;
  public raison: string;
  private salle: Salle;

  constructor(_entretienId: number, _creneau: Creneau, _recruteur: Array<Recruteur>, _candidat: Candidat, _salle: Salle) {
    this.id = _entretienId;
    this.statut = EntretienStatut.attente;
    this.creneau = _creneau;
    this.recruteur = _recruteur;
    this.candidat = _candidat;
    this.raison = '';
    this.salle = _salle;
  }



}
