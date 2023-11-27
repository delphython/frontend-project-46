#!/usr/bin/env node

const app = (program) => {
    program.parse(process.argv);

    if (!program.args.length) program.help();
};
  
export default app;