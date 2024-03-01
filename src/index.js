#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import { resolve } from 'node:path';
import buildDiff from './builddiff.js';
import format from './formatters/index.js';
import parsers from './parsers.js';

const absPAth = (inputFile) => resolve(cwd(), inputFile);
const getFileContent = (inputFile) => readFileSync(absPAth(inputFile));
const getFileFormat = (inputFile) => absPAth(inputFile).split('.').pop();

export default (inputFile1, inputFile2, formatName = 'stylish') => {
  const file1Content = parsers(getFileContent(inputFile1), getFileFormat(inputFile1));
  const file2Content = parsers(getFileContent(inputFile2), getFileFormat(inputFile2));

  const diffTree = buildDiff(file1Content, file2Content);
  const formattedDiff = format(diffTree, formatName);
  console.log(formattedDiff);

  return formattedDiff;
};
