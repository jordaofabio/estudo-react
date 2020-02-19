'use strict';

import { expect } from 'chai';
import map from './map';

it('map should be a fuction', () => {
  expect(map).to.be.a('function');
});

it('map([1, 2, 3], function(x) { return x+1}) should return [2, 3, 4]', () => {
  expect(
    map([1, 2, 3], function(x) {
      return x + 1;
    })
  ).to.be.deep.equal([2, 3, 4]);
});

it('map([3, 4, 5], function(x) { return x**2}) should return [9, 16, 25]', () => {
  expect(
    map([3, 4, 5], function(x) {
      return x ** 2;
    })
  ).to.be.deep.equal([9, 16, 25]);
});

it('map([3, 4, 5], function(x, index) { return index}) should return [0, 1, 2]', () => {
  expect(
    map([3, 4, 5], function(x, index) {
      return index;
    })
  ).to.be.deep.equal([0, 1, 2]);
});

it('map([3, 4, 5]) should throw error with message: "fun is not a function"', () => {
  expect(map).to.throw(TypeError, /fun is not a function/);
});
