require('module-alias/register')
const { html } = require('htm/preact')
const render = require('preact-render-to-string')

const StyleguideWrapper = require('@components/wrappers/StyleguideWrapper/StyleguideWrapper.js')

exports.data = {
  layout: 'base-layout.njk'
}

exports.render = data => {
  return render(html`
    <${StyleguideWrapper} data=${data}>
      <div dangerouslySetInnerHTML=${{ __html: data.content }}></div>
    <//>
  `)
};
