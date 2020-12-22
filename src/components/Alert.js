const { html } = require('htm/preact')

const typeClass = (type) => {
  switch (type) {
    case "primary":
      return "terminal-alert-primary"
    case "error":
      return "terminal-alert-error"
    default:
      return ""
  }
}

module.exports = ({ data, text, type, additionalClass }) => {
  const alertClass = `terminal-alert ${typeClass(type)} ${additionalClass}`
  return html`
    <div class="${alertClass}">${text}</div>
  `
};
