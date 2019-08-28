import App from '../common/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
let assets: any;
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import configureStore from '../common/store';
import { Provider } from 'react-redux';
import serializeJavascript from 'serialize-javascript';
const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!));

server.get('/*', (req, res) => {
  const counter = { counter: 3 };
  // Compile an initial state
  const preloadedState = { counter };
  const store = configureStore(preloadedState);

  const context: any = {};
  const sheet = new ServerStyleSheet();
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        {sheet.collectStyles(<App />)}
      </StaticRouter>
    </Provider>
  );
  const finalState = store.getState();
  const styleTags = sheet.getStyleTags();

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(
      `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">html,body{margin:0;padding:0}</style>
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
        ${styleTags}
    </head>
    <body>
        <div id="root">${markup}</div>
         <script>
          window.__PRELOADED_STATE__ = ${serializeJavascript(finalState)}
        </script>
    </body>
</html>`
    );
  }
});

export default server;
