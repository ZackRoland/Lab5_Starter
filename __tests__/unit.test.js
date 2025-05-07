// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Phone num tests

test('666-420-6969 is a phone number', () => {
  expect(isPhoneNumber("666-420-6969")).toBe(true);
});
test('abc-123-4567 is a phone number', () => {
  expect(isPhoneNumber("abc-123-4567")).toBe(true);
});
test('6664206969 is not a phone number', () => {
  expect(isPhoneNumber("6664206969")).toBe(false);
});
test('1738-606-428 is not a phone number', () => {
  expect(isPhoneNumber("1738-606-428")).toBe(false);
});

// Email tests

test('zroland@ucsd.edu is an email', () => {
  expect(isEmail("zroland@ucsd.edu")).toBe(true);
});
test('zroland250@gmail.com is an email', () => {
  expect(isEmail("zroland250@gmail.com")).toBe(true);
});
test('zr.ola.nd@ucsd.edu is not an email', () => {
  expect(isEmail("zr.ola.nd@ucsd.edu")).toBe(false);
});
test('zroland@ucsd.e is not an email', () => {
  expect(isEmail("zroland@ucsd.e")).toBe(false);
});

// Stronk Password Tests 

test('powell9000 is a strong password', () => {
  expect(isStrongPassword("powell9000")).toBe(true);
});
test('9000powell is not a strong password', () => {
  expect(isStrongPassword("9000powell")).toBe(false);
});
test('abcde1234567890 is a strong password', () => {
  expect(isStrongPassword("abcde1234567890")).toBe(true);
});
test('p12 is not a strong password', () => {
  expect(isStrongPassword("p12")).toBe(false);
});

// Date tests

test('05/07/2025 is a valid date', () => {
  expect(isDate('05/07/2025')).toBe(true);
});
test('00/00/0000 is a valid date', () => {
  expect(isDate('00/00/0000')).toBe(true);
});
test('2025/05/07 is an invalid date', () => {
  expect(isDate('2025/05/07')).toBe(false);
});
test('ab/cd/efgh is an invalid date', () => {
  expect(isDate('ab/cd/efgh')).toBe(false);
});

// Hex Color Tests

test('#aaa is a valid hex code', () => {
  expect(isHexColor('#aaa')).toBe(true);
});
test('#fff099 is a valid hex code', () => {
  expect(isHexColor('#fff099')).toBe(true);
});
test('#999fff9 is an invalid hex code', () => {
  expect(isHexColor('#999fff9')).toBe(false);
});
test('ZZZ is an invalid hex code', () => {
  expect(isHexColor('#ZZZ')).toBe(false);
});