import { Recruteur } from './recruteur';
import { EntretienStatut } from './entretien';
import { Creneau } from './creneau';
import { Competence, Candidat } from './candidat';
import { Salle } from './salle';

describe('Recruteur', () => {
  const dateString: string = '2020-04-22T00:00:00';
  const date1: Date = new Date(dateString);
  const dureeMs: number = 35;
  const entretienId: number = 0;
  const statut: EntretienStatut = EntretienStatut.attente;
  const creneau: Creneau = new Creneau(date1, dureeMs);
  const competences: Array<Competence> = [Competence.net, Competence.java];
  const recruteur: Array<Recruteur> = [new Recruteur(0, "michel", "JackyMichel@mail.fr", competences)];
  const candidat: Candidat = new Candidat(0, "Paul", "paul@mail.com", competences);
  const raison: string = "patate";
  const salle: Salle = new Salle(0, "salle 200", 5);

  it('should create an instance', () => {
    expect(new Recruteur(0,"","",[])).toBeTruthy();
  });
});
