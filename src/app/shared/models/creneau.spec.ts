import { Creneau } from './creneau';

describe('Creneau', () => {
  it('one should equal to creneau two', () => {
    const dateString = '2020-04-22T00:00:00';
    const dateString2 = '2020-04-22T00:00:00';

    const date1 = new Date(dateString);
    const date2 = new Date(dateString2);

    const creneau1 = new Creneau(date1, 35);
    const creneau2 = new Creneau(date2, 35);

    expect(creneau1).toEqual(creneau2);
  });

  it('cant be created due weekend', () => {
    const dateString = '2020-04-24T00:00:00';

    const date1 = new Date(dateString);

    expect(() => { new Creneau(date1, 1 * 24 * 60 * 60 * 1000) }).toThrowError();
  });

});
