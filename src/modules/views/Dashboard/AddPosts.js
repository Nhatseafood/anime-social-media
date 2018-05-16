import React, { Component } from 'react';
import uuid from 'uuid'
import PropTypes from 'prop-types'


class AddPosts extends Component {

    constructor(){
        super();
        this.state = {
            newPost:{
                id: "",
                caption: ""
            }
        }
    }
    

    handleSubmit(e){
        
        console.log("submitted");
        console.log(this.refs.caption.value, "<<<caption value");
        e.preventDefault();

        //this.setState({}, callback)

        if(this.refs.caption.value === ''){
            alert('comment is required')
        }else{
            this.setState({newPost:{
                id: uuid.v4(),
                caption: this.refs.caption.value,
                
            }},  function(){
                
                this.props.addPosts(this.state.newPost);
            })
        }

    }

  render() {

    // // let  categoryOptions = this.props.categories.map(category =>{
            
    // //     return <option key={category} value={category}>{category}</option>

    // })
    return (
    <div>
        <h1>Add Posts</h1>

        <form onSubmit={this.handleSubmit.bind(this)}>
           <div>
               <label>Caption</label><br />
               <input type="text" ref="caption"/>
          </div>

          
          <input type="submit" value="post"/>
        </form>
     </div>
    );
  }
}

// AddPosts.propTypes = {
   
//     addPost: PropTypes.func
// }

export default AddPosts;