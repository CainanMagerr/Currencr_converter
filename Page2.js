const signUp = document.querySelector('.signUp');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
registerLink.addEventListener('click', () => {
   signUp.classList.add('change-form');
});
loginLink.addEventListener('click', () => {
   signUp.classList.remove('change-form');
});
 
const buttonLog = document.querySelector('.register');
buttonLog.addEventListener('click', ()=> {
   signUp.classList.add('active-log')
})
const closeLog = document.querySelector('.close123');
closeLog.addEventListener('click', ()=> {
   signUp.classList.remove('active-log')
})