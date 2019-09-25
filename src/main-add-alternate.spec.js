const {addition} = require('./main');
const add = require('./AddFunc');

jest.mock('./AddFunc',()=>{
  return jest.fn(()=>1)
});

//        OR WITH RETURN STATEMENT AND CURLY BRACE

// jest.mock('./AddFunc',()=>{
//   return jest.fn(()=>{
//     return 1;
//   })
// });

describe('main',()=> {
  it('Tests addFunc', () => {

    const ans = addition(1, 2);

    expect(ans).toEqual(1);
  });
});