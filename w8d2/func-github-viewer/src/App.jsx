import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import axios from "axios";
import CommitList from "./components/CommitList";
import { useState } from "react";
import { useEffect } from "react";

// Class based React
// Hookless React
// Pre-hooks era

// Reducers

export default function App() {
  const initialState = {
    commits: null,
    repoName: null,
    ownerName: null,
  };

  const [githubState, setGithubState] = useState(initialState);

  const fetchCommits = (formData) => {
    const { owner, repo } = formData;
    const commitsUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(commitsUrl)
      .then((res) => res.data)
      .then((commits) => {
        setGithubState({ ownerName: owner, repoName: repo, commits });
      })
      .catch((err) => {
        setGithubState(initialState);
      });
  };

  useEffect(() => {
    fetchCommits({ owner: "FrancisBourgouin", repo: "lectures-2020-mtl-feb03" });
    console.log("fetching data!");
  }, []);

  return (
    <>
      <Header />
      <main>
        <RepoForm onSubmit={fetchCommits} />
        {githubState.commits && <CommitList commits={githubState.commits} />}
      </main>
    </>
  );
}
