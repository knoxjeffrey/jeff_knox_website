const { html } = require('htm/preact')

const Figure = ({ data, caption, media, alt, title }) => {
  return html`
    <figure>
      <img src="${media}" alt="${alt}" title="${title}" />
      <figcaption>${caption}</figcaption>
    </figure>
  `
};

module.exports = Figure
