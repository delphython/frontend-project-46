/* eslint-disable no-underscore-dangle */
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff json', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  const result = readFile('resultStylish.txt');

  expect(genDiff(filePath1, filePath2)).toBe(result);
});

test('gendiff yaml', () => {
  const filePath1 = getFixturePath('file1.yml');
  const filePath2 = getFixturePath('file2.yml');
  const result = readFile('resultStylish.txt');

  expect(genDiff(filePath1, filePath2)).toBe(result);
});

test('gendiff plain json', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  const result = readFile('resultPlain.txt');

  expect(genDiff(filePath1, filePath2, 'plain')).toBe(result);
});

test('gendiff plain yaml', () => {
  const filePath1 = getFixturePath('file1.yml');
  const filePath2 = getFixturePath('file2.yml');
  const result = readFile('resultPlain.txt');

  expect(genDiff(filePath1, filePath2, 'plain')).toBe(result);
});