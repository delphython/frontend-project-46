#!/usr/bin/env node

import { createRequire } from "module";
const { Command } = createRequire('commander');
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

program.parse();
