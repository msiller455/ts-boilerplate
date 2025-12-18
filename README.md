# TypeScript Boilerplate

A TypeScript boilerplate for quickly bootstrapping projects with different branches offering varying amount of features. Use as much or as little as you'd like.

## How To Use

### Choose Your Features

You can decide which features you woud like to include in your boilerplate. You can use all included features, or you can consult the branch options below to decide which features you want to include.

#### All Features

If you would like to use all included features, just clone this repo and include the name of your new project as an alias:

```shell
git clone https://github.com/msiller455/ts-boilerplate.git <your-project-name>
```

#### Specific Features

If you would like to only use specific features, consult the list of branch options below and use the following command and include the name of the feature specific branch you would like to use as well as the name of your new project:

```shell
git clone --branch <branch-name> --single-branch https://github.com/msiller455/ts-boilerplate.git <your-project-name>
```

### Connect Your New Remote

Navigate into the newly cloned repo:

```shell
cd <your-project-name>
```

Remove the previous git history and reitinialize a fresh git repo:

```shell
rm -rf .git
git init
```

Connect a new remote repository:

```shell
git remote add origin <url-to-new-repo>
```

Once the new remote repository has been added, you are ready to begin adding to your new project!

## Feature Branches

#### \*All branches include Prettier and ESLint configurations.

| Branch Name       | Included Features                                |
| ----------------- | ------------------------------------------------ |
| `main`            | Includes all features                            |
| `testing`         | Includes Vitest integration                      |
| `prettier-eslint` | Includes only Prettier and ESLint configurations |
