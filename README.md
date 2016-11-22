# t3js-cli

> A utility that scaffolds out components for [T3](http://t3js.org)

```sh
t3js
```

## Getting Started
### Install

Install globally with [npm](https://npmjs.org/package/t3js-cli)

```sh
npm install -g t3js-cli
```

**You’ll need to have Node >= 4 on your machine**.

**We strongly recommend to use Node >= 6 and npm >= 3 for faster installation speed and better disk usage.** You can use [nvm](https://github.com/creationix/nvm#usage) to easily switch Node versions between different projects.

### Create a Component

To create a new component, run:
```sh
cd my-application
t3js
```
This will ask you a series of questions.
1. Which type of component would you like to create?
2. What is the name of your component?
3. What component namespace would you like to use?

#### Which type of component would you like to create?

Choose between a T3 module, service or behavior.

#### What is the name of your component?

Type a name for your component.

#### What component namespace would you like to use?

Type a namespace to override the default, or leave it blank and use the default value, `Box`.

### Initialize a `.t3jsrc` file

By default, your components will be saved to a directory called `scripts`. You can override this with a `.t3jsrc` config file. You can create your own `.t3jsrc` file or generate this automatically.

To initialize a `.t3jsrc` file, run:
```sh
t3js init
```

The `.t3jsrc` file is a JSON file with only one property called `directory`. When you initialize the file, it will ask you to specify the path for your components. Simply enter your path and hit return, or leave it blank and accept the default value.

### That's it for now!

To learn more about T3, check out the [documentation](http://t3js.org/docs/).

## License

MIT
