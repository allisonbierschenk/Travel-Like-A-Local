import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router";
import {
  getAllPosts,
  postPost,
  putPost,
  destroyPost,
} from "../../services/posts";
import Posts from "../../screens/Posts/Posts";
import PostEdit from "../../screens/PostEdit/PostEdit";
import PostCreate from "../../screens/PostCreate/PostCreate";
import PostDetail from "../../screens/PostDetail/PostDetail";
import MyAccount from "../../screens/MyAccount/MyAccount";

export default function MainContainer(props) {
  const [allPosts, setAllPosts] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const posts = await getAllPosts();
    setAllPosts(posts);
  };

  const createPost = async (postData) => {
    const newPost = await postPost(postData);
    setAllPosts((prevState) => [...prevState, newPost]);
    history.push("/myaccount");
  };

  const updatePost = async (id, postData) => {
    const updatedPost = await putPost(id, postData);
    setAllPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? updatedPost : post;
      })
    );
    history.push("/myaccount");
  };

  const removePost = async (id) => {
    await destroyPost(id);
    setAllPosts((prevState) => prevState.filter((post) => post.id !== id));
    history.push("/myaccount");
  };
  return (
    <>
      <Switch>
        <Route path="/posts/new">
          <PostCreate createPost={createPost} />
        </Route>
        <Route path="/posts/:id/edit">
          <PostEdit updatePost={updatePost} allPosts={allPosts} />
        </Route>
        <Route path="/posts/:id">
          <PostDetail
            allPosts={allPosts}
            removePost={removePost}
            currentUser={currentUser}
          />
        </Route>
        <Route path="/myaccount">
          <MyAccount allPosts={allPosts} currentUser={currentUser} />
        </Route>
        <Route path="/">
          <Posts allPosts={allPosts} />
        </Route>
      </Switch>
    </>
  );
}
