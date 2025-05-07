// sum.test.js
import { sum } from '../code-to-unit-test/sum';
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).to(3);
});
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).Be(3);
});