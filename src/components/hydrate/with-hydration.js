// https://medium.com/@luke_schmuke/how-we-achieved-the-best-web-performance-with-partial-hydration-20fab9c808d5
// https://markus.oberlehner.net/blog/building-partially-hydrated-progressively-enhanced-static-websites-with-isomorphic-preact-and-eleventy
const { html } = require('htm/preact')
const { h } = require ('preact')

let id = 0;

module.exports = Component => (props) => {
  id += 1
  const scriptSrc = `
    window.__STATE__.components[${id}]={name:${JSON.stringify(Component.name)},props:${JSON.stringify(props)}}
  `

  return html`
    ${(typeof window === 'undefined') && html`<script dangerouslySetInnerHTML=${{ __html: scriptSrc }} data-cmp-id=${id}></script>`}
    <${Component} ...${props}/>
  `
}
