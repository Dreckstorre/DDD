import { Entretien, EntretienStatut } from './entretien';
import { Creneau } from './creneau';

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

  it('should create an instance', () => {
    const entretien = new Entretien(entretienId, statut, creneau, recruteur, candidat);

    expect(entretien).toBeTruthy();
  });

  it('Try nothing', () => {
    const entretien = new Entretien(entretienId, statut, creneau, recruteur, candidat);

    expect(entretien.getStatut()).toEqual(EntretienStatut.attente);
  });

  it('Try cancelling', () => {
    const entretien = new Entretien(entretienId, statut, creneau, recruteur, candidat);
    entretien.annuler(raison);

    expect(entretien.getStatut()).toEqual(EntretienStatut.annule);
    expect(entretien.getRaison()).toEqual(raison);
  });

  it('Try to confirm', () => {
    const entretien = new Entretien(entretienId, statut, creneau, recruteur, candidat);
    entretien.confirmer();

    expect(entretien.getStatut()).toEqual(EntretienStatut.confirme);
  });
});
