import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Pokeboll from "../ball.png";
import { Connect, connect } from 'react-redux';

class Home extends Component {

    render() {

        const { posts } = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className=" post card" key = {post.id}>  
                     <img src={Pokeboll} alt="" />                     
                        <div className="card-content">                       
                            <Link to = {"/"+post.id}>
                            <span className='card-title red-text'>
                                {post.title}                              
                            </span>
                            </Link>
                            <p>{post.body}</p>
                        </div>  
                    </div>
                )
            })
        ) : (
            <div className="center">
                No Post to Show
            </div>
        )
        return (
            <div>
                <div className=" home container">
                    <h4 className="center">Home</h4>
                    {postList}
                </div>
            </div>
        )
    }
}

const Send  = (state) =>{
    return{
        posts:state.posts
    }
}

export default connect (Send) (Home);
