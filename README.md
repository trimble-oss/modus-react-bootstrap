# Modus React Bootstrap

The [Modus React Bootstrap](https://modus-react-bootstrap.trimble.com/getting-started/) is a React-based component library extended from [React Bootstrap](https://react-bootstrap-v4.netlify.app/) component library developed as a common, open source platform for all of Trimble’s web applications built on React. The framework is designed and managed by the Trimble UX Council.

## Background

Modus React Bootstrap is built upon and extends the React Bootstrap v1.6.x code framework combined with [Modus Bootstrap](https://modus-bootstrap.trimble.com/getting-started/). You can use the Modus Bootstrap CSS files as is, or integrate the Sass files into your own application if you wish to modify it further.

## Install with npm

Install Modus React Bootstrap Framework in your Node.js powered apps with our npm package:

> `$ npm install @trimbleinc/modus-react-bootstrap`

The components will be found in the `./node_modules/@trimbleinc/modus-react-bootstrap/` directory and the compiled Modus Bootstrap CSS files will be in the `./node_modules/@trimbleinc/modus-bootstrap/dist` directory.

## Customize Modus Bootstrap CSS using Sass

The Sass files will be found in the `/scss` directory. For further details refer to [Modus Bootstrap](https://modus-bootstrap.trimble.com/getting-started/#customize-using-sass).

## Icons

Modus icons are required for some of the components like DataTable, FileUploadDropZone, TablePagination and TreeView. To use the icons, include the following:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<link
  rel="stylesheet"
  href="https://modus.trimble.com/assets/fonts/modus-icons.css"
/>
```

## Build Package

Yarn is the package manager, check out setup
instructions [here](https://yarnpkg.com/en/docs/install) if you don't have it installed already.
After that you can run `yarn run bootstrap` to install all the needed dependencies and build a local copy of the library with `yarn run build`.

To test the changes on a browser locally you can use the test project **sample-workspace** and `yarn start` will start a development site.

## Contributions

See the [contributing guidelines](https://github.com/trimble-oss/modus-react-bootstrap/blob/main/CONTRIBUTING.md) for how to propose bugfixes and improvements.
