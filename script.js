// costanti campi form

let firstNameInput = document.getElementById("firstName")
let lastNameInput = document.getElementById("lastName")
// creo chiave memoria

const KEY = "memory"

// funzione "on click"

// classe

class User {
  constructor(_firstName, _lastName) {
    this.firstName = _firstName
    this.lastName = _lastName
  }
}
// array per contener dati salvati

let users = []
const arrayOfSavedUsers = JSON.parse(localStorage.getItem(KEY))

// pulsante per salvare

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const firstName = firstNameInput.value
  const lastName = lastNameInput.value
  const newUser = new User(firstName, lastName)
  users.push(newUser)
  localStorage.setItem(KEY, JSON.stringify(users))
  form.reset()
})

if (users.length > 0) {
  firstNameInput.value = users[0].firstName
  lastNameInput.value = users[0].lastName
}

// pulsante per eliminare

const deleteBtn = document.getElementById("deleteBtn")

const localSave = localStorage.getItem(KEY)
console.log(localSave)

deleteBtn.addEventListener("click", () => {
  if (localSave !== null) {
    localStorage.removeItem(KEY)
  }
})

if (users.length > 0) {
  firstName.value = users[0].firstName
  lastName.value = users[0].lastName
}

// TIMER

const displaySeconds = document.getElementById("seconds")
KEY2 = "countingSeconds"
let seconds = parseInt(sessionStorage.getItem(KEY2)) || 0

// secondi a schermo

displaySeconds.textContent = seconds

// conteggio dei secondi

setInterval(() => {
  seconds++
  displaySeconds.textContent = seconds
  sessionStorage.setItem(KEY2, seconds)
}, 1000)
