import { expect, test } from 'vitest';
import { add } from '../src/lib/math';

test('math add function', () => {
  const num1 = 2;
  const num2 = 2;
  const expected = 4;

  const actual = add(num1, num2);

  expect(actual).toBe(expected);
});
