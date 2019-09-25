const {division,divisionAlt} = require('./main');
const div = require('./DivObject');

jest.mock('./DivObject');

describe('main',()=> {
  //div object is mocked by jest.mock('./DivObject');
  // Hence all its methods are mockable. So we mock one of its methods to return our desired value.
  it('Tests divObject', () => {
    div.doDiv.mockReturnValue(2);
    //div.fakeFunc.mockReturnValue(4);           : Will not work, but can work by the way in main-div-alternate.spec.js

    const ans = division(1, 2);
    //const ans2 = divisionAlt(1,0);

    expect(ans).toEqual(2);
    //expect(ans2).toEqual(4);
  });
});