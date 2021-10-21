import { useEffect, useState } from "react";

const EffectHook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showParagraph, setShowParagraph] = useState(true);
  const [posts, setPosts] = useState([]);

  // useEffect(()=>{
  //     let notifier = setTimeout(() => {
  //         console.log("[USE EFFECT]")
  //     }, 500)
  //     return () => {
  //         console.log("[CLEAN UP]")
  //         clearTimeout(notifier)
  //     }
  // }, [isLoggedIn, showParagraph])

  useEffect(() => {
    if (localStorage.getItem("token") === "Bearer Token") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  const onLoginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("token", "Bearer Token");
  };

  const onToggleParagraphHandler = () => {
    setShowParagraph(!showParagraph);
  };

  const onLogoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };
  return (
    <div>
      {!isLoggedIn && (
        <button onClick={onLoginHandler} className="btn btn-primary">
          Login
        </button>
      )}
      {isLoggedIn && (
        <button onClick={onLogoutHandler} className="btn btn-danger">
          Logout
        </button>
      )}

      <br />
      <button onClick={onToggleParagraphHandler} className="btn btn-dark">
        Toggle
      </button>
      {showParagraph && <p>Effect hook demo works!</p>}
      <br />
      <hr />
      <ul className="list-group">
        {posts.map((post, idx) => (
          <li key={idx} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EffectHook;
