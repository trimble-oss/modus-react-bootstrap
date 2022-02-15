# Contributing

We are happy to accept contributions from the community to improve this project.

## Editing using the GitHub Web Interface

1. Open [GitHub](https://github.com/trimble-oss/modus-react-bootstrap) in your browser.
2. Navigate to the component under src folder that you would like to edit.
3. To edit, first click the gray 'Show source' button in the top-right of the content preview pane.
4. Make your text changes. When you've finished, click the blue 'Commit' button in the bottom-right.
5. In the 'Commit file' popup modal, enter a descriptive title of the change you're making and check the 'Create a pull request for this change' checkbox (you don't need to change the branch name).
6. On the 'Create pull request' screen you can enter a description for the change (if needed).
7. The Documentation Team will review, merge and publish your request or contact you with any follow-up questions.

### Setup (for running the code locally and generate a npm pack)

1. Install dependencies with `npm install`
2. To create a build output run `npm run build` which creates lib folder with the compiled output. Sub-folders `lib/cjs` and `lib/esm` add support for CommonJS and ESM modules.
3. To get a installable .tgz file run `npm pack`
