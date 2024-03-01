import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import { resolve } from 'node:path';
import * as yaml from 'js-yaml';

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

export default getFileContent;
