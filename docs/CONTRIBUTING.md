# Contributing

We are happy to accept contributions from the community to improve this project.

## Technologies

- Node (>= v14)
- Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli))

## Changes to Modus React Bootstrap

If you have done any code changes to the components in [Modus React Bootstrap](https://github.com/trimble-oss/modus-react-bootstrap) it should be updated here.

- Page with interactive examples and guides for each component is found within the `pages/components` directory.
- To update the component API details shown on the page a copy of the component file has to added to this [path](https://github.com/trimble-oss/website-modus-react-bootstrap.trimble.com/tree/main/src/api-docs/modus-react-bootstrap) and it will reflect automatically in the API section.

## Proposing a Change

If you intend to make code changes, submit a pull request linking it with a relevant issue.

If you decide to fix an existing issue, please be sure to check the comment thread in case somebody is already working on a fix and if nobody is working on it leave a comment stating your work so other people don’t accidentally duplicate your effort.

### Submitting a Pull Request

The team will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1. The repository should be forked with intent to contribute to the parent repository.
2. Branch from your fork using the naming convention `{github-username}/{description}`. For example, `mygithubname/fix-table-header`.
3. Run `npm install` to install third-party dependencies
4. If you've made any changes to the CSS run `npm run lint-css` to ensure Stylelint test passes
5. Follow the code style (check the `.editorconfig` file for details)

## Recommended VS Code Extensions

- For consistent code-formatting: <https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig>
- For real-time linting of CSS: <https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint>
