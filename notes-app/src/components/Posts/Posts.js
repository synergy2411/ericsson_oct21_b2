import { Fragment, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import './Posts.css';

const Posts = () => {

    const [posts, setPosts]= useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => {
                const filteredPost = posts.filter((post, index) => index < 5)
                setPosts(filteredPost);
            })
    }, [])

    const postClickHandler = (id) => {
        history.push(`/posts/${id}`)
    }

    return (
        <Fragment>
            <p className="text-center display-4">My Posts</p>
            <div className="row">
                <div className="col-6 offset-3">
                    <ul className="list-group">
                        {posts.map((post) => <li 
                            onClick={
                                () => postClickHandler(post.id)
                            }
                            className="list-group-item my-list" 
                            key={post.id}> { post.title }</li>)}
                    </ul>
                </div>
            </div>
        </Fragment>
    )

}

export default Posts;