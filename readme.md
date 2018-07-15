# React Catch of the Day app

React project built from Wesbos' [React for Beginners](https://reactforbeginners.com/) course

## [React components](https://reactjs.org/docs/components-and-props.html)
Conceptually, components are like JavaScript functions. React components are small, reusable pieces of code that accept arbitrary inputs (`props`), and
return React elements to be rendered to the page.

## [Webpack bundler]
Webpack is a bundler which take JavaScript and CSS code written as separate modules (often hundreds of them), and combine them together into a few files (eg. `bundler.js`) better optimized for the browsers.

## [Render](https://reactjs.org/docs/react-component.html#render)
In every `React.Component` subclass, you must define the `render()` method.

The `render()` function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.