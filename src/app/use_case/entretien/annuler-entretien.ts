import {Entretien, EntretienStatut} from "../../model/entretien/entretien";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnulerEntretien {

  public annuler(_raison: string, entretien: Entretien): void {
    entretien.raison = _raison;
    entretien.statut = EntretienStatut.annule;
  }
}
