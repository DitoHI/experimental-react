import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions/postAction";

interface IProps {
  fetchPosts: any
  posts: []
  newPost: {}
}

interface IState {
  posts: []
}

class Posts extends Component<IProps, IState> {
  componentWillMount() {
    this.props.fetchPosts();
  }
  
  componentWillReceiveProps(nextProps: Readonly<IProps>) {
    const posts = nextProps.posts as any[];
    if (nextProps.newPost) {
      posts.unshift(nextProps.newPost);
    }
  }
  
  render() {
    const { posts } = this.props;
    let newPosts = posts.slice();
    const postItems = newPosts.map((post: any) => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )
    });
    
    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
