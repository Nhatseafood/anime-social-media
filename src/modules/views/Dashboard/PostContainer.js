import React, {Component} from 'react';
import AddPosts from './AddPosts';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {fetchPosts} from '../../actions/postActions';

import "./PostContainer.css"

import NewPost from "../../helpers/postHelper";

class PostContainer extends Component {

    // constructor(){
    //     super();
    //     this.state = {
          
    //     }
    // }
   componentWillMount() {
       this.props.fetchPosts();
   }

   componentWillReceiveProps(nextProps) {
       if(nextProps.newPost) {
           this.props.unshift(nextProps.newPost);
       }
   }

    render () { 
        console.log(this.state)
        console.log(this.props, " << props")
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
              <h3> {post.caption}</h3>
              </div>
          ));

        return (
            <div className="comments">
                <br/>
                <h2>Previous Comments</h2>
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
      posts: state.posts.items,
      userEntry : state.posts.userEntry 
    }
  );
  
export default connect(mapStateToProps, {fetchPosts})(PostContainer);
  

