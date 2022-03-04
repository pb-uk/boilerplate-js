// src/index.js

export const version = '0.3.0';

/**
 * Add two numbers.
 *
 * @param a The addend.
 * @param b The addor (or is it the other way round?).
 * @returns The sum a + b.
 */
export const add = (a: number, b: number): number => a + b;

export const bigOne = BigInt(1);

export const isNullish = <T>(value: T): T | boolean => {
  return value ?? true;
};
/*
export const waitForIt = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(true));
  });
};
*/
