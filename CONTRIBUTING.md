# Contributing Guidelines

### How to add your own spinner?
1) Fork and clone the project.
2) Create a folder for your spinner in the [components folder](src/components), name the folder in upper case.
3) Create two files inside, one `index.js` for writing the spinner itself, and `style.css` for the css code.
4) Create a functional component with export default, and don't forget to add `propTypes`, you can copy them from other component.
5) Add your spinner to the demo page in `src/index.js`, and also to main export file in `src/components/index.js`.
6) Add your spinner to the list of spinners table in the [README](README.md) file.
7) Run `npm run format` to run prettier formater, and share with the community by submitting a PR.

### How to update or add features?
1) Fork and clone the project.
2) Update the code or add your features, and don't forget to update `propTypes` if needs.
3) Run the project to see that your update is working correctly.
4) Run `npm run format` to run prettier formater, and share with the community by submitting a PR.