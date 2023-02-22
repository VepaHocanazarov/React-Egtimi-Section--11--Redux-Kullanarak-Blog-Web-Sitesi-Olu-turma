import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

class Post extends Component {


    render() {

        const post = this.props.post ? (
            <div className="post">
                <h4 className='center'> {this.props.post.title} </h4>
                <p> {this.props.post.body} </p>
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

const mapStateToProps = (state,) => {

    const {productId} = useParams();

    return {
        post: state.posts.find(post => post.id === productId)

    }
}

export default connect(mapStateToProps)(Post);