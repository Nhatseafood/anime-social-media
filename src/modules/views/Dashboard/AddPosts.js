import React, { Component } from 'react';
import uuid from 'uuid'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from "../../helpers/postHelper";

import { addPost } from "../../actions/postActions"


class AddPosts extends Component {

    constructor(){
        super();
        this.state = {
            id: "",
            caption: ""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    

    onSubmit(e){
        e.preventDefault();
        var newCaptionValue = this.refs.caption.value;
        //this.setState({}, callback)

        if(newCaptionValue === '') {
            alert('comment is required')
        } 
        else {
            console.log("<<<<caption value detected")
            var post = new Post(newCaptionValue)
            console.log(post, " << new Post")
            this.props.addPost(post);    
        }
    }

  render() {

    return (
    <div>
        <h1>Add Posts</h1>

        <div>
           <div>
               <label>Caption</label><br />
               <input type="text" ref="caption"/>
          </div>
          <button onClick={this.onSubmit}> Submit
        </button>
        </div>
     </div>
    );
  }
}

// const mapStateToProps = state => {
//     return{
//         ...state
//     }
// }

AddPosts.propTypes = {
   addPost: PropTypes.func
}

export default connect(null,{ addPost }) ( AddPosts );