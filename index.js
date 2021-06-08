#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: pkgJSON.name,
  tagLine: `Hey, I'm Shawn Mathew`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#fadc00`,
  color: `#000`,
  bold: true,
  clear: true
});

console.log(`
Shawn Mathew - Frontend Engineer

I'm a frontend engineer building web experiences for both public and private customers. 
I collaborate with engineers, product managers and designers to deliver frontend systems that meet the need of its users.

Tech I work with:
Javascript, Typescript, React, Redux, Node.js, Next.js, GraphQL, Apollo, Sass, Webpack, Babel, NPM, Jest, Enzyme

`);