import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/posts';
import InputText from '../forms/input_text';

class PostNew extends Component {

  handleFormSubmit(values) {
    console.log(values)
    this.props.savePost(values);
  }

  render () {
      const { valid, invalid, handleSubmit, fields: { title, location, content }} = this.props;

      return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <InputText label='Title' type='text' {...title} />
          <InputText label='Location' type='text' {...location} />
          <button className="btn btn-primary" action='submit'>Post</button>
        </form>
      );
  }
}
function mapStateToProps(state) {
  return { post: state.post.post };
}

export default reduxForm({
  form: 'post',
  fields: ['title', 'location'],
  null
}, mapStateToProps, actions)(PostNew);
