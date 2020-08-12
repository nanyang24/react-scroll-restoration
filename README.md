# react-scroll-restoration

With `React Router v4 & v5`, the smooth scroll restoration in SPA


## Why need Scroll Restoration?

I experiencing some problems with scroll positions on the back button (History Popstate) when using react-router. 

In a single page application (SPA), the application manipulates the browser history and DOM to simulate navigation. Because navigation is simulated and rendering is dynamic, the usual browser behavior of restoring scroll position when navigating back and forth through the history is not generally functional

[React Router](https://github.com/ReactTraining/react-router) does [not provide](https://github.com/ReactTraining/react-router/issues/3950) out of the box support for scroll restoration and as it currently stands they won't either, because browsers are implementing some automatic scroll behavior

`history.scrollRestoration` API is just a way of disabling the browser's automatic attempts at scroll restoration, which mostly don't work for SPA


## Install

```bash
# yarn
yarn add react-scroll-restoration

# npm
npm install react-scroll-restoration
```

## Usage

```js
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import ScrollRestoration from 'react-scroll-restoration'

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <Switch>
        <Route />
        <Route />
      </Switch>
    </Router>
  );
}
```


## Reference
- [History.scrollRestoration
](https://developer.mozilla.org/en-US/docs/Web/API/History/scrollRestoration)
- [ReactRouter - scroll-restoration
](https://reactrouter.com/web/guides/scroll-restoration)

## License
[MIT](https://github.com/nanyang24/react-scroll-restoration/blob/master/LICENSE)

