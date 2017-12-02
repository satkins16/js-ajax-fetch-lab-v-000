const token = '0c9b24e4e577ebd0030d51534f64d2feac663f93';



function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => {
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '7e50f20c2c4344948ac2153a06f68f1a607c8bad'
}
