// I need:

// profile_picture
// name
// reply

export default function ReplyListItem(props) {
  const { name, content, profile_url, likes, upvote, downvote,  } = props;
  return (
    <li className="ReplyListItem">
      <img src={profile_url} alt="" />
      <h1>{name}</h1>
      <p>{content}</p>
      <span>
        <button onClick={downvote}>-</button>
        {likes}
        <button onClick={upvote}>+</button>
      </span>
    </li>
  );
}
