const origin = window.location.origin

const headers = new Headers({
  'Content-Type': 'application/json',
  'x-access-token': localStorage.getItem('access_token')
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

export const submitAnswer = (questionId, data) =>
  fetch(origin + `/dev/games/question/${questionId}/submit`, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), 
    headers
  })

export const getResult = quizId =>
  fetchJson(origin + `/dev/games/${quizId}/result`)

export const getHistory = userId =>
  fetchJson(origin + `/dev/games/user/${userId}/history`)
