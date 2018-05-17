import React, { Component } from 'react';
import uuid from 'uuid'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class AddPosts extends Component {

    // constructor(){
    //     super();
    //     this.state = {
    //         newPost:{
    //             id: "",
    //             caption: ""
    //         }
    //     }
    // }
    

    handleSubmit(e){
        
        console.log("submitted");
        console.log(this.refs.caption.value, "<<<caption value");
        e.preventDefault();

        //this.setState({}, callback)

        if(this.refs.caption.value === ''){
            alert('comment is required')
        }else{
            console.log("<<<<caption value detected")
            // this.setState(
            //     {
            //         newPost:{
            //             id: uuid.v4(),
            //             caption: this.refs.caption.value,
            //         }
            //     }
            //     ,  function(){
            //     console.log(this.props.newPost , " << newPost from state ")
            //     // this.props.addPosts(this.state.newPost);
            // })
        }

    }

  render() {

    // let  captionOptions = this.props.caption.map(caption =>{
            
    //     return <option key={caption} value={caption}>{caption}</option>

    // })
    return (
    <div>
        <h1>Add Posts</h1>

        <div>
           <div>
               <label>Caption</label><br />
               <input type="text" ref="caption"/>
          </div>
          <button onClick = { () =>
          this.props.onSubmitEntry(this.refs.caption.value)}> Submit
        </button>
        </div>
     </div>
    );
  }
}

const mapStateToProps = state => {
    return{
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onSubmitEntry : (entry) => dispatch({type: "SUBMIT_ENTRY",
        userEntry : entry})
    }
}

AddPosts.propTypes = {
   addPost: PropTypes.func
}

export default connect(mapStateToProps,mapDispatchToProps) (AddPosts);