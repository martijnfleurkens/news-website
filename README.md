# News-website

News website called NewsWave displaying the latest and greatest news items right from a CSV file. Developed with React and Typescript. The demo is available here: <https://newswave.martijnfl.nl>

## Author

[Martijn Fleurkens](mailto:martijnfleurkens@gmail.com)

## Table of Contents

- [🔨 Setting up development environment](#🔨-setting-up-development-environment)
  - [Configure Visual Studio Code](#configure-visual-studio-code)
  - [Browser devtools](#browser-devtools)
- [🎬 Getting Started](#🎬-getting-started)
- [📚 Libraries](#📚-libraries)
- [📃 Explanations](#📃-explanations)

## 🔨 Setting up development environment

### Configure Visual Studio Code

Install extensions:

| Tool         | link                                                                                   |
| ------------ | -------------------------------------------------------------------------------------- |
| ES7+ React   | <https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets>  |
| EditorConfig | <https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig>        |
| TypeScript   | <https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next> |
| Eslint       | <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>           |
| Prettier     | <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>           |
| Sass         | <https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented>              |

### Browser devtools

Install extensions:

| Tool                  | link                                                   |
| --------------------- | ------------------------------------------------------ |
| React developer tools | <https://beta.reactjs.org/learn/react-developer-tools> |

## 🎬 Getting Started

1. Clone the latest source from the repository

   ```sh
   git clone https://github.com/martijnfleurkens/news-website.git
   cd news-website
   ```

2. Install the packages

   ```sh
   npm install
   ```

3. Compiles and hot-reloads development environment

   ```sh
   npm run dev
   ```

### Compiles and minifies for production

```
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lints and fixes files [ESLint](https://eslint.org/)

```
npm run lint
```

### Formats code [Prettier](https://prettier.io/)

```
npm run format
```

## 📚 Libraries: (external link)

- [React.js](https://reactjs.org)

## 📃 Explanations

### Vitest | Unit testing

Unit testing is done via Vitest. The structure for Vitest this has been setup and an example test has been written in: src/components/article/single/**tests**/Single.spec.tsx.
To complete testing, I would continue to write unit tests to test the individual components, views, stores, router and services in isolation. These tests would ensure that each component or module works as expected and that it returns the correct output for a given input. For example, I would test the components by passing in mock props and checking that they render the correct output, like the ArticleSingle component.

Besides unit tests it would be a good testing strategy to add integration tests and end-to-end tests.
The integration tests would ensure that the application as a whole works as expected and that the different parts of the application work together seamlessly. For example, I would test that the news feed component correctly displays the news fetched from the CSV file / news service.
The end-to-end tests will be written to test the application's functionality from the user's perspective. These tests would ensure that the application works as expected in a real-world scenario. For example, I would test that a user can navigate to different pages using the router and that the news articles can be read and clicked on as expected.
