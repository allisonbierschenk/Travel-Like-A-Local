import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostPreview from "../../components/PostPreview";

export default function MyAccount(props) {
  const { allPosts, currentUser } = props;
  const [post, setPost] = useState(null);
  const { id } = useParams();

  console.log(allPosts);

  useEffect(() => {
    if (allPosts.length) {
      const onePost = allPosts.find((post) => post.id === Number(id));
      setPost(onePost);
    }
  }, [allPosts, id]);

  return (
    <div>
      {currentUser?.id === post.user_id && (
        <>
          (
          <Link to={`/posts/${post.id}`}>
            <PostPreview title={post.title} destination={post.destination} />
          </Link>
          )
        </>
      )}
    </div>
  );
}
