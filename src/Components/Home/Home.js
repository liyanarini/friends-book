import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then( res => res.json())
        .then( data => setPosts(data))
    }, [])
    return (
        <div className="home">
            <h2>All Posts Here:</h2>
            {
                posts.map(post => <Post post={post} showDetails={true}></Post>)
            }
        </div>
    );
};

export default Home;