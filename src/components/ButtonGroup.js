const { html } = require('htm/preact')

const ButtonGroup = ({ data, children }) => {
  return html`
    <div class="btn-group">${children}</div>
  `
};

module.exports = ButtonGroup
