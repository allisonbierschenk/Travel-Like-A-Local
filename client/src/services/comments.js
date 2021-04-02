import api from "./api-config";

export const getAllComments = async (postId) => {
  const resp = await api.get(`/posts/${postId}/comments`);
  return resp.data;
};

export const addComment = async (postId, commentData) => {
  const resp = await api.post(`/posts/${postId}/comments`, {
    comment: commentData,
  });
  return resp.data;
};
