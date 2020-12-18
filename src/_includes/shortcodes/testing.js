const { html } = require('htm/preact');
const render = require('preact-render-to-string');

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode('testing', function(data) {
    return render(html`
      <div>testing</div>
    `);
  })
}
