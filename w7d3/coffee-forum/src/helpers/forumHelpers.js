export const addReplyToPost = (forumPost, replyData) => {
  const updatedForumPost = { ...forumPost }; // Shallow Copy
  
  const newReply = {
    id: String(forumPost.replies.length + 1),
    authorId: replyData.authorId,
    content: replyData.content,
    likes:0
  };
  
  const updatedReplies = [...forumPost.replies, newReply]; // Shallow Copy once more
  // updatedReplies.push(newReply)

  updatedForumPost.replies = updatedReplies

  return updatedForumPost
};

export const addLikeToPost = (forumPost, replyId, isUpvote) => {
  const updatedForumPost = { ...forumPost }; // Shallow Copy
  const updatedReplies = [...forumPost.replies]
  const updatedReply = {...forumPost.replies.find(reply => replyId === reply.id)}


  isUpvote ? updatedReply.likes++ : updatedReply.likes--

  const replyIndex = updatedReplies.findIndex(reply => replyId === reply.id)
  updatedReplies[replyIndex] = updatedReply

  updatedForumPost.replies = updatedReplies

  return updatedForumPost
}