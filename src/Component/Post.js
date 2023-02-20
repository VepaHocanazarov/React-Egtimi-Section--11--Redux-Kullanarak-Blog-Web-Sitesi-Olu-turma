import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        post:null
    };

    componentDidMount = () => {
        // console.log(this.props);


         axios.get("https://jsonplaceholder.typicode.com/posts/1")
         .then(res => {
             this.setState({
                 post: res.data
             });
             console.log(res)

         });
      
    }
    
    render() {

        const post = this.state.post ? (
            <div className="post">
                <h4 className='center'> {this.state.post.title} </h4>
                <p> {this.state.post.body} </p>
            </div>
        ) : (
            <div className="center">
            Loading Post...
            </div>
        )
        return (
            <div className='container'>

                {post}
                
            </div>
        );
    }
}

export default Post;