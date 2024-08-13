// url of commit => commits[0].html_url
// commiter => commits[0].commit.author.name
// commiter url => commits[0].author.avatar_url
// commit message => commits[0].commit.message
// commit date => commits[0].commit.author.date

export default function CommitListItem(props) {
  const { commit } = props;

  return (
    <li>
      <a href={commit.html_url}>{commit.commit.message}</a>
      <p>By: {commit.commit.author.name}</p>
      <p>On: {commit.commit.author.date}</p>
    </li>
  );
}
