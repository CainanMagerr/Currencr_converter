

const convert = document.querySelector(".convert");
const result = document.querySelector(".result1");
const from = document.querySelector(".select1");
const to = document.querySelector(".select2");
const amount = document.querySelector(".input1");
convert.addEventListener("click", function () {
   let fromCurrency = from.value;
   let toCurrency = to.value;
   let amt = amount.value;
   fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => {
         return response.json();
      })
      .then(data => {
         let rate = data.rates[toCurrency];
         let total = rate * amt;
         result.innerHTML = `${amt} ${fromCurrency} = ${total} ${toCurrency}`;
      });
});




const signUp = document.querySelector('.signUp');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forgotLink = document.querySelector('.forgot-link');
const loginLink1 = document.querySelector('.login-link1');

registerLink.addEventListener('click', () => {
   signUp.classList.add('change-form');
});
loginLink.addEventListener('click', () => {
   signUp.classList.remove('change-form');
});

//  forgotLink.addEventListener('click', ()=> {
//    signUp.classList.add('forgot-form');
//  })

//  loginLink1.addEventListener('click', ()=> {
//    signUp.classList.remove('forgot-form');
//  })

const buttonLog = document.querySelector('.register');
buttonLog.addEventListener('click', ()=> {
   signUp.classList.add('active-log')
})
const closeLog = document.querySelector('.close123');
closeLog.addEventListener('click', ()=> {
   signUp.classList.remove('active-log')
})

