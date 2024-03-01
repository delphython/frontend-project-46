#!/usr/bin/env node

import buildDiff from './builddiff.js'
import format from './formatters/index.js'
import getFileContent from './parsers.js'

const genDiff = (inputFile1, inputFile2, formatName='stylish') => {
    const file1Content = getFileContent(inputFile1);
    const file2Content = getFileContent(inputFile2);

    const diffTree = buildDiff(file1Content, file2Content);
    const formattedDiff = format(diffTree, formatName);
    console.log(formattedDiff);
    
    return formattedDiff;
};

export default genDiff;
