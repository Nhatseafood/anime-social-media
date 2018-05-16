import React, { Component } from 'react';


class PostItem extends Component {

  deletePost(id){
    console.log(id);

    this.props.onDelete(id);
  }
  render() {
    return (
     <li>
         <b>{this.props.post.title}</b> 
         <a href="#" onClick={this.deletePost.bind(this, this.props.post.id)}>X</a>
     </li>
    );
  }
}

export default PostItem;