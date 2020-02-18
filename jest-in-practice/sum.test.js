'use strict';
describe('#ESCOPO', () => {
  it('Testando o jest', () => {});
  it('Testando o jest2', () => {});
});

// describe("#ESCOPO 2", () => {
//   it("1 é igual a 1", () => {
//     expect(1).toBe(1);
//   });
// });

import { expect } from 'chai';
import sum from './sum';

it('sum should be a function', () => {
  expect(sum).to.be.a('function');
});
