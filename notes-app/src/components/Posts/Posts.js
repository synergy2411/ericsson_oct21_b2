import { Fragment, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./Posts.css";

const sortingOrder = (posts, isAscending) => {
    return posts.sort((a,b)=>{
        if(isAscending){
            return a.title > b.title ? 1 : -1
        }else{
            return a.title < b.title ? 1 : -1
        }
    })
}

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const isAscending = queryParams.get("order") === "asc";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        const filteredPost = posts.filter((post, index) => index < 5);
        setPosts(filteredPost);
      });
  }, []);

  const postClickHandler = (id) => {
    history.push(`/posts/${id}`);
  };

  const orderChangeHandler = () => {
    history.push(`${location.pathname}?order=${isAscending?'desc' : 'asc'}`);
  };

  const sortedPost = sortingOrder(posts, isAscending)

  return (
    <Fragment>
      <p className="text-center display-4">My Posts</p>
      <br />

      <div className="row">
        <div className="col-6 offset-3">
          <button
            className="btn btn-primary btn-sm btn-block"
            onClick={orderChangeHandler}
          >
            Order {isAscending ? 'Decending' : 'Ascending'} 
          </button>

          <br />
          <ul className="list-group">
            {sortedPost.map((post) => (
              <li
                onClick={() => postClickHandler(post.id)}
                className="list-group-item my-list"
                key={post.id}
              >
                {" "}
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Posts;
