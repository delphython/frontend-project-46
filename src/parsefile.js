import {readFileSync} from 'node:fs';
import { cwd } from 'node:process';
import { resolve } from 'node:path';

export const printJson = (inputFilePath) => {
    const absPAth = resolve(cwd(), inputFilePath);
    
    const inputFile = readFileSync(absPAth);
    
    const inputFileContent = JSON.parse(inputFile);

    console.log(inputFileContent);
}