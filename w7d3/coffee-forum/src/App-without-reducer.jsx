import { useState } from "react";
import "./App.scss";
import ForumPost from "./components/ForumPost";
import Header from "./components/Header";
import { usersObj } from "./data/userData";
import { forumPostData } from "./data/postData";
import { addLikeToPost, addReplyToPost } from "./helpers/forumHelpers";

function App() {
  const [users, setUsers] = useState(usersObj);
  const [forumPost, setForumPost] = useState(forumPostData);

  const addReply = (replyData) => {
    const updatedForumPost = addReplyToPost(forumPost, replyData);
    setForumPost(updatedForumPost);
  };

  const upvote = (replyId) => {
    const updatedForumPost = addLikeToPost(forumPost, replyId, true);
    setForumPost(updatedForumPost);
  };

  const downvote = (replyId) => {
    const updatedForumPost = addLikeToPost(forumPost, replyId, false);
    setForumPost(updatedForumPost);
  };

  return (
    <>
      <Header />
      <main>
        <ForumPost
          forumPost={forumPost}
          users={users}
          addReply={addReply}
          upvote={upvote}
          downvote={downvote}
        />
      </main>
    </>
  );
}

export default App;
