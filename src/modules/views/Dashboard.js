import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Avatar from 'react-avatar';
import { form } from 'react-bootstrap';



class Dashboard extends Component {
    render () {
        return (
            <div class="container">
                 <Avatar size="200" round={true} name="Will Binns-Smith" src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg"  />
                 <p>Nhat</p>
                        <div>
                        <form action="./" method="post">
                        <label for="comment">Comment</label>
                        <textarea name="comment" id="comment"></textarea>
                        <button type="submit">Post</button>
                    </form>
                    </div>
            </div>


        );
    }
}

export default Dashboard;