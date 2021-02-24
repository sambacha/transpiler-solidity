#!/usr/bin/env node

const Transpiler = require('./transpiler');

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'fs'.
const fs = require('fs');
const file_name = process.argv[2];
const data = fs.readFileSync(file_name, 'utf-8');

Transpiler(file_name, data)
  .then((res: any) => console.log(res))
  .catch((err: any) => {
    console.error(err);
    process.exit(1);
});

