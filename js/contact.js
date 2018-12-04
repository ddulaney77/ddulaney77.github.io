let firstName = document.querySelector('input[placeholder="First Name"]');
let lastName = document.querySelector('input[placeholder="Last Name"]');
let email = document.querySelector('input[placeholder="Email"]');
let phoneNumber = document.querySelector('input[placeholder="Phone Number"]');
let message = document.querySelector('textarea[placeholder="Message"]');
let link = document.querySelector('.email');
let button = document.querySelector('input[type="submit"]');
link.setAttribute('href', `mailto:dulaneyredbarn77@yahoo.com?subject=Contact%20DD%20Designs&body=First%20Name:%20${firstName.value}%0ALast%20Name:%20${lastName.value}%0AEmail:%20${email.value}%0APhone%20Number:%20${phoneNumber.value}%0AMessage:%20${message.value}`);
let form = document.querySelector('form');

button.addEventListener('click', (e) => {
  form.setAttribute('action', `mailto:dulaneyredbarn77@yahoo.com?subject=Contact%20DD%20Designs&body=First%20Name:%20${firstName.value}%0ALast%20Name:%20${lastName.value}%0AEmail:%20${email.value}%0APhone%20Number:%20${phoneNumber.value}%0AMessage:%20${message.value}`);
});