const { html } = require('htm/preact')

module.exports = (page, navigationData) => {
  return navigationData.map(navigation => {
    const active = page.url === navigation.link ? "active" : ""

    return html`
      <li><a href="${navigation.link}" class="menu-item ${active}">${navigation.title}</a></li>
    `
  })
}
