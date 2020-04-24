import { Entretien, EntretienStatut } from '../../model/entretien/entretien';
import { Creneau } from '../../model/creneau/creneau';
import {Salle} from "../../model/salle/salle";
import {Materiel, MaterielType} from "../../model/materiel/materiel";
import {AnnulerEntretien} from "./annuler-entretien";
import {Candidat, Competence} from "../../model/candidat/candidat";

const dateString: string = '2020-04-22T00:00:00';
const date1: Date = new Date(dateString);
const dureeMs: number = 35;
const entretienId: number = 0;
const statut: EntretienStatut = EntretienStatut.annule;
const creneau: Creneau = new Creneau(date1, dureeMs);
const recruteur: string = "toto";
const competences: Array<Competence> = [Competence.net, Competence.java];
const candidat: Candidat = new Candidat(1, "Paul", "paul@mail.com", competences);
const raison: string = "fun";
const materiels: Array<Materiel> = [new Materiel(1,"projecteur", MaterielType.Informatique), new Materiel(1, "lampe", MaterielType.Lumière)];
const salle: Salle = new Salle(1, "salle 200", materiels, 5);

describe('AnnulerEntretien', () => {
  it('should cancel entretien', () => {
    const entretien = new Entretien(entretienId, statut, creneau, recruteur, candidat, salle);
    const annulerEntretien = new AnnulerEntretien();

    annulerEntretien.annuler("fun", entretien);

    expect(entretien.statut).toEqual(EntretienStatut.annule);
    expect(entretien.raison).toEqual(raison);
  });

});
