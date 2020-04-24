import {Entretien, EntretienStatut} from "../../model/entretien/entretien";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmerEntretien {

  public confirmer(entretien: Entretien): void {
    entretien.statut = EntretienStatut.confirme;
  }
}
