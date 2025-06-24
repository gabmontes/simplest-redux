# simplest-redux

What if we reduce [Redux](https://redux.js.org/) to the minimum?

## Motivation

Redux@4 is around 5 kb in size and 2 kb if compressed, according to [Bundlephobia](https://bundlephobia.com/package/redux@4.2.1). But it ships with many features that may not always be needed. So I would like to see what is the minimum implementation that barely resembles the reference library.

To do so, I tried two basic examples: [The Gist from the Redux README](https://github.com/reduxjs/redux/tree/v4.2.1?tab=readme-ov-file#the-gist) and [Counter Vanilla from the `examples` folder](https://github.com/reduxjs/redux/tree/v4.2.1/examples/counter-vanilla).

In both cases, the minimum code required fits into an old Twitter post: 140 characters!

```js
let NotRedux={createStore(e,t){let r=t,a=[],s=t=>{r=e(r,t),a.map(e=>e())};return s({}),{dispatch:s,getState:()=>r,subscribe:e=>a.push(e)}}};
```

Of course it lacks most of the extra functionality, runtime checks and even can have a few side effect not present in the original library but what did you expect after shaving off so much code!

## Installation

You can install it from NPM:

```sh
npm install simplest-redux
```

Or just add a script sourced from UNPKG to your page:

```html
<script src="https://unpkg.com/simplest-redux"></script>
```

Both options feature an UML loader so it can be `require`d from Node or parsed by the browser.

Additionally, you can also copy/paste the minimal code above directly into your code anywhere you want.

## Usage

Replace Redux with the this package/URL, `Redux` with `NotRedux` and pray for it to keep working!
