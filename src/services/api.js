const origin = 'https://29qqwwcte5.execute-api.ap-northeast-2.amazonaws.com' //window.location.origin

const headers = new Headers({
  'Content-Type': 'application/json',
  'Authorization': localStorage.getItem('access_token')
})

const fetchJson = url => fetch(url, {headers}).then(res => res.json())

export const createGame = data =>
  fetch(origin + '/dev/games/create', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), 
    headers
  })

export const getNextQuestion = quizId =>
  fetchJson(origin + `/dev/games/${quizId}/next`)

export const submitAnswer = (questionId, quizId, data) =>
  fetch(origin + `/dev/games/${quizId}/question/${questionId}/submit`, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), 
    headers
  })

export const getResult = quizId =>
  fetchJson(origin + `/dev/games/${quizId}/result`)

export const getHistory = userId =>
  fetchJson(origin + `/dev/games/user/${userId}/history`)
