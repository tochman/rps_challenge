const CTA = document.getElementById('cta')

const displayChoice = (event) => {
  CTA.innerHTML = `You chose ${event.target.innerText}`

}
const choiceButtons = document.querySelectorAll('.selection')
let button
choiceButtons.forEach(button => {
  console.log('adding to ' + button.id)
  button.addEventListener('click', displayChoice)
} ) 
document.addEventListener('DOMContentLoaded', () => {


})
