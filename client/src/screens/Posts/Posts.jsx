import React, { useState } from "react";
import HeroImage from "../../components/HeroImage";
import PostPreview from "../../components/PostPreview";
import Search from "../../components/Search";
import "./Posts.css";

export default function Posts(props) {
  const { allPosts } = props;
  const [queriedPosts, setQueriedPosts] = useState([]);

  const handleSearch = (e) => {
    const newQueriedPost = allPosts.filter((post) =>
      post.destination.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQueriedPosts(newQueriedPost);
  };

  const handleSubmit = (event) => event.preventDefault();
  const allPostJSX = allPosts.map((post) => (
    <PostPreview post={post} key={post.id} />
  ));
  const postJSX = queriedPosts.map((post) => (
    <PostPreview post={post} key={post.id} />
  ));

  return (
    <div>
      <HeroImage />
      <div className="homepage-body-overlay">
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <div className="posts-list">
          {queriedPosts.length ? postJSX : allPostJSX}
        </div>
      </div>
    </div>
  );
}
