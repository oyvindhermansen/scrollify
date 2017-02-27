import { expect } from 'chai';
import $ from 'jquery';
import scrollzy from '../src/core/scrollzy';
import { isPlainObject, typeCheck } from '../src/utils/utils';

describe('Scrollzy', () => {
  it('should throw error when not passing a plain object as argument', () => {
    expect(() => {
      scrollzy(['this is an array']);
    }).to.throw(Error);
  });

  it('should throw if speed is not a number', () => {
    expect(() => {
      scrollzy({
        number: 'wedw'
      });
    }).to.throw(Error);
  });

  it('should throw if eventType is not a string', () => {
    expect(() => {
      scrollzy({
        eventType: { something: 'lol' }
      });
    }).to.throw(Error);
  });
});

describe('Helpers', () => {
  describe('isPlainObject', () => {
    it('should return false if given something other than an object', () => {
      expect(isPlainObject(['something'])).to.equal(false);
    });

    it('should return true if given a plain object as arg', () => {
      expect(
        isPlainObject({
          isObject: true
        })
      ).to.equal(true);
    });
  });

  describe('typeCheck', () => {
    it(
      'should return false if not matching typeof first param with given type',
      () => {
        expect(typeCheck('some kind of string', 'number')).to.equal(false);
      }
    );

    it(
      'should return true if matching typeof first param with given type',
      () => {
        expect(typeCheck('some kind of string', 'string')).to.equal(true);
      }
    );
  });
});
