const { html } = require('htm/preact')

const typeClass = (type) => {
  switch (type) {
    case "default":
      return "btn-default"
    case "primary":
      return "btn-primary"
    case "error":
      return "btn-error"
  }
}

module.exports = ({ data, text, type, ghost, block, additionalClass }) => {
  const ghostClass = ghost ? "btn-ghost" : ""
  const blockClass = block ? "btn-block" : ""
  const buttonClass = `btn ${typeClass(type)} ${ghostClass} ${blockClass} ${additionalClass}`
  return html`
    <div class="${buttonClass}">${text}</div>
  `
};
