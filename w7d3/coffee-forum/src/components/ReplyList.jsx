import ReplyListItem from "./ReplyListItem";

// I need

// Replies[]
// Users{}

// Each replylistitem needs:

// profile_picture
// name
// reply

export default function ReplyList(props) {
  const { users, replies, upvote, downvote } = props;

  const parsedReplies =
    Array.isArray(replies) &&
    replies.map((reply) => (
      <ReplyListItem
        key={reply.id}
        {...reply}
        name={users[reply.authorId].name}
        profile_url={users[reply.authorId].profile_url}
        upvote={() => upvote(reply.id)}
        downvote={() => downvote(reply.id)}
      />
    ));

  return <ul className="ReplyList">{parsedReplies}</ul>;
}
