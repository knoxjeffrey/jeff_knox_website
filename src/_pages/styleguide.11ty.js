require('module-alias/register')
const { html } = require('htm/preact')
const render = require('preact-render-to-string')

const Alert = require('@components/Alert.js')
const Button = require('@components/Button.js')
const ButtonGroup = require('@components/ButtonGroup.js')

exports.data = {
  layout: 'styleguide.11ty.js',
  title: 'Jeff Knox / Styleguide'
}

exports.render = data => {
  return render(html`
    <div class="components components-grid">
      <aside id="menu">
        <h2>Components</h2> 
        <nav>
          <ul>
            <li><a href="#Alerts">Alerts</a></li>
            <li><a href="#Buttons">Buttons</a></li>
            <li><a href="#Cards">Cards</a></li>
            <li><a href="#Figure">Image with caption</a></li>
            <li><a href="#Forms">Forms</a></li>
            <li><a href="#GridSystem">Grid System</a></li>
            <li><a href="#highlightjs">Highlight.js</a></li>
            <li><a href="#Lists">Lists</a></li>
            <li><a href="#Navigation">Navigation</a></li>
            <li><a href="#NavigationList">Navigation List</a></li>
            <li><a href="#Progress">Progress</a></li>
            <li><a href="#SpecialElements">Specia lElements</a></li>
            <ul>
              <li><a href="#Blockquote">Blockquote</a></li>
              <li><a href="#Misc">Misc</a></li>
            </ul>
            <li><a href="#Tables">Tables</a></li>
            <li><a href="#Timeline">Timeline</a></li>
            <li><a href="#Typography">Typography</a></li>
          </ul>
        </nav>
        <h2>Documentation</h2> 
        <nav>
          <ul>
            <li><a href="#DocTypography">Typography</a></li>
            <li><a href="#DocVariables">Variables</a></li>
          </ul>
        </nav>
      </aside>
      <main>
        <section>
          <header>
            <h2 id="Alerts">Alerts</h2>
          </header>
          <div class="flex-column">
            <${Alert} text="Default message" type="default" additionalClass="margin-bottom--s" />
            <${Alert} text="Primary message" type="primary" additionalClass="margin-bottom--s" />
            <${Alert} text="Error message" type="error" additionalClass="margin-bottom--s" />
          </div>
        </section>
        <hr />

        <section>
          <header>
            <h2 id="Buttons">Buttons</h2>
          </header>
          <div class="flex-column flex-column--start">
            <${Button} text="Default" type="default" additionalClass="margin-bottom--s" />
            <${Button} text="Primary" type="primary" additionalClass="margin-bottom--s" />
            <${Button} text="Error" type="error" additionalClass="margin-bottom--s" />
            <${Button} text="Default Ghost" type="default" ghost=true additionalClass="margin-bottom--s" />
            <${Button} text="Primary Ghost" type="primary" ghost=true additionalClass="margin-bottom--s" />
            <${Button} text="Error Ghost" type="error" ghost=true additionalClass="margin-bottom--s" />
            <${Button} text="Default Block" type="default" block=true additionalClass="margin-bottom--s" />
            <${Button} text="Default Ghost Block" type="default" ghost=true block=true additionalClass="margin-bottom--l" />
          </div>
          <header>
            <h2>Buttons group</h2>
          </header>
          <${ButtonGroup}>
            <${Button} text="Left" type="default" ghost=true additionalClass="margin-bottom--s" />
            <${Button} text="Middle" type="default" ghost=true additionalClass="margin-bottom--s" />
            <${Button} text="Right" type="default" ghost=true additionalClass="margin-bottom--s" />
          <//>
        </section>
        <hr />

      </main>
    </div>
  `)
};
