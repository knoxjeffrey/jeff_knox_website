const StyleguideForm = ({ data, html, h, useState, useForm }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return html`
    <form onSubmit=${handleSubmit(onSubmit)} noValidate>
      <fieldset>
        <legend>Form legend</legend>
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            id="email" name="email" type="email" placeholder="test"
            aria-invalid=${errors.email ? "true" : "false"}
            ref=${register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          ${errors.email && html`<p>invalid email address</p>`}
        </div>

        <div class="form-group">
          <label for="text">Text (min-length 5)</label>
          <input 
            id="text" name="text" type="text" placeholder="test"
            aria-invalid=${errors.text ? "true" : "false"}
            ref=${register({ required: true, minLength: 5 })}
          />
          ${errors.text && html`<p>must be at least 5 characters</p>`}
        </div>

        <div class="form-group">
          <button class="btn btn-default" type="submit" role="button" name="submit" id="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  `
};

module.exports = StyleguideForm
