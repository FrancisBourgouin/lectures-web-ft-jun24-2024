import { useState } from "react";

export default function ReplyForm(props) {
  const { onSubmit } = props;

  const [reply, setReply] = useState("")

  const handleChange = event => {
    setReply(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const generatedAuthorId = String(Math.floor(Math.random() * 5 + 1))

    const payload = {content:reply, authorId:generatedAuthorId}

    onSubmit(payload)

    setReply("")
  }


  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="ENTER REPLY HERE!" onChange={handleChange} value={reply}/>
      <button>ADD REPLY</button>
    </form>
  );
}
