const { html } = require('htm/preact')

const Card = ({ data, title, content }) => {
  return html`
    <div class="terminal-card">
      <header>${title}</header>
      <div>${content}</div>
    </div>
  `
};

module.exports = Card
