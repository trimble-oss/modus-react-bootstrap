/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.4
  Copyright (c) 2022 Trimble Inc.
 */
const { green, red } = require('chalk');
const fs = require('fs');
const path = require('path');

const srcRoot = path.join(__dirname, '../lib/esm');
const targetRoot = path.join(__dirname, '../lib/');
const EXTENSION = '.js';
const packageJsonText = `
{
  "name": "@trimbleinc/modus-react-bootstrap/<react-component>",
  "private": true,
  "main": "../cjs/<react-component>.js",
  "module": "../esm/<react-component>.js",
  "types": "../esm/<react-component>.d.ts"
}
`;

console.log(green(`Building component directories:`));

fs.readdir(srcRoot, (err, files) => {
  if (err) {
    console.log(red(err.stack || err.toString()));
    return;
  }

  const targetFiles = files.filter(
    (file) => path.extname(file).toLowerCase() === EXTENSION,
  );

  targetFiles.forEach((file) => {
    let fileName = path.basename(file, EXTENSION);
    let dir = targetRoot + fileName;
    if (fileName === 'index') {
      return;
    }
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    let packageJsonFile = `${dir}/package.json`;
    fs.appendFileSync(
      packageJsonFile,
      packageJsonText.trim().replace(/<react-component>/g, fileName),
      (appendErr) => {
        console.log(red(appendErr.stack || appendErr.toString()));
      },
    );
  });
});

console.log(green(`Built component directories`));
