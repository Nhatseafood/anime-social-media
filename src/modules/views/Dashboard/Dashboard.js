import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Avatar from 'react-avatar';
import { form } from 'react-bootstrap';
import PostContainer from './PostContainer';
import AddPosts from './AddPosts';

class Dashboard extends Component {

    constructor(){
        super();
        this.state = {
            posts: [],
            newPost:{
                id: "",
                caption: ""
            }
        }
    }

    render () {
        return (
            <div className="container">
                 <Avatar size={200} name="Will Binns-Smith" src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg"  />
                 <h2>Nhat Nguyen</h2>
                        <div>
                        <AddPosts />
                        <PostContainer />
                    </div>
            </div>


        );
    }
}

export default Dashboard;