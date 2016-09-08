
import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import Playground from 'component-playground'
import {Chip} from '../../../'

const chipComponent =
`class App extends React.Component {

  state = {
    focused: false,
    value: []
  }

  onFocus = () => {
    this.setState({
      focused: true
    })
  }

  onBlur = () => {
    this.setState({
      focused: false
    })
  }

  onChange = (value) => {
    this.setState({value})
  }

  render () {
    return (
      <div>
        <div
          className={classnames('Chip-example1', {
            'is-focused': this.state.focused
          })}
        >
          <Chip
            placeholder={this.state.value.length ? '': 'search ...'}
            value={this.state.value}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        </div>
        {this.state.value.length ? <p>Values</p> : null}
        <ul>
          {this.state.value.map((s, i) => <li key={i}>{s.text}</li>)}
        </ul>
      </div>
    )
  }

}

ReactDOM.render(<App />, mountNode)`

const chipInitialValues =
`class App extends React.Component {

  state = {
    value: [{text: 'github'}, {text: 'stackoverflow'}],
    focused: false
  }

  onChange = (value) => {
    this.setState({value})
  }

  onFocus = () => {
    this.setState({
      focused: true
    })
  }

  onBlur = () => {
    this.setState({
      focused: false
    })
  }

  render () {
    return (
      <div>
        <div
          className={classnames('Chip-example1', {
            'is-focused': this.state.focused
          })}
        >
          <Chip
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            value={this.state.value}
          />
        </div>
        {this.state.value.length ? <p>Values</p> : null}
        <ul>
          {this.state.value.map((s, i) => <li key={i}>{s.text}</li>)}
        </ul>
      </div>
    )
  }

}

ReactDOM.render(<App />, mountNode)`

const chipCustomDelimiters =
`class App extends React.Component {

  state = {
    value: [],
    focused: false
  }

  onChange = (value) => {
    this.setState({value})
  }

  onFocus = () => {
    this.setState({
      focused: true
    })
  }

  onBlur = () => {
    this.setState({
      focused: false
    })
  }

  render () {
    return (
      <div>
        <div
          className={classnames('Chip-example1', {
            'is-focused': this.state.focused
          })}
        >
          <Chip
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            delimiters={[32]}
            value={this.state.value}
          />
        </div>
        {this.state.value.length ? <p>Values</p> : null}
        <ul>
          {this.state.value.map((s, i) => <li key={i}>{s.text}</li>)}
        </ul>
      </div>
    )
  }

}

ReactDOM.render(<App />, mountNode)`

export default class ChipRoute extends React.Component {

  render () {
    return (
      <div>
        <section>
          <h2>Chip</h2>
          <Playground
            docClass={Chip}
            codeText={chipComponent}
            noRender={false}
            scope={{React, ReactDOM, Chip, classnames}}
          />
        </section>
        <section>
          <h2>Chip with initial values</h2>
          <Playground
            codeText={chipInitialValues}
            noRender={false}
            scope={{React, ReactDOM, Chip, classnames}}
          />
        </section>
        <section>
          <h2>Chip with custom delimiters (e.g. space)</h2>
          <Playground
            codeText={chipCustomDelimiters}
            noRender={false}
            scope={{React, ReactDOM, Chip, classnames}}
          />
        </section>
      </div>
    )
  }

}