import { ConfirmerEntretien } from './confirmer-entretien';
import {Entretien, EntretienStatut} from "../../models/entretien/entretien";
import {Creneau} from "../../models/creneau/creneau";
import {Materiel, MaterielType} from "../../models/materiel/materiel";
import {Salle} from "../../models/salle/salle";
import {Candidat, Competence} from "../../models/candidat/candidat";

describe('ConfirmerEntretien', () => {

  const dateString: string = '2020-04-22T00:00:00';
  const date1: Date = new Date(dateString);
  const dureeMs: number = 35;
  const entretienId: number = 0;
  const statut: EntretienStatut = EntretienStatut.attente;
  const creneau: Creneau = new Creneau(date1, dureeMs);
  const recruteur: string = "toto";
  const competences: Array<Competence> = [Competence.net, Competence.java];
  const candidat: Candidat = new Candidat("Paul", "paul@mail.com", competences);
  const raison: string = "patate";
  const materiels: Array<Materiel> = [new Materiel("projecteur", MaterielType.Informatique), new Materiel("lampe", MaterielType.Lumière)];
  const salle: Salle = new Salle("salle 200", materiels, 5);

  it('should confirm an entretien', () => {
    const entretien = new Entretien(entretienId, statut, creneau, recruteur, candidat, salle);
    const confirmerEntretien = new ConfirmerEntretien();

    confirmerEntretien.confirmer(entretien);

    expect(entretien.statut).toEqual(EntretienStatut.confirme);
  });
});
