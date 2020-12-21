const { html } = require('htm/preact');
const render = require('preact-render-to-string');

const MainWrapper = require('../components/wrappers/MainWrapper/MainWrapper');

exports.data = {
  layout: 'base-layout.njk'
}

exports.render = data => {
  return render(html`
    <${MainWrapper} data=${data}>
      <div dangerouslySetInnerHTML=${{ __html: data.content }}></div>
    <//>
  `);
};
