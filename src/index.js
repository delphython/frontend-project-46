#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import { resolve } from 'node:path';
import path from 'path';
import buildDiff from './builddiff.js';
import format from './formatters/index.js';
import parsers from './parsers.js';

const getFileContent = (inputFile) => readFileSync(resolve(cwd(), inputFile));
const getFileFormat = (inputFile) => path.extname(inputFile).slice(1);

export default (inputFile1, inputFile2, formatName = 'stylish') => {
  const file1Content = parsers(getFileContent(inputFile1), getFileFormat(inputFile1));
  const file2Content = parsers(getFileContent(inputFile2), getFileFormat(inputFile2));

  const diffTree = buildDiff(file1Content, file2Content);
  const formattedDiff = format(diffTree, formatName);
  console.log(formattedDiff);

  return formattedDiff;
};
