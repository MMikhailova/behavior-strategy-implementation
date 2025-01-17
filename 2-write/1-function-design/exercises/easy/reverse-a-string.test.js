// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */
const reverseString = (toReverse = '') => {
  if ('string' != typeof toReverse) throw new TypeError('toReverse should be string');
  let reversed = '';
  for (let i = toReverse.length - 1; i >= 0; i--) {
    reversed += toReverse[i];
  }
  return reversed;
};
// -------- your solutions --------

for (const solution of [reverseString]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    describe('if toReverse is not a string should raise an error', () => {
      it('12 should raise an error', () => {
        expect(() => solution(12)).toThrowError("toReverse should be string");
      });
      it("undefined should raise an error", () => {
        expect(solution(undefined)).toBe(
         '');
      });
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
