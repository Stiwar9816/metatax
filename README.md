# Metatax | Detector de evasiones tributarias

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## COMMIT STRUCUTRE

| Type     | Definition                                            |
| -------- | ----------------------------------------------------- |
| feat     | When new features are added                           |
| fix      | Correction of some error                              |
| build    | Build system changes                                  |
| chore    | Changes that do not affect the production environment |
| ci       | Continuous Integration configuration changes          |
| docs     | Documentation Changes                                 |
| perf     | Application performance improvements                  |
| refactor | Code refactoring processes                            |
| revert   | Rollbacks to a previous commit                        |
| style    | Style changes in the application                      |
| syntax   | Code syntax changes                                   |
| test     | Add or correct test                                   |
| delete   | File deletion                                         |

## Example

```sh
fix (button) = Change of any button
```

If the commit has a change that makes it incompatible with the new version, for example the ORM change, the commit will be created as follows:

```sh
fix (database)! = If you have the "!" at the end it means that it is a breaking change
```

and finally add a short message:

```sh
fix (UserController): Changing the HTTP method used in /register
```
