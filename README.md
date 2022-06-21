# Modus React Bootstrap

The Modus React Bootstrap is a React-based component library extended from react-bootstrap component library developed as a common, open source platform for all of Trimble’s web applications built on React. The framework is designed and managed by the Trimble UX Council.

## Background

Modus React Bootstrap is built upon and extends the React Bootstrap v1.6.x code framework combined with Modus CSS. You can use the Modus CSS files as is, or integrate the SASS files into your own application if you wish to modify it further.

## Install with NPM

Install Modus React Bootstrap Framework in your Node.js powered apps with our NPM package:

> `$ npm install @trimbleinc/modus-react-bootstrap`

The components will be found in the `./node_modules/@trimbleinc/modus-react-bootstrap/` directory and the compiled Modus Bootstrap CSS files will be in the `./node_modules/@trimbleinc/modus-bootstrap/dist` directory.

## Customize Modus Bootstrap CSS using SASS

The SASS files will be found in the `/scss` directory. For further details refer to [Modus Bootstrap](https://bitbucket.trimble.tools/projects/TMDS/repos/modus-bootstrap).

## Icons

Modus icons are required for some of the components like DataTable, FileUploadDropZone, TablePagination and TreeView. To use the icons, include the following:

> `<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">`

> `<link rel="stylesheet" href="https://modus.trimble.com/assets/0.5.1/fonts/modus-icons.css">`

## Build Package

Yarn is the package manager, check out setup
instructions [here](https://yarnpkg.com/en/docs/install) if you don't have it installed already.
After that you can run `yarn run bootstrap` to install all the needed dependencies and build a local copy of the library with `yarn run build`
