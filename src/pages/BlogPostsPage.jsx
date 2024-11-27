import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const { state } = useLocation();

  console.log(window.history.state);

  useEffect(() => {
    console.log(state);
    if (state && state.posts) {
      setPosts(state.posts);
    }
  }, [state]);

  return (
    <div>
      <h1>Welcome to Blog Posts Page</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <section>
            <p>{post.content}</p>
          </section>
        </div>
      ))}
    </div>
  );
}
