const { html } = require('htm/preact');
const render = require('preact-render-to-string');

const Counter = require(`../components/Counter`);

exports.data = {
  title: 'Setting up Eleventy with Preact and htm',
  id: 34
}

exports.render = data => {
  return render(html`
    <div>Hi</div>
    <${Counter} id=${data.id}/>
  `);
};
