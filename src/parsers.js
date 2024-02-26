import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import { resolve } from 'node:path';
import * as yaml from 'js-yaml';
import buildDiff from './builddiff.js'
import format from './formatters/index.js'

const getFileContent = (inputFilePath) => {
    var inputFileContent = '';

    const absPAth = resolve(cwd(), inputFilePath);

    const fileExt = absPAth.split('.').pop();

    const inputFile = readFileSync(absPAth);

    if (fileExt === 'json') {
        inputFileContent = JSON.parse(inputFile);
    } else if (fileExt === 'yml' || fileExt === 'yaml') {
        inputFileContent = yaml.load(inputFile);
    }

    return inputFileContent;
};

const genDiff = (inputFile1, inputFile2, formatName='stylish') => {
    const file1Content = getFileContent(inputFile1);
    const file2Content = getFileContent(inputFile2);

    const diffTree = buildDiff(file1Content, file2Content);
    const formattedDiff = format(diffTree, formatName);
    console.log(formattedDiff);
    
    return formattedDiff;
};

export default genDiff;
