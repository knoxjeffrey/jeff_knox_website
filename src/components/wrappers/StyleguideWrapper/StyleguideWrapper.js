const { html } = require('htm/preact')

const HeadTag = require('@components/HeadTag')
const MainNavigation = require('@components/MainNavigation.js')

const navigationData = () => {
  return [
    { link: '/', title: 'Home' }
  ]
}

const StyleguideWrapper = ({ data, children }) => {
  return html`
    <${HeadTag} data=${data} />
    <body class="terminal">
      <script>window.__STATE__={components:{}}</script>
      <div class="container margin-bottom--m">
        <${MainNavigation} data=${data} navigationData=${navigationData()} />
      </div>
      <div class="container">
        ${children}
      </div>
      <script type="text/javascript" src="/assets/vendor.js?${data.cacheBust.vendorJs}" async></script>
      <script type="text/javascript" src="/assets/main.js?${data.cacheBust.mainJs}" async></script>
    </body>
  `
};

module.exports = StyleguideWrapper
