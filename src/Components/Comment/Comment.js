import React from 'react';
import './Comment.css'

const Comment = (comment) => {
    return (
        <div className="comment-sec">
            <h4>User Name: {comment.comment.name}</h4>
            <p>Email: {comment.comment.email}</p>
            <p><small>Comment: {comment.comment.body}</small></p>
        </div>
    );
};

export default Comment;