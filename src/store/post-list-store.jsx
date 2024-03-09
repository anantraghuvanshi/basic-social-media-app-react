import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (curPostList, action) => {
  return curPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = () => {};
  const deletePost = () => {};
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostListProvider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListProvider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Lorem Ipsum",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to Kolkata",
    body: "Lorem Ipsum",
    reactions: 20,
    userId: "user-12",
    tags: ["Graduating", "Kolkata"],
  },
];

export default PostListProvider;
