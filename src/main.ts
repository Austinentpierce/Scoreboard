import './style.css'

let addingScore = document.querySelector('.team1 .add')

function handleClickAddingScoreForTeamOne() {
  console.log('i did it')
}
addingScore?.addEventListener('click', handleClickAddingScoreForTeamOne)

let subtractingScore1 = document.querySelector('.team1 .subtract')

function handleClickSubtractingScoreForTeamOne() {
  console.log('TOOK ONE AWAY')
}
subtractingScore1?.addEventListener(
  'click',
  handleClickSubtractingScoreForTeamOne
)

let addingScore2 = document.querySelector('.team2 .add')

function handleClickAddingScoreForTeamTwo() {
  console.log('OH YEAH WE CAME BACK')
}
addingScore2?.addEventListener('click', handleClickAddingScoreForTeamTwo)

let subtractingScore2 = document.querySelector('.team2 .subtract')

function handleClickSubtractingScoreForTeamTwo() {
  console.log('TOOK AWAY')
}
subtractingScore2?.addEventListener(
  'click',
  handleClickSubtractingScoreForTeamTwo
)

const inputElementOne = document.querySelector('input')
const HeaderTwoElement = document.querySelector('.team1 h2')
