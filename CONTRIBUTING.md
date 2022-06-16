# Contributing

We are happy to accept contributions from the community to improve this project.

## Submitting Issues

Whether you're contributing directly to the code or have suggestions, submitting an issue through GitHub is needed
for referencing changes. Please submit change items as an Issue [here](https://github.com/trimble-oss/modus-react-bootstrap/issues) by choosing a appropriate template.

Also add a priority level label to the issue. The priority options are low, medium, and high.
If you are unsure of its priority, reach out to one of the developers for their opinion.

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
