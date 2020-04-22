import { Timestamp } from 'rxjs';

export class Creneau {
  private readonly date: number;
  private readonly heureDebut: number;
  private readonly heureFin: number;

  constructor(date: Date, duree: number) {
    this.date = date.getDate();
    this.heureDebut = date.getTime();
    this.heureFin = date.getTime() + duree;
  }


}
