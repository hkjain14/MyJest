//Filename and not following classname has to be same ie MultClass

class abc{
  doMult(){
    return 9;
  }
  //Even though following function isnt there in original file but it will be available now.
  fakeFunc(){
    return 10;
  }
}

module.exports = abc;

//Note that if this file will exist then it would override the MultClass import ALL OVER THE PROJECT.
//Hence main-mult-spec.js will fail as long as this exists coz in that we call .mockImplementation on that class
//That method is not allowed on the mocked class returned by this file.