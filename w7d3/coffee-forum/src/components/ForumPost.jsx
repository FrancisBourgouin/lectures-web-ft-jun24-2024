import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

// I need

// question{}
// Users{}

// ReplyList

// Replies[]
// Users{} ???

// Each replylistitem needs:

// profile_picture
// name
// reply

export default function ForumPost(props) {
  const { users, forumPost, addReply, upvote, downvote } = props;

  return (
    <section className="ForumPost">
      <header>
        <h1>{forumPost.question}</h1>
        <h2>
          <img src={users[forumPost.authorId].profile_url} alt="" />
          <span>By: {users[forumPost.authorId].name}</span>
        </h2>
      </header>
      <ReplyList
        users={users}
        replies={forumPost.replies}
        upvote={upvote}
        downvote={downvote}
      />
      <ReplyForm onSubmit={addReply} />
    </section>
  );
}
