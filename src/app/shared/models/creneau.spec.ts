import { Creneau } from './creneau';

describe('Creneau', () => {
  const dateString: string = '2020-04-22T00:00:00';
  const dateString2: string = '2020-04-22T00:00:00';
  const dateVendredi: string = '2020-04-24T00:00:00';
  const someMs: number = 35;
  const aDayMs: number = 1 * 24 * 60 * 60 * 1000;


  it('one should equal to creneau two', () => {
    const date1 = new Date(dateString);
    const date2 = new Date(dateString2);

    const creneau1 = new Creneau(date1, someMs);
    const creneau2 = new Creneau(date2, someMs);

    expect(creneau1).toEqual(creneau2);
  });

  it('cant be created due weekend', () => {
    const date1 = new Date(dateVendredi);

    expect( () => { return new Creneau(date1, aDayMs) }).toThrowError();
  });
  

});
