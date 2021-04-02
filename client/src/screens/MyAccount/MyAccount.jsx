import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostPreview from "../../components/PostPreview";
import { getUsersPost } from "../../services/posts";

export default function MyAccount(props) {
  const { allPosts, currentUser } = props;
  // const [postData, setPostData] = useState([]);
  const { id } = useParams();
  console.log(currentUser);
  console.log(allPosts);
  // useEffect(() => {
  //   const fetchPostData = async () => {
  //     const postData = await getUsersPost(currentUser.id);
  //     setPostData(postData);
  //   };
  //   fetchPostData();
  // }, []);
  console.log(currentUser);

  return (
    <div>
      {/* {currentUser && (
        <>
          <Link to={`/posts/${allPosts.id}`}>
            <PostPreview
              title={allPosts.title}
              destination={allPosts.destination}
            />
          </Link>
        </>
      )} */}

      {currentUser &&
        allPosts &&
        allPosts
          .filter((post) => {
            return post.user_id === currentUser.id;
          })
          .map((post) => (
            <>
              <Link to={`/posts/${post.id}`}>
                <PostPreview
                  title={post.title}
                  destination={post.destination}
                />
              </Link>
            </>
          ))}
    </div>
  );
}
