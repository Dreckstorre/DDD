import { Creneau } from '../creneau/creneau';
import { Salle } from '../salle/salle';
import {Candidat} from "../candidat/candidat";

export enum EntretienStatut {
  attente,
  confirme,
  annule
}

export class Entretien {
  private entretienId: number;
  public statut: EntretienStatut;
  private creneau: Creneau;
  private recruteur: string;
  private candidat: Candidat;
  public raison: string;
  private salle: Salle;

  constructor(_entretienId: number, _statut: EntretienStatut, _creneau: Creneau, _recruteur: string, _candidat: Candidat, _salle: Salle) {
    this.entretienId = _entretienId;
    this.statut = _statut;
    this.creneau = _creneau;
    this.recruteur = _recruteur;
    this.candidat = _candidat;
    this.raison = '';
    this.salle = _salle;
  }


}
