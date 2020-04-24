import { Recruteur } from './recruteur';

export interface RecruteurInterface {
  createRecruteur(candidat: Recruteur): void;
  findRecruteurById(id: number): Recruteur;
  removeRecruteur(id: number);
  getAllRecruteurs();
}
