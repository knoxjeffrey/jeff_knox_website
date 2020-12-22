const { html } = require('htm/preact')
const render = require('preact-render-to-string')

const Counter = require(`../../components/hydrate/Counter.js`)

module.exports = eleventyConfig => {
  eleventyConfig.addShortcode('counterComponent', function(data) {
    return render(html`
      <${Counter} id=${data.id}/>
    `)
  })
}
