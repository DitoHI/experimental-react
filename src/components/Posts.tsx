import React, { Component } from 'react';

interface IState {
  posts: []
}

class Posts extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      posts: []
    }
  }
  
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }
  
  render() {
    const { posts } = this.state;
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

export default Posts;
