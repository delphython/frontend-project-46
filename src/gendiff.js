#!/usr/bin/env node

import app from './index.js';
import { Command } from "commander";

const program = new Command();

export default () => {
  app(program);
};