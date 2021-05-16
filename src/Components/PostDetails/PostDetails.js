import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';
import Post from '../Post/Post';
import './PostDetails.css'

const PostDetails = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( res => res.json())
        .then( data => setPosts(data))
    }, [])
    
    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then( res => res.json())
        .then( data => setComment(data))
    }, [])
    return (
        <div>
            {
                <Post showDetails={false} post={posts}></Post>
            }
            <h2>Comments:</h2>
            {
                comment.map(cmt => <Comment comment={cmt}></Comment>)
            }
        </div>
    );
};

export default PostDetails;