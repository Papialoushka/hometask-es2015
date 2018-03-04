import qs from 'qs';
import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tweetApp from './reducers';
import App from './containers/App';
import { renderToString } from 'react-dom/server';
​
const app = Express();
const port = 3000;
​
// Serve static files.
app.use('/static', Express.static('static'));
​
// This is fired every time the server side receives a request.
app.use(handleRender);
​
function handleRender(req, res) {
  // Read the counter from the request, if provided.
  const params = qs.parse(req.query);
  //const counter = parseInt(params.counter, 10) || 0;
​
  // Compile an initial state
  let preloadedState = { counter };
​
  // Create a new Redux store instance.
  const store = createStore(tweetApp, preloadedState);
​
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
​
  // Grab the initial state from our Redux store
  const finalState = store.getState();
​
  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState));
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Twitter App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}
​
app.listen(port);
