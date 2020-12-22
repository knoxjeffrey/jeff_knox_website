const { html } = require('htm/preact')

const navigationLinks = require('@utils/navigation-links')

const MainNavigation = ({ data, navigationData }) => {
  return html`
    <div class="terminal-nav">
      <header class="terminal-logo">
        <div class="logo terminal-prompt">
          <a href="/styleguide/" class="no-style">
            ${data.title}
          </a>
        </div>
      </header>
      <nav class="terminal-menu">
        <ul typeof="BreadcrumbList" vocab="https://schema.org/">
          ${navigationLinks(data.page, navigationData)}
        </ul>
      </nav>          
    </div>
  `;
};

module.exports = MainNavigation
