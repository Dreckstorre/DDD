import { CreneauHttpService } from 'src/app/infrastructure/creneau-http.service';
import { EntretienHttpService } from 'src/app/infrastructure/entretien-http.service';
import { CandidatHttpService } from 'src/app/infrastructure/candidat-http.service';
import { SalleHttpService } from 'src/app/infrastructure/salle-http.service';
import { RecruteurHttpService } from 'src/app/infrastructure/recruteur-http.service';
import { Recruteur } from 'src/app/model/entretien/recruteur';
import { Entretien } from 'src/app/model/entretien/entretien';
import { Salle } from 'src/app/model/entretien/salle';
import { Candidat } from 'src/app/model/entretien/candidat';
import { Injectable } from '@angular/core';
import { EntretienIdGeneratorService } from './entretien-id-generator.service';
import { ConfirmerEntretien } from './confirmer-entretien';


@Injectable({
  providedIn: 'root'
})
export class PlanInterview {
  constructor(private creneauHttpService :CreneauHttpService,
    private entretienHttpService :EntretienHttpService,
    private candidatHttpService :CandidatHttpService,
    private salleHttpService :SalleHttpService,
    private recruteurHttpService: RecruteurHttpService,
    private entretienIdGenerator: EntretienIdGeneratorService,
    private confirmerEntretien: ConfirmerEntretien) {

  }

  public plan(request: any): void {
    const candidat: Candidat = this.candidatHttpService.findCandidatById(request.candidateId);
    const recruteurs: Array<Recruteur> = this.recruteurHttpService.getAllRecruteurs();
    const salle: Salle = new Salle(0, 'Mac', 5);

    const interview: Entretien = new Entretien(this.entretienIdGenerator.generateId(), request.interviewDay, recruteurs, candidat, salle);
    this.confirmerEntretien.confirmer(interview);
    this.entretienHttpService.createEntretien(interview);
  }
}
