import { Component } from "react";

export default class CommitList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { commits } = this.props;

    const parsedCommits =
      Array.isArray(commits) &&
      commits.map((commit) => <CommitListItem commit={commit} />);

    return <ul>{parsedCommits}</ul>;
  }
}
