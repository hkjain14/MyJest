const {addition} = require('./main');
const add = require('./AddFunc');

jest.mock('./AddFunc');

describe('main',()=> {
  it('Tests addFunc', () => {
    add.mockReturnValue(0);

    const ans = addition(1, 2);

    expect(ans).toEqual(0);
  });
});