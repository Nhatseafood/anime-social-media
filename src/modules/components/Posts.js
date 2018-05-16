import React, { Component } from 'react';
import PostItem from './PostItem';

class Posts extends Component {
    deletePost(id){
        this.props.onDelete(id);
    }


    render() {

        let postItems;
        
        if(this.props.posts){
            postItems = this.props.posts.map ( post => {


                return (
                    <PostItem onDelete={this.deletePost.bind(this)} key={post.id} post={post} />
                  )
              })
            }


        return(
            <div>
                {postItems} <br />
                this is all the comments <br />
                </div>

        );
    }
}

export default Posts;