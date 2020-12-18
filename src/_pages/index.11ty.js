const { html } = require('htm/preact');
const render = require('preact-render-to-string');

const MainWrapper = require('../components/wrappers/MainWrapper/MainWrapper');

exports.data = {
  title: 'Setting up Eleventy with Preact and htm',
  layout: 'base-layout.11ty.js'
}

exports.render = data => {
  return render(html`
    <${MainWrapper} data=${data}>
      <div>Hi</div>
    <//>
  `);
};
