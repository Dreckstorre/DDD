import {Entretien, EntretienStatut} from "../../model/entretien/entretien";

export class ConfirmerEntretien {

  public confirmer(entretien: Entretien): void {
    entretien.statut = EntretienStatut.confirme;
  }
}
