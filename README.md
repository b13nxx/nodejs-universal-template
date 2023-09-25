# nodejs-universal-template

This template is a result of my efforts to create a project structure that can be used as a base for developing all kinds of projects in the nodejs ecosystem. When you look at the folder structure, you can see that it is quite modular and generic. So the folder structure itself makes sense in any kind of project. Also when I look at other templates, they either include too much or not enough, and this one balances between the two.

## Features

- Of course [TypeScript](https://github.com/microsoft/TypeScript) support
- Includes [Jest](https://github.com/jestjs/jest), [Lodash](https://github.com/lodash/lodash) and [Yup](https://github.com/jquense/yup) libraries that almost every project should have (with their typings)
- Amazing bundling support with [Parcel](https://github.com/parcel-bundler/parcel) (Developing pure Nodejs library? Even you too can benefit from the bundling 😁)
  - specific Parcel configuration for supporting imports/exports fields of nodejs is already written
- Already configured local build process via [eslint](https://github.com/eslint/eslint), [prettier](https://github.com/prettier/prettier), [tsc](https://github.com/microsoft/TypeScript), [lint-staged](https://github.com/okonet/lint-staged), [commitlint](https://github.com/conventional-changelog/commitlint) (you need to configure your remote build process via CI/CD)
- Linting process is ready and firable by
  - eslint and prettier using [standard](https://standardjs.com) for the JS/TS files,
  - only prettier using [standard](https://standardjs.com) for the other files (.json, .css, .scss, .less, .html, .htm, .vue, .hbs, .handlebars, .graphql, .gql, .md, .yml, .yaml),
  - commitlint using [angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type) for commit messages
- Linting is also available for all staged files with the help of lint-staged
- Contains [Visual Studio Code](https://github.com/microsoft/vscode)'s required settings and extension list for the workspace
- Added .gitattributes to turn off Git's own line ending conversion process in favor of cross platform development
- Added very useful/recommended .gitignore already
- Ready to create your own TypeScript types via [ts-toolbelt](https://github.com/millsp/ts-toolbelt)

## Structure

### assets

"assets" typically refer to files and resources that are used by an application or project to enhance its functionality or appearance. Assets can include a wide range of file types, such as images, videos, fonts, stylesheets, and more. The "assets" directory or folder is often used to organize and manage these resources in a structured manner. So this folder is for static files that the application needs to use other than the actual code.

### entities

"entities" typically refer to objects or data structures that represent core business concepts or real-world entities within an application or system. Entities are an essential part of the domain model and play a central role in modeling and managing data and functionality related to those concepts. The concept of "entities" is commonly associated with Domain-Driven Design (DDD) and Object-Oriented Programming (OOP) principles.

In short, it will contain the smallest logical pieces that the application should use. Uhm, what do you really need to put in? Well, this is where things get interesting. It will depend on what the application actually is. That means you have to decide what to put in it. For example,

- in a backend server app, you can put every logical step in an endpoint (like every pipe in a pipeline),
- in a frontend app, you can put every core component in a compound component,
- in a game app, you can put every object in the scene.

Pretty cool, huh?

### modules

"modules" typically refer to discrete, self-contained units of code that serve specific purposes within the project. Modules are a way of organizing and structuring your codebase to promote modularity, maintainability, and readability. They help break down a project into smaller, manageable components, each responsible for a particular aspect of functionality. The specific meaning of "modules" can vary depending on the programming language, development framework, or project architecture you are using. So in this structure we use it to group entities.

As explained in the **entities**, what you need to put will depend on what your application actually is. For example,

- in a backend server app, you can put endpoints (grouping logical steps),
- in a frontend app, you can put compound components (grouping core components),
- in a game app, you can put scenes (grouping objects).

### libs

"libs" _(aka [business logic](https://en.wikipedia.org/wiki/Business_logic))_ refer to the set of rules, calculations, and processes that define how a business or application operates (like each library dedicated to solve one specific problem). It represents the core functionality and decision-making processes that drive an application's behavior and enable it to fulfill its intended purpose. Business logic is an integral part of software development and project architecture.

### models

"models" typically refer to a layer that represents the data structure and business entities of your application. Models play a crucial role in organizing and managing data within your project. They define how data is structured, stored, and manipulated. The specific use of models can vary depending on the type of project.

### stores

"stores" typically refer to a layer that manages the state of an application or system. State management is crucial in software development because it involves preserving and updating data that an application relies on to function correctly. The term "stores" is often used in the context of front-end web development and is closely associated with certain JavaScript libraries and frameworks, particularly those that follow the Flux or Redux architectural patterns. However, similar concepts exist in other types of software projects as well.

### utils

"utils" is a common directory name used to house utility functions or helper code that doesn't belong to a specific component or module but is used throughout the project. These utility functions are often general-purpose and provide common functionality that can be reused in various parts of the application.

## Caveats

1. When you run your application for the first time, you may notice that Parcel installs several packages. This is because Parcel detects polymers that need to be added in order to run your application.

2. In order to tree-shake the Lodash library, you need to import the methods using the following syntax:

```typescript
import startCase from 'lodash/startCase.js'
import toLower from 'lodash/toLower.js'
```

```
instead of
```

```typescript
import { startCase, toLower } from 'lodash'
```

3. In _package.json_ you should fill in the fields: `description`, `keywords`, `author`, `license`.
4. Don't forget to add the **LICENSE** file!

## Contribution

If you have an idea to improve this project structure, you can open an [issue](https://github.com/b13nxx/nodejs-universal-template/issues) or better create a [PR](https://github.com/b13nxx/nodejs-universal-template/pulls). I am open to all help.
