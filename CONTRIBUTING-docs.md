# Contributing

We are happy to accept contributions from the community to improve this project.

# Modus React Bootstrap Developer Guide Site

This site was created using Gatsby CLI with a default starter https://github.com/gatsbyjs/gatsby-starter-default. Its purpose is to document and demo the Modus React Bootstrap Component library.

## Technologies

- Node.js (>= v14)
- Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli))

## Getting Started

To run the site locally, install the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) globally and then do `npm install` to install all the dependencies followed by `npm start` and the site will be running at `http://localhost:8000`.

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## Layout

A quick look at the top-level files and directories.

    .
    ├── node_modules
    ├── src
    │   └── pages
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that the project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what is seen on the frontend of the site. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of the code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where we can specify information about the site (metadata) like the site title and description, which Gatsby plugins to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node.js APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of the npm dependencies that were installed for the project. **(You won’t change this file directly).**

10. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for the project.

11. **`README.md`**: A text file containing useful reference information about the project.

## Sync with Modus React Bootstrap

If you have done any code changes to the components in [Modus React Bootstrap library](https://github.com/trimble-oss/modus-react-bootstrap/tree/main/src) it should be updated in [Modus React Bootstrap site](https://modus-react-bootstrap.trimble.com/components/).

- Page with interactive examples and guides for each component is found within the `pages/components` directory.

## Proposing a Change

If you intend to make code changes, submit a pull request linking it with a relevant issue.

If you decide to fix an existing issue, please be sure to check the comment thread in case somebody is already working on a fix and if nobody is working on it leave a comment stating your work so other people don’t accidentally duplicate your effort.

### Submitting a Pull Request

The team will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1. The repository should be forked with intent to contribute to the parent repository.
2. Branch from your fork using the naming convention `{github-username}/{description}`. For example, `mygithubname/fix-table-header`.
3. Run `npm install` to install third-party dependencies
4. If you've made any changes to the CSS run `npm run lint-css` to ensure stylelint test passes
5. Follow the code style (check the `.editorconfig` file for details)

## Recommended VS Code Extensions

- For consistent code-formatting: <https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig>
- For real-time linting of CSS: <https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint>
