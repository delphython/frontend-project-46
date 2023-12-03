import {readFileSync} from 'node:fs';
import { cwd } from 'node:process';
import { resolve } from 'node:path';
import _ from 'lodash';

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

const getDiffInSecondFile = (obj1, obj2) => {
    const result = Object.entries(obj2).filter(
        ([field, obj2Value]) => obj1[field] !== obj2Value
    );

    result.forEach((_, index) => {
        result[index].push('+');
        result[index].push(2);
    });

    return result;
};

const getDiffInFirstFile = (obj1, obj2) => {
    const result = Object.entries(obj1).filter(
      ([field, obj1Value]) => obj2[field] !== obj1Value
    );

    result.forEach((_, index) => {
        result[index].push('-');
        result[index].push(1);
    });

    return result;
};

const getEqInBothFiles = (obj1, obj2) => {
    const result = Object.entries(obj2).filter(
      ([field, obj2Value]) => obj1[field] === obj2Value
    );

    result.forEach((_, index) => {
        result[index].push(' ');
        result[index].push(3);
    });

    return result;
};

export const genDiff = (inputFile1, inputFile2) => {
    let diffText = '{\n';

    const file1Content = getFileContent(inputFile1);
    const file2Content = getFileContent(inputFile2);
    
    const diffInSecondFile = getDiffInSecondFile(file1Content, file2Content);
    const diffInFirstFile = getDiffInFirstFile(file1Content, file2Content);
    const eqInBothFiles = getEqInBothFiles(file1Content, file2Content);

    const diff = [...diffInSecondFile, ...diffInFirstFile, ...eqInBothFiles];
    const sortedDiff = _.sortBy(diff, [(obj) => [obj[0], obj[3]]]);

    sortedDiff.forEach((item) => {
        diffText += `  ${item[2]} ${item[0]}: ${item[1]}\n`;
    });

    diffText += '}'
    
    console.log(diffText);
};