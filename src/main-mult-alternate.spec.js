const {multiplication,multiplicationAlt} = require('./main');

//Wont work if the following variable doesnt start with word mock
mockMultiplication = jest.fn(()=>7);

jest.mock('./MultClass', () => {
  return jest.fn().mockImplementation(() => {         //If no return in next then remember ( as second last char here and close it appropriately
    return {
      doMult: mockMultiplication,
      fakeFunc: jest.fn(()=>8)
    };
  });
});

describe('main',()=> {
  it('Module Factory Parameter way of class mocking', () => {

    const ans = multiplication(2,4);
    const ans2 = multiplicationAlt(1,2)

    expect(ans).toEqual(7);
    expect(ans2).toEqual(8);
  });
});


//                          DOCUMENTATION:
//jest.mock(path, moduleFactory) takes a module factory argument. A module factory is a function that returns the mock.

//A limitation with the factory parameter is that, since calls to jest.mock() are hoisted to the top of the file,
// it's not possible to first define a variable and then use it in the factory.
// An exception is made for variables that start with the word 'mock'.
// It's up to you to guarantee that they will be initialized on time