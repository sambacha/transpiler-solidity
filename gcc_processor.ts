//SPDX-License-Identifier: MIT
const spawn = require('child_process').spawn;

module.exports = function (file_path: any) {
  return new Promise((resolve, reject) => {
    const ps = spawn('cpp', ['-P', file_path]);

    const data: any = [];

    ps.stdin.setEncoding('utf-8');
    ps.stdout.setEncoding('utf-8');

    ps.stdout.on('data', (buf: any) => {
      data.push(buf);
    });

    ps.stdout.on('end', () => {
      resolve(data.join(''));
    });

    ps.on('error', (err: any) => {
      reject(err);
    });

    ps.stdin.end();
  });
};
