//let myEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g

let form = document.querySelector('.authentication-form');
let userNumber = document.querySelector('#phone');
let numAlert = document.querySelector('.red-warn');
let password = document.querySelector('#password')
let passAlert = document.querySelector('.pass-feedback')

form.addEventListener('click', (e) => {
  if (userNumber.value.length < 6) {
    
    e.preventDefault();

    numAlert.style.display = 'block';

    userNumber.classList.add('invalid');

    userNumber.addEventListener('keyup', () => {
      numAlert.style.display = 'none';
      userNumber.classList.remove('invalid');
    })
  }

  if (password.value.length < 6) {
    e.preventDefault()

    passAlert.style.display = 'block'

    password.classList.remove('medium');
    password.classList.remove('maximum');

    passAlert.classList.remove('strength-mid')
    passAlert.classList.remove('strength-maximum')

    password.classList.add('invalid');
    passAlert.innerText = 'Please input a valid password'

  } else if (password.value.indexOf(' ') !== -1) {
    e.preventDefault()

    passAlert.style.display = 'block'

    password.classList.remove('medium');
    password.classList.remove('maximum');

    passAlert.classList.remove('strength-mid')
    passAlert.classList.remove('strength-maximum')

    password.classList.add('invalid');
    passAlert.innerText = 'Opps! passwords cannot contain spaces'
  }

});

password.addEventListener('keyup', () => {
  if (password.value.length < 6) {
    passAlert.style.display = 'block'

    password.classList.remove('medium');
    password.classList.remove('maximum');

    password.classList.add('invalid');

    passAlert.classList.remove('strength-mid')
    passAlert.classList.remove('strength-maximum')

    passAlert.innerText = 'Password must be at least 6 characters'
  } 

  if ((password.value.match(/\d+/g) !== null) && (password.value.length >= 6)) {
    passAlert.style.display = 'block'
    
    password.classList.remove('invalid');
    password.classList.remove('medium');

    passAlert.classList.remove('strength-mid')
   
    password.classList.add('maximum');
    passAlert.classList.add('strength-maximum')
    passAlert.innerText = 'Password is secure'

  }

  if (password.value.length >= 6 && password.value.length < 10) {
    passAlert.style.display = 'block'

    password.classList.remove('invalid');
    password.classList.remove('maximum');

    passAlert.classList.remove('strength-maximum')

    password.classList.add('medium');
    passAlert.classList.add('strength-mid')
    passAlert.innerText = 'Medium strength'
  }
  
  if (password.value.length >= 10) {

    passAlert.style.display = 'block'
    
    password.classList.remove('invalid');
    password.classList.remove('medium');

    passAlert.classList.remove('strength-mid')
   
    password.classList.add('maximum');
    passAlert.classList.add('strength-maximum')
    passAlert.innerText = 'Password is secure'

  }

  if (password.value.length == 0) {
    passAlert.style.display = 'none';
    password.classList.remove('invalid');
    password.classList.remove('medium');
    password.classList.remove('maximum');
  }
})

if (password.value.length == 0) {
  passAlert.style.display = 'none';
  password.classList.remove('invalid');
  password.classList.remove('medium');
  password.classList.remove('maximum');
}
