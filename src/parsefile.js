import {readFileSync} from 'node:fs';
import { cwd } from 'node:process';
import { resolve } from 'node:path';

export const genDiff = (inputFilePath) => {
    const absPAth = resolve(cwd(), inputFilePath);

    const fileExt = absPAth.split('.').pop();
    
    const inputFile = readFileSync(absPAth);

    if (fileExt === 'json') {
        const inputFileContent = JSON.parse(inputFile);

        console.log(inputFileContent);
    }
}