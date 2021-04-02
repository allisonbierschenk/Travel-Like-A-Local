import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostPreview from "../../components/PostPreview";
import { getUsersPost } from "../../services/posts";

export default function MyAccount(props) {
  const { allPosts, currentUser } = props;
  const [postData, setPostData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostData = async () => {
      const postData = await getUsersPost(currentUser.id);
      setPostData(postData);
    };
    fetchPostData();
  }, []);
  console.log(currentUser);
  console.log(postData);

  return (
    <div>
      {postData && (
        <>
          <Link to={`/posts/${postData.id}`}>
            <PostPreview
              title={postData.title}
              destination={postData.destination}
            />
          </Link>
        </>
      )}
    </div>
  );
}
