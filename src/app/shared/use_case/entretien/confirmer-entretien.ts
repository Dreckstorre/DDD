import {Entretien, EntretienStatut} from "../../models/entretien";

export class ConfirmerEntretien {

  public confirmer(entretien: Entretien): void {
    entretien.statut = EntretienStatut.confirme;
  }
}
