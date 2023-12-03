import {readFileSync} from 'node:fs';
import { cwd } from 'node:process';
import { resolve } from 'node:path';

const getFileContent = (inputFilePath) => {
    var inputFileContent = '';

    const absPAth = resolve(cwd(), inputFilePath);

    const fileExt = absPAth.split('.').pop();
    
    const inputFile = readFileSync(absPAth);

    if (fileExt === 'json') {
        inputFileContent = JSON.parse(inputFile);
    }

    return inputFileContent;
};

export const genDiff = (inputFile1, inputFile2) => {
  console.log(getFileContent(inputFile1));
  console.log(getFileContent(inputFile2));
};