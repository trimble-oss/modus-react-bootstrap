# Contributing

We are happy to accept contributions from the community to improve this [project](https://github.com/trimble-oss/modus-react-bootstrap).

## Submitting Issues

Whether you're contributing directly to the code or have suggestions, submitting an issue through GitHub is needed
for referencing changes. Please submit change items as an Issue [here](https://github.com/trimble-oss/modus-react-bootstrap/issues) by choosing an appropriate template.

If possible please provide screenshots and/or screencasts of the proposed change. This will help us to understand the desired change easier.

## Technologies

- Node.js (>= v14)
- Yarn is the package manager, check out setup
  instructions [here](https://yarnpkg.com/en/docs/install) if you don't have it installed already.

### NPM

We are hosting this package on the public npm registry.

## Proposing a Change

If you intend to make code changes, submit a pull request linking it with the issue.

If you decide to fix an existing issue, please be sure to check the comment thread in case somebody is already working on a fix and if nobody is working on it leave a comment stating your work so other people don’t accidentally duplicate your effort.

### Developing a component

Try and be consistent with the overall style and API of the library as a whole. Use TypeScript to develop the components.

All components in Modus are built with accessibility in mind. If you are making changes to an existing component, make sure to follow the accessibility section in Modus style guide for an example [Accordion accessibility](https://modus.trimble.com/components/accordions/#accessibility). For more help refer to [Modus guidelines](https://modus.trimble.com/foundations/accessibility/?q=acce#acce) on accessibility.

### Submitting a Pull Request

The team will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1. The repository should be forked with intent to contribute to the parent repository.
2. Branch from your fork using the naming convention `{github-username}/{description}`. For example, `mygithubname/fix-table-header`.
3. Run `yarn run bootstrap` to install all the needed dependencies.
4. Please make sure to provide [TSDOC-style](https://tsdoc.org/) comments\* for any `propTypes` you add or change in the component.
   Here's an example:

   ```js
   const propTypes = {
     /**
      * Sets the visibility of the Component
      */
     show: PropTypes.bool,

     /**
      * A callback fired when the visibility changes
      * @type {func}
      * @required
      */
     onHide: myCustomPropType,
   };
   ```

5. After finishing the code changes, run `yarn run format` to format the code.
6. Run `yarn run lint` to find problems with code
7. Run `yarn run build` to create a build folder with compiled output.
8. To test the compiled output, run `yarn pack` and it creates a `tgz` file which can be installed like a regular npm package.
9. Update the `CHANGELOG.md` with notes on your changes. Breaking changes should be highlighted.
10. Squash your commits down to a singular commit with a relevant message. If you use GitHub Desktop you can do it with this [feature](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/squashing-commits).
11. Submit your PR with your branch as the `head`, and the `@trimble-oss/modus-react-bootstrap` `main` branch as the `base`.
12. Make sure your PR is linked with the relevant issue. Check out this [article](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) on how to do it.

## Documentation

Please update the [documentation](https://github.com/trimble-oss/modus-react-bootstrap/tree/main/docs/src/pages/components) with the changes, the components and docs should always be in sync.
The documentation is a Gatsby project that uses [MDX](https://www.gatsbyjs.com/docs/how-to/routing/mdx/) and deployed to the [site](https://modus-react-bootstrap.trimble.com/). It contains interactive examples and guides for the components.

Please refer to the [contributing guidelines](https://github.com/trimble-oss/modus-react-bootstrap/blob/main/CONTRIBUTING-docs.md) for any changes.
