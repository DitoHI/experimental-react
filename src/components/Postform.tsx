import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';

interface IProps {
  createPost: any
}

interface IState {
  title: string
  body: string
}

class Postform extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e: React.ChangeEvent<any>) {
    const key = e.currentTarget.name;
    if (Object.keys(this.state).includes(key)) {
      this.setState({ [key]: e.target.value } as Pick<IState, keyof IState>);
    }
  }
  
  onSubmit(e: React.ChangeEvent<any>) {
    e.preventDefault();
    const { title, body } = this.state;
    
    const post = {
      title: title,
      body: body
    };
    
    // call action
    this.props.createPost(post);
  }
  
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br/>
            <input type="text" name="title" onChange={this.onChange} value={title} />
          </div>
          <br />
          <div>
            <label>Body: </label><br/>
            <textarea name="body" value={body} onChange={this.onChange} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default connect(null, { createPost })(Postform);
