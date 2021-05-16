import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';


const Post = (props) => {
    const {id, title, body} = props.post;
    return (
        <div className="post-body">
            <h3>Title: {title}</h3>
            <p><span>Body:</span> {body}</p>
            {
                props.showDetails===true && 
                <Link to={`/details/${id}`}><button>See details...</button></Link>
            }
            
        </div>
    );
};

export default Post;