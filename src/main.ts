import './style.css'

let firstTeamScore = 0
const teamOnePlusButton = document.querySelector('.team1 i.add')
const teamOneMinusButton = document.querySelector('.team1 i.subtract')
const teamOneScoreText = document.querySelector('.team1 h3')
const teamOneNameInput = document.querySelector('.team1 input')
const teamOneNameText = document.querySelector('.team1 h2')
const resetBothTeams = document.querySelector('.reset')

function handleClickOnTeamOnePlusButton() {
  firstTeamScore++

  if (teamOneScoreText) {
    teamOneScoreText.textContent = `${firstTeamScore}`
  }
}
teamOnePlusButton?.addEventListener('click', handleClickOnTeamOnePlusButton)
function handleClickOnTeamOneMinusButton() {
  if (firstTeamScore === 0) {
    console.debug('The value can not go below zero')
    return
  }
  firstTeamScore--

  if (teamOneScoreText) {
    teamOneScoreText.textContent = `${firstTeamScore}`
  }
}
teamOneMinusButton?.addEventListener('click', handleClickOnTeamOneMinusButton)
function teamOneNameInputChanged(event: Event) {
  const changedInputText = event.target

  if (changedInputText instanceof HTMLInputElement) {
    const textThatWasInput = changedInputText.value

    if (teamOneNameText) {
      teamOneNameText.textContent = textThatWasInput
    }
  }
}
teamOneNameInput?.addEventListener('input', teamOneNameInputChanged)

function handleClickButton(event: MouseEvent) {
  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLElement) {
    if (buttonClicked?.classList.contains('.reset')) {
      firstTeamScore = 0
    }
  }
}

let secondTeamScore = 0
const teamTwoPlusButton = document.querySelector('.team2 i.add')
const teamTwoMinusButton = document.querySelector('.team2 i.subtract')
const teamTwoScoreText = document.querySelector('.team2 h3')
const teamTwoNameInput = document.querySelector('.team2 input')
const teamTwoNameText = document.querySelector('.team2 h2')

function handleClickOnTeamTwoPlusButton() {
  secondTeamScore++

  if (teamTwoScoreText) {
    teamTwoScoreText.textContent = `${secondTeamScore}`
  }
}

teamTwoPlusButton?.addEventListener('click', handleClickOnTeamTwoPlusButton)

function handleClickOnTeamTwoMinusButton() {
  if (secondTeamScore === 0) {
    console.debug('User can not go below the value of 0')

    return
  }
  secondTeamScore--

  if (teamTwoScoreText) {
    teamTwoScoreText.textContent = `${secondTeamScore}`
  }
}

teamTwoMinusButton?.addEventListener('click', handleClickOnTeamTwoMinusButton)

function teamTwoNameInputChanged(event: Event) {
  const changedInputText2 = event.target

  if (changedInputText2 instanceof HTMLInputElement) {
    const textThatWasInput2 = changedInputText2.value

    if (teamTwoNameText) {
      teamTwoNameText.textContent = textThatWasInput2
    }
  }
  if (resetBothTeams instanceof HTMLElement) {
    resetBothTeams?.addEventListener('click', handleClickButton)
  }
}
teamTwoNameInput?.addEventListener('input', teamTwoNameInputChanged)
