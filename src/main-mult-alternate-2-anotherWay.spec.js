const {multiplication,multiplicationAlt} = require('./main');

//                               Following lines will override the implementation of file in __mocks__

mockMultiplication = jest.fn(() => 11);
jest.mock('./MultClass', () => {
  return jest.fn().mockImplementation(() => ({        //Second last char ie ( is needed coz no return keyword used.
      doMult: mockMultiplication,
      fakeFunc: jest.fn(() => 12)
  }));
});
//Since we are overriding the entire file in __mocks__ hence to access fakeFunc via multiplicationAlt,
// it is necessary to give its mock implementation here.
// If no usage then we can skip that, nd test will still run

describe('Manual mock way of class mocking',()=> {
  it('Tests MultClass', () => {

    const ans = multiplication(2, 4);
    const ans2 = multiplicationAlt(3,4);

    expect(ans).toEqual(11);
    expect(ans2).toEqual(12)
  });
});