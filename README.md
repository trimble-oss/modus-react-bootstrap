# Modus React Bootstrap

**[Modus React Bootstrap](https://modus-react-bootstrap.trimble.com/getting-started/)** is a React-based component library extended from [React Bootstrap](https://react-bootstrap-v4.netlify.app/) developed as a common, open source platform for all of Trimble’s web applications built on React. The framework is designed and managed by the Trimble UX Council.

## Background

Modus React Bootstrap is built upon and extends the React Bootstrap v1.6.x code framework combined with the styles from **[Modus Bootstrap](https://modus-bootstrap.trimble.com/getting-started/)**. You can use the **Modus React Bootstrap CSS** files as is, or integrate the Sass files into your own application if you wish to modify it further.

## Install with npm

Install Modus React Bootstrap Framework in your Node.js powered apps with our npm package:

> `$ npm install @trimbleinc/modus-react-bootstrap`

The components will be found in the `~/node_modules/@trimbleinc/modus-react-bootstrap/` directory. Above command will also install the dependencies needed for styles, `~/node_modules/@trimbleinc/modus-bootstrap/` and `~/node_modules/bootstrap/`.

## CSS

You can either import the compiled CSS files from `~/node_modules/@trimbleinc/modus-react-bootstrap/css/dist/` or use the Sass files found in `~/node_modules/@trimbleinc/modus-react-bootstrap/css/scss` directory.

With Sass files, you can begin to modify any of the Sass variables and maps in your custom style sheet.
The main file to focus on is the `_light-theme.scss` file (and/or `_dark-theme.scss` if you want a dark look).

## Icons

Modus icons are required for some of the components like `DataTable`, `FileUploadDropZone`, `TablePagination` and `TreeView`. To use the icons, include the following:

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

## Contributions

See the [contributing guidelines](https://github.com/trimble-oss/modus-react-bootstrap/blob/main/CONTRIBUTING.md) for how to propose bugfixes and improvements.

## Update Documentation

The documentation [site](https://modus-react-bootstrap.trimble.com/) should always be in sync with the components, please refer to the [contributing guidelines](https://github.com/trimble-oss/modus-react-bootstrap/blob/main/CONTRIBUTING-docs.md) for any changes.
