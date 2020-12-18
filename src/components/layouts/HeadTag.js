const { html } = require('htm/preact');

module.exports = ({ data }) => html`
  <head>
    <meta charset="utf-8" />
    <meta content="ie=edge" http-equiv="x-ua-compatible" />
    <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
    <meta content="ie=edge" http-equiv="X-UA-Compatible" />
    <meta content="#ffffff" name="msapplication-TileColor" />
    <meta content="/favicon/ms-icon-144x144.png" name="msapplication-TileImage" />
    <title>${data.title}</title>
    <link rel="stylesheet" href="/assets/main.css?${data.cacheBust.mainCss}" />
    <script type="text/javascript" src="/assets/main.js?${data.cacheBust.mainJs}"></script>
  </head>
`;
