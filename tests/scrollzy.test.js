import { expect } from 'chai';
import $ from 'jquery';
import scrollzy from '../src/scrollzy';

describe('Scrollzy', () => {
  it('should throw error when not passing a plain object as argument', () => {
    expect(() => {
      scrollzy(['this is an array'])
    }).to.throw(Error)
  });

  it('should throw if speed is not a number', () => {
    expect(() => {
      scrollzy({
        number: 'wedw'
      })
    }).to.throw(Error)
  });
});

describe('Helpers', () => {
  describe('typeCheck', () => {
    it('should return false if not matching typeof first param with given type', () => {
      // this will check the helper
    })

    it('should return true if matching typeof first param with given type', () => {
      // this will check the helper
    })
  })
})
