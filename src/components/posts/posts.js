import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/posts';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render () {
    return (
      <div> "hi babe" </div>
    );
  }
}
function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps, actions)(Posts);
