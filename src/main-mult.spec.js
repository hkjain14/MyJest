const {multiplication,multiplicationAlt} = require('./main');
const mul = require('./MultClass');

jest.mock('./MultClass');

describe('main',()=> {
  it('Tests multClass', () => {
    //Every new Mult() object will have following format.
    mul.mockImplementation(() => {
      return {
        doMult: () => 5,
        fakeFunc: () =>{
          return 6;
        }
      };
    });
    //If error : mul.mockImplementation is not a function  ; then soln is to delete __mocks__ folder.
    //This is because now mul is actually the class given in that folder and we cannot apply mockImplementation to it.
    //If you wanna override even that implementation, then see main-mult-alternate-2-anotherWay.spec.js

    const ans = multiplication(2,4);
    const ans2 = multiplicationAlt(1,2)

    expect(ans).toEqual(5);
    expect(ans2).toEqual(6);
  });
});