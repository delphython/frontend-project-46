import {fs} from 'fs';

export const printJson = (inputFilePath) => {
    const inputFile = fs.readFileSync(inputFilePath);
    
    const inputFileContent = JSON.parse(inputFile);

    console.log(inputFileContent[0].value);
}