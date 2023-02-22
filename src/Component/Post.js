import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

class Post extends Component {

    handleClick = ()=>{
        this.props.deletepost(this.props.post.id);
        this.props.history.push("/");
    }


    render() {

        const post = this.props.post ? (
            <div className="post">
                <h4 className='center'> {this.props.post.title} </h4>
                <p> {this.props.post.body} </p>
                <div className="center">
                    <button className='btn grey' >Delete Post</button>
                </div>
            </div>
        ) : (
            <div className="center">
                Loading Post...
                <div className="center">
                    <button onClick={this.handleClick} className='btn grey' >Delete Post</button>
                </div>
            </div>
        )
        return (
            <div className='container'>

                {post}

            </div>
        );
    }
}

const mapStateToProps = (state) => {

    let { productId } = useParams();

    return {
        post: state.posts.find(post => post.id === productId)

    }
}

const mapdispatchToProps = (dispatch) => {

    return {
       
        deletepost:(id) => dispatch({type:"delete_post",id:id})

    }
}

export default connect(mapStateToProps,mapdispatchToProps)(Post);