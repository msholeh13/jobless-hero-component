let navbar = document.querySelector('.navbar');
let signUp = document.querySelector('.sign-up');

function show() {
  if ((navbar.style.display == 'none' || navbar.style.display == '') && (signUp.style.display == 'none' || signUp.style.display == '')) {
    navbar.style.display = 'block';
    signUp.style.display = 'block';
  } else {
    navbar.style.display = 'none';
    signUp.style.display = 'none';
  }
}
