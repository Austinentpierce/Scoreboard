import './style.css'

let teamOneScore = 0
let teamTwoScore = 0

const teamOneScoreDisplay = document.querySelector('.team1 h3')

const teamOneAddButton = document.querySelector('.team1 i.add')

function handleClickOnTeamOneAddButton() {
  if (teamOneScore >= 21) {
    return
  }

  teamOneScore++

  if (teamOneScoreDisplay) {
    teamOneScoreDisplay.textContent = `${teamOneScore}`
  }

  if (teamOneScore >= 21) {
    window.alert('Team 1 is the winner!')
  }
}

teamOneAddButton?.addEventListener('click', handleClickOnTeamOneAddButton)

const teamOneDeleteButton = document.querySelector('.team1 i.subtract')

function handleClickOnTeamOneDeleteButton() {
  if (teamOneScore <= 0) {
    return
  }
  teamOneScore--

  if (teamOneScoreDisplay) {
    teamOneScoreDisplay.textContent = `${teamOneScore}`
  }
}

teamOneDeleteButton?.addEventListener('click', handleClickOnTeamOneDeleteButton)

const teamOneNameDisplay = document.querySelector('.team1 h2')

const teamOneNameInput = document.querySelector('.team1 input')

function teamOneNameInputChanged(event: any) {
  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value

    if (teamOneNameDisplay) {
      teamOneNameDisplay.textContent = textThatWasInput
    }
  }
}

teamOneNameInput?.addEventListener('input', teamOneNameInputChanged)

const teamTwoAddButton = document.querySelector('.team2 i.add')

function handleClickOnTeamTwoAddButton() {
  if (teamTwoScore >= 21) {
    return
  }

  teamTwoScore++

  if (teamTwoScoreDisplay) {
    teamTwoScoreDisplay.textContent = `${teamTwoScore}`
  }

  if (teamTwoScore >= 21) {
    window.alert('Team 2 Won!!')
  }
}

const teamTwoDeleteButton = document.querySelector('.team2 i.subtract')

function handleClickOnTeamTwoDeleteButton() {
  if (teamTwoScore <= 0) {
    return
  }
  teamTwoScore--

  if (teamTwoScoreDisplay) {
    teamTwoScoreDisplay.textContent = `${teamTwoScore}`
  }
}

teamTwoDeleteButton?.addEventListener('click', handleClickOnTeamTwoDeleteButton)

const teamTwoScoreDisplay = document.querySelector('.team2 h3')

teamTwoAddButton?.addEventListener('click', handleClickOnTeamTwoAddButton)

const teamTwoNameDisplay = document.querySelector('.team2 h2')

const teamTwoNameInput = document.querySelector('.team2 input')

function teamTwoNameInputChanged(event: any) {
  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value

    if (teamTwoNameDisplay) {
      teamTwoNameDisplay.textContent = textThatWasInput
    }
  }
}
teamTwoNameInput?.addEventListener('input', teamTwoNameInputChanged)

const resetButton = document.querySelector('.reset')

function handleClickOnResetButton() {
  teamTwoScore = 0
  teamOneScore = 0
  if (teamOneScoreDisplay) {
    teamOneScoreDisplay.textContent = `${teamOneScore}`
  }

  if (teamTwoScoreDisplay) {
    teamTwoScoreDisplay.textContent = `${teamTwoScore}`
  }

  if (teamOneNameDisplay) {
    teamOneNameDisplay.textContent = 'Team 1'
  }

  if (teamTwoNameDisplay) {
    teamTwoNameDisplay.textContent = 'Team 2'
  }
  if (teamOneNameInput) {
    teamOneNameInput.textContent = 'Name'
  }

  if (teamTwoNameInput) {
    teamTwoNameInput.textContent = 'Name'
  }
}
resetButton?.addEventListener('click', handleClickOnResetButton)