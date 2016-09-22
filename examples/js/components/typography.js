import React from 'react'
import Playground from 'component-playground'

const headingsComponent =
`<div>
  <h1>H1: md-components &#9749;</h1>
  <h2>H2: md-components &#9749;</h2>
  <h3>H3: md-components &#9749;</h3>
  <h4>H4: md-components &#9749;</h4>
  <h5>H5: md-components &#9749;</h5>
  <h6>H6: md-components &#9749;</h6>
</div>`

export default class TypographyRoute extends React.Component {

  render () {
    return (
      <div>
        <section>
          <h2>Headings Examples</h2>
          <Playground
            codeText={headingsComponent}
            scope={{React}}
            collapsableCode
          />
        </section>
        <section>
          <h2>Specification</h2>
          <a className='examplesLink' href='https://material.google.com/style/typography.html'>
            https://material.google.com/components/lists.html
          </a>
        </section>
      </div>
    )
  }

}
