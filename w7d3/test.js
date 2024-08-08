const forumPostData = {
  authorId: "5", // Author ID between 1 and 6
  id: "3", // Unique post ID
  title: "Coffee Recommendations",
  question:
    "I'm a coffee enthusiast, and I'm always looking for new coffee experiences. Can you recommend any unique coffee shops or hidden gems in our city? I appreciate your suggestions!",
  likes: 0, // Always 0 likes
  replies: [
    {
      id: "1", // Unique reply ID
      authorId: "2", // Author ID between 1 and 6
      content:
        "You should check out Brew Haven on 5th Avenue. They have a great selection of artisanal coffees!",
      likes: 0, // Always 0 likes
    },
    {
      id: "2", // Unique reply ID
      authorId: "4", // Author ID between 1 and 6
      content:
        "Cafe L'Amour in the old town district is a cozy spot with a unique atmosphere. You'll love it!",
      likes: 0, // Always 0 likes
    },
  ],
};

// forumPost
// Reply: reply text, authorId
const addReplyToPost = (forumPost, replyData) => {
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


const result = addReplyToPost(forumPostData, {authorId:"5",content:"yoyoyo"})
console.log(result)
console.log(forumPostData)