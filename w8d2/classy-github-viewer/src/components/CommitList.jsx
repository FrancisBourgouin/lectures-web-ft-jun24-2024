// If your component doesn't need hooks, it doesn't need to be a class
import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commits } = props;

  const parsedCommits =
    Array.isArray(commits) && commits.map((commit) => <CommitListItem commit={commit} />);

  return <ul>{parsedCommits}</ul>;
}
