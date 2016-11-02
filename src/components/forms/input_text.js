import React, { Component } from 'react';

export default class InputText extends Component {
  render () {
      const { label, error, type, ...value } = this.props
      const errClass = error ? 'invalid' : 'valid';

      return (
        <div className="form-group">
          <label >{label}</label><br />
          <input className="form-control" type={type} {...value} />
        </div>
      );
  }
}
