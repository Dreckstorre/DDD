import { Entretien, EntretienStatut } from '../../model/entretien/entretien';
import { Creneau } from '../../model/entretien/creneau';
import {Salle} from "../../model/entretien/salle";
import {AnnulerEntretien} from "./annuler-entretien";
import {Candidat, Competence} from "../../model/entretien/candidat";
import { Recruteur } from 'src/app/model/entretien/recruteur';

const dateString: string = '2020-04-22T00:00:00';
const date1: Date = new Date(dateString);
const dureeMs: number = 35;
const entretienId: number = 0;
const statut: EntretienStatut = EntretienStatut.annule;
const creneau: Creneau = new Creneau(date1, dureeMs);
const competences: Array<Competence> = [Competence.net, Competence.java];
const recruteur: Array<Recruteur> = [new Recruteur(0, "michel", "JackyMichel@mail.fr", competences)];
const candidat: Candidat = new Candidat(1, "Paul", "paul@mail.com", competences);
const raison: string = "fun";
const salle: Salle = new Salle(1, "salle 200", 5);

describe('AnnulerEntretien', () => {
  it('should cancel entretien', () => {
    const entretien = new Entretien(entretienId, creneau, recruteur, candidat, salle);
    const annulerEntretien = new AnnulerEntretien();

    annulerEntretien.annuler("fun", entretien);

    expect(entretien.statut).toEqual(EntretienStatut.annule);
    expect(entretien.raison).toEqual(raison);
  });

});
