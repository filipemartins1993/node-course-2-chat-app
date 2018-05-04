const expect = require('expect');

//import isRealString
const {isRealString} = require('./validation');

//describe -> isRealString
describe('isRealString', () => {

  //should reject non-string values (number, object)
  it('should reject non-string values', () => {
    var name = 1;
    var string = isRealString(name);

    expect(string).toBe(false);
  });
  //should reject strings with only spaces
  it('should reject strings with only spaces', () => {
    var name = '     ';
    var string = isRealString(name);

    expect(string).toBe(false);
  });
  //should allow strings with non spaces characters
  it('should allow strings with non spaces characters', () => {
    var name = 'Mike';
    var string = isRealString(name);

    expect(string).toBe(true);
  });
});
