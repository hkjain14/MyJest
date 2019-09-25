const {division,divisionAlt} = require('./main');

jest.mock('./DivObject',()=>({    //Imp : Second last char of this line (ie extra bracket) coz no return keyword used
  doDiv: jest.fn(()=>3),
  fakeFunc: jest.fn(()=>4)
}));                              //Imp: One more closing bracket for that extra opening bracket.

describe('main',()=> {
  it('Tests divObject', () => {

    const ans = division(1, 2);
    const ans2 = divisionAlt(3, 2);

    expect(ans).toEqual(3);
    expect(ans2).toEqual(4);
  });
});