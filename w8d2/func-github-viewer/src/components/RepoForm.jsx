import { useEffect } from "react";
import { useState } from "react";
import { Component } from "react";

export default function RepoForm(props){
  const {onSubmit} = props
  const initialState = {owner:"", repo:""}

  const [formData, setFormData] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newState = { ...formData };
    newState[name] = value;

    setFormData(newState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
  };

  useEffect(() => {
    console.log("Component is loaded and ready to go!")

    return () => console.log("bye bye!")
  },[])


  useEffect(() => {
    const report = event => console.log("User clicked at coordinates", event.clientX, event.clientY)

    document.addEventListener("click", report)

    return () => document.removeEventListener("click", report)
  })

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="owner"
        placeholder="Enter the owner"
        onChange={handleChange}
        value={formData.owner}
      />
      <input
        type="text"
        name="repo"
        placeholder="Enter the repo"
        onChange={handleChange}
        value={formData.repo}
      />
      <button>Fetch commits</button>
    </form>
  );
}