const express = require('express')
require('dotenv').config()
const app = express()
// const port = 4000
const githubData = {
  "login": "prafulsirgit",
  "id": 130659794,
  "node_id": "U_kgDOB8m10g",
  "avatar_url": "https://avatars.githubusercontent.com/u/130659794?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/prafulsirgit",
  "html_url": "https://github.com/prafulsirgit",
  "followers_url": "https://api.github.com/users/prafulsirgit/followers",
  "following_url": "https://api.github.com/users/prafulsirgit/following{/other_user}",
  "gists_url": "https://api.github.com/users/prafulsirgit/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/prafulsirgit/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/prafulsirgit/subscriptions",
  "organizations_url": "https://api.github.com/users/prafulsirgit/orgs",
  "repos_url": "https://api.github.com/users/prafulsirgit/repos",
  "events_url": "https://api.github.com/users/prafulsirgit/events{/privacy}",
  "received_events_url": "https://api.github.com/users/prafulsirgit/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Praful Nayak",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2023-04-13T10:59:27Z",
  "updated_at": "2024-08-15T08:16:57Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
  res.send('<h1>This is Index Page...</h1>')
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})