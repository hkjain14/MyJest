const {multiplication,multiplicationAlt} = require('./main');

jest.mock('./MultClass');

describe('Manual mock way of class mocking',()=> {
  it('Tests MultClass', () => {

    const ans = multiplication(2, 4);
    const ans2 = multiplicationAlt(3,4);

    expect(ans).toEqual(9);
    expect(ans2).toEqual(10)
  });
});