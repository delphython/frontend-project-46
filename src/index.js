#!/usr/bin/env node

import genDiff from './parsers.js'

const app = (program) => {
    program
        .name('gendiff')
        .description('Compares two configuration files and shows a difference.')
        .version('0.0.1')
        .option('-f, --format <type>', 'output format', 'stylish')
        .helpOption('-h, --help', 'output usage information')
        .argument('<filepath1>', '')
        .argument('<filepath2>', '')
        .action((filepath1, filepath2, options) => {
            genDiff(filepath1, filepath2, options.format);
        });
  
    program.parse(process.argv);
    if (!program.args.length) program.help();
};
  
export default app;