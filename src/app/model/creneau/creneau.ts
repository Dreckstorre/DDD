export enum JoursDeLaSemaine {
  dimanche = 0,
  lundi = 1,
  mardi = 2,
  mercredi = 3,
  jeudi = 4,
  vendredi = 5,
  samedi = 6
}

export class Creneau {
  private readonly WEEKEND_ERROR = 'ITS THE WEEKEND DUDE';

  private readonly date: number;
  private readonly heureDebut: number;
  private readonly heureFin: number;

  constructor(date: Date, duree: number) {
    const testDate: Date = new Date();
    testDate.setTime(date.getTime() + duree);

    if(this.isWeekend(date) || this.isWeekend(testDate)) {
      throw new Error(this.WEEKEND_ERROR);
    }

    this.date = date.getDate();
    this.heureDebut = date.getTime();
    this.heureFin = date.getTime() + duree;

  }

  private isWeekend(d: Date): boolean {
    const day: number = d.getDay();
    const isWeekend: boolean = (day === JoursDeLaSemaine.samedi) || (day === JoursDeLaSemaine.dimanche);

    return isWeekend;
  }

}
