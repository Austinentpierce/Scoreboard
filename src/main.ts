import './style.css'

let firstTeamScore = 0

const firstTeamScoreDisplay = document.querySelector('.team1 h3')
const firstTeamDeleteButton = document.querySelector('.team1 i.subtract')
const firstTeamPlusButton = document.querySelector('.team1 i.add')
const firstTeamNameDisplay = document.querySelector('.team1 h2')
const firstTeamNameInput = document.querySelector('.team1 input')

function handleClickOnTeamOneAddButton() {
  if (firstTeamScore >= 21) {
    return
  }

  firstTeamScore++

  if (firstTeamScoreDisplay) {
    firstTeamScoreDisplay.textContent = `${firstTeamScore}`
  }

  if (firstTeamScore >= 21) {
    window.alert('Team 1 is the winner!')
  }
}

function handleClickOnTeamOneDeleteButton() {
  if (firstTeamScore <= 0) {
    return
  }
  firstTeamScore--

  if (firstTeamScoreDisplay) {
    firstTeamScoreDisplay.textContent = `${firstTeamScore}`
  }
}

function teamOneNameInputChanged(event: any) {
  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value

    if (firstTeamNameDisplay) {
      firstTeamNameDisplay.textContent = textThatWasInput
    }
  }
}

let secondTeamScore = 0
const secondTeamDeleteButton = document.querySelector('.team2 i.subtract')
const secondTeamPlusButton = document.querySelector('.team2 i.add')
const secondTeamScoreDisplay = document.querySelector('.team2 h3')
const secondTeamNameDisplay = document.querySelector('.team2 h2')
const secondTeamNameInput = document.querySelector('.team2 input')

const resetButton = document.querySelector('.reset')

function handleClickOnTeamTwoAddButton() {
  if (secondTeamScore >= 21) {
    return
  }

  secondTeamScore++

  if (secondTeamScoreDisplay) {
    secondTeamScoreDisplay.textContent = `${secondTeamScore}`
  }

  if (secondTeamScore >= 21) {
    window.alert('Team 2 Won!!')
  }
}

function handleClickOnTeamTwoDeleteButton() {
  if (secondTeamScore <= 0) {
    return
  }
  secondTeamScore--

  if (secondTeamScoreDisplay) {
    secondTeamScoreDisplay.textContent = `${secondTeamScore}`
  }
}

function teamTwoNameInputChanged(event: any) {
  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value

    if (secondTeamNameDisplay) {
      secondTeamNameDisplay.textContent = textThatWasInput
    }
  }
}

function handleClickOnResetButton() {
  secondTeamScore = 0
  firstTeamScore = 0
  if (secondTeamScoreDisplay) {
    secondTeamScoreDisplay.textContent = `${firstTeamScore}`
  }

  if (secondTeamScoreDisplay) {
    secondTeamScoreDisplay.textContent = `${secondTeamScore}`
  }

  if (firstTeamNameDisplay) {
    firstTeamNameDisplay.textContent = 'Team 1'
  }

  if (secondTeamNameDisplay) {
    secondTeamNameDisplay.textContent = 'Team 2'
  }
}

firstTeamPlusButton?.addEventListener('click', handleClickOnTeamOneAddButton)
firstTeamDeleteButton?.addEventListener('click', handleClickOnTeamOneDeleteButton)
firstTeamNameInput?.addEventListener('input', teamOneNameInputChanged)
secondTeamPlusButton?.addEventListener('click', handleClickOnTeamTwoAddButton)
secondTeamDeleteButton?.addEventListener('click', handleClickOnTeamTwoDeleteButton)
secondTeamNameInput?.addEventListener('input', teamTwoNameInputChanged)
resetButton?.addEventListener('click', handleClickOnResetButton)