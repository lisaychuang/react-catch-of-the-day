# React Catch of the Day app

React project built from Wesbos' [React for Beginners](https://reactforbeginners.com/) course

## [React components](https://reactjs.org/docs/components-and-props.html)
Conceptually, components are like JavaScript functions. React components are small, reusable pieces of code that accept arbitrary inputs (`props`), and
return React elements to be rendered to the page.

Whether you declare a component as a function or a class, it must never modify its own props. 

**All React components must act like pure functions with respect to their props.**

## Stateless Components
If a component only has a `render()` method and `props` passed in, we can just use a stateless function component.  This can be more performant.

## [Webpack bundler]
Webpack is a bundler which take JavaScript and CSS code written as separate modules (often hundreds of them), and combine them together into a few files (eg. `bundler.js`) better optimized for the browsers.

## [Render](https://reactjs.org/docs/react-component.html#render)
In every `React.Component` subclass, you must define the `render()` method.

The `render()` function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.

## [JSX](https://reactjs.org/docs/introducing-jsx.html)
`JSX`is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

In JSX, we can use `{}` to escape into Javascript. 
eg. To write a comment in JSX:  `{ /*I'm a comment*/ }`

## [React.Fragment](https://reactjs.org/docs/react-api.html#reactfragment)
The `React.Fragment` component lets you return multiple elements in a `render()` method without creating an additional DOM element. This can be very useful for Flexbox, where multiple adjacent elements are created withouta wrapper:

```js
    render() {
        return (
            <React.Fragment>
            Some text.
            <h2>A heading</h2>
            </React.Fragment>
        );
    }
```

You can also use it with the shorthand `<></>` syntax. 

## CSS
One way to componentize CSS/ inline CSS is to import CSS directly into a component. 

# Routing with [React Router](https://reacttraining.com/react-router/)
React Router is a collection of **navigational components** that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering

React Router uses **dynamic routing** - routing that takes place as your app is rendering, not in a configuration or convention outside of a running app. 