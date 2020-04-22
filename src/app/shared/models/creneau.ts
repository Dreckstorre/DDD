import { Timestamp } from 'rxjs';

export class Creneau {
  private readonly date: number;
  private readonly heureDebut: number;
  private readonly heureFin: number;

  constructor(date: Date, duree: number) {
    const testDate: Date = new Date();
    testDate.setTime(date.getTime() + duree);

    if(this.isWeekend(date) || this.isWeekend(testDate)) {
      throw new Error('ITS THE WEEKEND DUDE');
    }

    this.date = date.getDate();
    this.heureDebut = date.getTime();
    this.heureFin = date.getTime() + duree;

  }

  private isWeekend(d: Date): boolean {
    const day: number = d.getDay();
    const isWeekend: boolean = (day === 6) || (day === 0);

    return isWeekend;
  }

}
