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
//    componentWillMount() {
//        //this.props.fetchPosts();
//    }

   componentWillMount(){

    var postsArray = [
        {
            id:1,
            caption: 'Cool Costume!'
        },
        {
           id:2,
           caption: 'I love Anime!'
        },
        { 
           id:3,
           caption: 'ComicPalooza Time'
        }
    ]
    this.props.addPost(postsArray);
}

   componentWillReceiveProps(nextProps) {
       if(nextProps.newPost) {
           this.props.unshift(nextProps.newPost);
       }
   }

    render () { 
        console.log('state: ',this.state)
        console.log( " << props", this.props)


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
 

  function mapStateToProps(state, props){
    return {
        posts: state.posts.items,
        userEntry : state.posts.userEntry 
    }
}

function mapDispatchToProps(dispatch){
    return{
        addPost: (posts) => dispatch(
            {
            type: "FETCH_POSTS",
            payload: posts
          })
    }
}



export default connect(mapStateToProps,mapDispatchToProps) ( PostContainer );
  
//export default connect(mapStateToProps, {fetchPosts})(PostContainer);
  

