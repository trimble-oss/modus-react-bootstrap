/*!
  Modus React Bootstrap 
  A React-based component library developed as a common, open source platform for all of Trimble’s web applications built on React.
  Extends React-Bootstrap v1.6.5
  Copyright (c) 2022 Trimble Inc.
 */
const { green, cyan, red } = require('chalk');
const fs = require('fs');
const path = require('path');
const execa = require('execa');
const { version } = require('../package.json');

const packageName = `trimbleinc-modus-react-bootstrap-${version.toString()}.tgz`;

const srcRoot = path.join(__dirname, '../package/');
// const targetRoot = path.join(__dirname, '../lib/');

const shell = (cmd) =>
  execa(cmd, { stdio: ['pipe', 'pipe', 'inherit'], shell: true });

const step = (name, fn) => async () => {
  console.log(cyan('Post Build: ') + green(name));
  await fn();
};

const moveFiles = step(
  'Moving config files from temp package to lib folder.',
  () =>
    new Promise((resolve, reject) => {
      const targetFiles = fs.readdirSync(srcRoot);
      targetFiles.forEach((file) => {
        const fileName = path.basename(file);
        if (fileName !== 'lib') {
          const currentPath = path.join(__dirname, '../package/', fileName);
          const destinationPath = path.join(__dirname, '../lib/', fileName);

          fs.rename(currentPath, destinationPath, (error) => {
            if (error) {
              console.log(red(error.stack || error.toString()));
              reject();
            }
          });
        }
      });
      resolve();
    }),
);

Promise.resolve(true)
  .then(step('Preparing a temp npm package', () => shell('npm pack')))
  .then(
    step('Extracting config files from the temp package', () =>
      shell(`tar -xzf ${packageName}`),
    ),
  )
  .then(moveFiles)
  .then(
    step('Deleting temp package and related folders.', () =>
      fs.rmSync(path.join(__dirname, '../package'), {
        recursive: true,
        force: true,
      }),
    ),
  )
  .then(
    step('Deleting temp package and related folders.', () =>
      fs.unlinkSync(path.join(__dirname, `../${packageName}`)),
    ),
  )
  .then(console.log(green('Build finished.')))
  .catch((err) => {
    if (err) console.error(red(err.stack || err.toString()));
    process.exit(1);
  });
