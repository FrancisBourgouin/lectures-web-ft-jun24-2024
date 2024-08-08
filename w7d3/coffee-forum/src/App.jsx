import { useReducer, useState } from "react";
import "./App.scss";
import ForumPost from "./components/ForumPost";
import Header from "./components/Header";
import { usersObj } from "./data/userData";
import { forumPostData } from "./data/postData";
import { addLikeToPost, addReplyToPost } from "./helpers/forumHelpers";

// We should have one big state instead of multiple small
// We should have one big action that does everything

const postReducer = (state, action) => {
  switch (action.type) {
    case "addReply":
      return { ...state, post: addReplyToPost(state.post, action.payload) };

    case "upvote":
      return { ...state, post: addLikeToPost(state.post, action.payload, true) };

    case "downvote":
      return { ...state, post: addLikeToPost(state.post, action.payload, false) };
  }
};

const initialState = { users: usersObj, post: forumPostData };

function App() {
  const [state, dispatch] = useReducer(postReducer, initialState);

  const addReply = (replyData) => dispatch({ type: "addReply", payload: replyData });

  const upvote = (replyId) => dispatch({ type: "upvote", payload: replyId });

  const downvote = (replyId) => dispatch({ type: "downvote", payload: replyId });

  return (
    <>
      <Header />
      <main>
        <ForumPost
          forumPost={state.post}
          users={state.users}
          addReply={addReply}
          upvote={upvote}
          downvote={downvote}
        />
      </main>
    </>
  );
}

export default App;
