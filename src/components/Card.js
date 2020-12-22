const { html } = require('htm/preact')

module.exports = ({ data, title, content }) => {
  return html`
    <div class="terminal-card">
      <header>${title}</header>
      <div>${content}</div>
    </div>
  `
};
