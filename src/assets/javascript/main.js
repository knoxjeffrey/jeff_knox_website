import '../stylesheets/main.scss';

const { html, render } = require('htm/preact');
const whenVisible = require('../../utils/when-visible');

const Counter = require('../../components/Counter');

// List all components to be hydrated on the client
const componentMap = {
  Counter,
};

const componentMarkers = document.querySelectorAll(`[data-cmp-id]`);

Array.from(componentMarkers).forEach(($marker) => {
  const component = $marker.nextElementSibling;

  // Hydrate only visible Preact components
  whenVisible(component, () => {
    const { name, props } = window.__STATE__.components[$marker.dataset.cmpId];
    const Component = componentMap[name];

    render(html`<${Component} ...${props}/>`, component.parentNode, component);
  });
});
