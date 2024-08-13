import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import axios from "axios";
import CommitList from "./components/CommitList";

// Class based React
// Hookless React
// Pre-hooks era

// Reducers

export default class App extends Component {
  constructor() {
    super();
    this.initialState = {
      commits: null,
      repoName: null,
      ownerName: null,
    };

    this.state = this.initialState;
  }

  fetchCommits = (formData) => {
    const { owner, repo } = formData;
    const commitsUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(commitsUrl)
      .then((res) => res.data)
      .then((commits) => {
        this.setState({ ownerName: owner, repoName: repo, commits });
      })
      .catch((err) => {
        this.setState(this.initialState);
      });
  };

  componentDidMount() {
    this.fetchCommits({ owner: "FrancisBourgouin", repo: "lectures-2020-mtl-feb03" });
  }

  render() {
    return (
      <>
        <Header />
        <main>
           <RepoForm onSubmit={this.fetchCommits} />
          {this.state.commits && <CommitList commits={this.state.commits} />}
        </main>
      </>
    );
  }
}
