const { html } = require('htm/preact')

module.exports = ({ data, children }) => {
  return html`
    <div class="btn-group">${children}</div>
  `
};
