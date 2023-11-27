import {readFileSync} from 'node:fs';

export const printJson = (inputFilePath) => {
    const inputFile = readFileSync(inputFilePath);
    
    const inputFileContent = JSON.parse(inputFile);

    console.log(inputFileContent);
}