import {Entretien, EntretienStatut} from "../../model/entretien/entretien";

export class AnnulerEntretien {

  public annuler(_raison: string, entretien: Entretien): void {
    entretien.raison = _raison;
    entretien.statut = EntretienStatut.annule;
  }
}
