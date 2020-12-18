const { html } = require('htm/preact');

const HeadTag = require('../../layouts/HeadTag');

module.exports = ({ children, data }) => {
  return html`
    <${HeadTag} data=${data} />
    <body class="main-wrapper">
      ${children}
    </body>
  `;
};
