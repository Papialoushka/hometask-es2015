import qs from 'qs';
import path from 'path';
import Express from 'express';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import tweetReducer from './reducers/tweetReducer';
import App from './containers/App';
import {renderToString} from 'react-dom/server';
import Tweet from './initial-tweets/Tweet'

const server = Express();
const port = 8080;

// Serve static files.
server.use('/static', Express.static('static'));

// This is fired every time the server side receives a request.
// server.use(handleRender);

const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`;

server.get('/', (req, res) => {
  /**
   * renderToString() will take our React app and turn it into a string
   * to be inserted into our Html template function.
   */
  const body = renderToString(<Tweet />);
  const title = 'Server side Rendering with Styled Components';

  res.send(
    Html({
      body,
      title
    })
  );
});
// function handleRender(req, res) {
//   // Read the counter from the request, if provided.
//   const params = qs.parse(req.query);
//
//   // Create a new Redux store instance.
//   const store = createStore(tweetReducer);
//
//   // Render the component to a string
//   // const html = renderToString(
//   //   <Provider store={store}>
//   //     <App />
//   //   </Provider>
//   // );
//
//   // Grab the initial state from our Redux store
//   const finalState = store.getState();
//
//   // Send the rendered page back to the client
//   res.send(renderFullPage(html, finalState));
// }

// function renderFullPage(html, preloadedState) {
//   return `
//     <!doctype html>
//     <html>
//       <head>
//         <title>Redux Twitter App</title>
//       </head>
//       <body>
//         <div id="root">${html}</div>
//         <script>
//           // WARNING: See the following for security issues around embedding JSON in HTML:
//           // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
//           window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
//         </script>
//         <script src="/static/bundle.js"></script>
//       </body>
//     </html>
//     `;
// }

server.listen(port);