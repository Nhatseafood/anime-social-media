import React, {Component} from 'react';
import AddPosts from './AddPosts';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {fetchPosts} from '../../actions/postActions';


class PostContainer extends Component {

    constructor(){
        super();
        this.state = {
          posts: [
            {
                id:1,
                caption: 'Coding Boot Camp'
            },
            {
               id:2,
               caption: 'Houston Pubblic University'
            },
            { 
               id:3,
               caption: 'Texas Public University'
            }
            ]
        }
    }
   
    handleAddPost(post){
        console.log("what is being sent to us")
        console.log(post)
        
        let posts  = this.state.posts;
        posts.push(post);
        this.setState({posts:posts})
    } 

    render () { 
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
              <h3> {post.caption}</h3>
              </div>
          ));

        return (
            <div>
                {postItems}
                
            </div>
        );    
    }
}

PostContainer.propTypes={ 
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
  }
  const mapStateToProps = state => (
    {
      posts: state.posts.items 
    }
  );
  
export default connect(mapStateToProps, {fetchPosts})(PostContainer);
  

