const { html } = require('htm/preact')
const { h } = require ('preact')
const { useState } = require('preact/hooks')
const { useForm } = require ('react-hook-form')

const withHydration = require('./with-hydration')

const Form = ({ data, formName }) => {
  const RequiredForm = require(`../forms/${formName}`)

  return html`
    <${RequiredForm} html=${html} h=${h} useState=${useState} useForm=${useForm} />
  `
}

module.exports = withHydration(Form)
