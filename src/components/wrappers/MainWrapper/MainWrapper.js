const { html } = require('htm/preact')

const HeadTag = require('@components/HeadTag')

const MainWrapper = ({ children, data }) => {
  return html`
    <${HeadTag} data=${data} />
    <body class="main-wrapper">
      <script>window.__STATE__={components:{}}</script>
      ${children}
      <script type="text/javascript" src="/assets/vendor.js?${data.cacheBust.vendorJs}" async></script>
      <script type="text/javascript" src="/assets/main.js?${data.cacheBust.mainJs}" async></script>
    </body>
  `
};

module.exports = MainWrapper
