# Github commit viewer

Shows the commits of a specific repo and specific owner on demand.

# API

https://api.github.com/repos/OWNER/REPO/commits

# API Response

owner => User input
repo => User input
url of commit => commits[0].html_url
commiter => commits[0].commit.author.name
commiter url => commits[0].author.avatar_url
commit message => commits[0].commit.message
commit date => commits[0].commit.author.date

```jsx
[
  {
    url: "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
    sha: "6dcb09b5b57875f334f61aebed695e2e4193db5e",
    node_id: "MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==",
    html_url:
      "https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e",
    comments_url:
      "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments",
    commit: {
      url: "https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
      author: {
        name: "Monalisa Octocat",
        email: "support@github.com",
        date: "2011-04-14T16:00:49Z",
      },
      committer: {
        name: "Monalisa Octocat",
        email: "support@github.com",
        date: "2011-04-14T16:00:49Z",
      },
      message: "Fix all the bugs",
      tree: {
        url: "https://api.github.com/repos/octocat/Hello-World/tree/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        sha: "6dcb09b5b57875f334f61aebed695e2e4193db5e",
      },
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    author: {
      login: "octocat",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://github.com/images/error/octocat_happy.gif",
      gravatar_id: "",
      url: "https://api.github.com/users/octocat",
      html_url: "https://github.com/octocat",
      followers_url: "https://api.github.com/users/octocat/followers",
      following_url: "https://api.github.com/users/octocat/following{/other_user}",
      gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
      starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
      organizations_url: "https://api.github.com/users/octocat/orgs",
      repos_url: "https://api.github.com/users/octocat/repos",
      events_url: "https://api.github.com/users/octocat/events{/privacy}",
      received_events_url: "https://api.github.com/users/octocat/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "octocat",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://github.com/images/error/octocat_happy.gif",
      gravatar_id: "",
      url: "https://api.github.com/users/octocat",
      html_url: "https://github.com/octocat",
      followers_url: "https://api.github.com/users/octocat/followers",
      following_url: "https://api.github.com/users/octocat/following{/other_user}",
      gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
      starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
      organizations_url: "https://api.github.com/users/octocat/orgs",
      repos_url: "https://api.github.com/users/octocat/repos",
      events_url: "https://api.github.com/users/octocat/events{/privacy}",
      received_events_url: "https://api.github.com/users/octocat/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        url: "https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e",
        sha: "6dcb09b5b57875f334f61aebed695e2e4193db5e",
      },
    ],
  },
];
```

# Structure

- App

  - Header
  - RepoForm
  - CommitList
    - CommitListItem

- header
  - h1
- form
  - input owner
  - input repo
  - button fetch
  - button clear (if commits)
- ul
  - li
    - h1 commiter
    - a link to commit
    - p message
