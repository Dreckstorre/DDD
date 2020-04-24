import { Entretien, EntretienStatut } from './entretien';
import { Creneau } from '../creneau/creneau';
import {Salle} from "../salle/salle";
import {Materiel, MaterielType} from "../materiel/materiel";

describe('Entretien', () => {
  const dateString: string = '2020-04-22T00:00:00';
  const date1: Date = new Date(dateString);
  const dureeMs: number = 35;
  const entretienId: number = 0;
  const statut: EntretienStatut = EntretienStatut.attente;
  const creneau: Creneau = new Creneau(date1, dureeMs);
  const recruteur: string = "toto";
  const candidat: string = "titi";
  const raison: string = "patate";
  const materiels: Array<Materiel> = [new Materiel("projecteur", MaterielType.Informatique), new Materiel("lampe", MaterielType.Lumière)];
  const salle: Salle = new Salle("salle 200", materiels, 5);



  it('should create an instance', () => {
    const entretien = new Entretien(entretienId, statut, creneau, recruteur, candidat, salle);

    expect(entretien).toBeTruthy();
  });

  it('Try nothing', () => {
    const entretien = new Entretien(entretienId, statut, creneau, recruteur, candidat, salle);

    expect(entretien.statut).toEqual(EntretienStatut.attente);
  });

});
