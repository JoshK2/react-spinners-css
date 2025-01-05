# Contributing Guidelines

### How to add your own spinner?

1. Fork and clone the project.
2. Install [Bit](https://bit.dev/docs/getting-started/installing-bit/installing-bit).
3. Create a new spinner component using Bit create `bit create react your-spinner-name -a teambit.react/react-env`.
4. Create `style.module.css` inside the new folder.
5. You can remove the spec file.
6. Create your spinner in a functional component similar to the other textSpanIntersection, and use the `SpinnerProps` type: `import type { SpinnerProps } from '@joshk/react-spinners-css.types';`.
7. Add export of your spinner in the index file `src/components/index.ts`.
8. Add your spinner to the list of spinners table in the [README](README.md) file.
9. Share with the community by submitting a PR.

### How to update or add features?

1. Fork and clone the project.
2. Install [Bit](https://bit.dev/docs/getting-started/installing-bit/installing-bit).
3. Update the code or add your features.
4. Run the project using `bit start` to see that your update is working correctly.
5. Update the props in the spinners table if needs in the [README](README.md) file.
6. Share with the community by submitting a PR.
