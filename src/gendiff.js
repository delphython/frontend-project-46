import app from './index.js';
import printJson from './index.js';
import { Command } from "commander";

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .argument('<filepath1>', '')
  .argument('<filepath2>', '')
  .action((filepath1, filepath2) => {
    printJson(filepath1);
    printJson(filepath2);
  });

export default () => {
  app(program);
};