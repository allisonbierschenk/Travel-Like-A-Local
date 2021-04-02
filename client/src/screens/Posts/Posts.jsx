import React, { useState } from "react";
import PostPreview from "../../components/PostPreview";
import Search from "../../components/Sesarch";

export default function Posts(props) {
  const { allPosts } = props;
  const [queriedPosts, setQueriedPosts] = useState([]);

  const handleSearch = (e) => {
    const newQueriedPost = allPosts.filter((post) =>
      post.destination.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQueriedPosts(newQueriedPost);
  };
  console.log(queriedPosts.length);
  console.log(allPosts);

  const handleSubmit = (event) => event.preventDefault();

  const allPostJSX = allPosts.map((post, index) => <PostPreview post={post} />);
  console.log(allPostJSX);

  const postJSX = queriedPosts.map((post, index) => (
    <PostPreview post={post} />
  ));

  console.log(postJSX);

  return (
    <div>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <div className="posts-list">
        {queriedPosts.length ? postJSX : allPostJSX}
      </div>
    </div>
  );
}
