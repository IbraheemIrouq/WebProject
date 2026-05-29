document.getElementById('loginForm').addEventListener('submit', function (e) 
{
  e.preventDefault();

  const emailVal = document.getElementById('email').value.trim();
  const passVal  = document.getElementById('password').value;
  let valid = true;

  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailVal || !emailRegex.test(emailVal)) 
  {
    emailInput.classList.add('input-error');
    emailError.classList.add('visible');
    valid = false;
  } 
  else 
  {
    emailInput.classList.remove('input-error');
    emailError.classList.remove('visible');
  }

  const passInput = document.getElementById('password');
  const passError = document.getElementById('passwordError');
  if (!passVal) 
  {
    passInput.classList.add('input-error');
    passError.classList.add('visible');
    valid = false;
  } 
  else 
  {
    passInput.classList.remove('input-error');
    passError.classList.remove('visible');
  }

  if (valid) 
  {
    const msg = document.getElementById('successMsg');
    msg.textContent = '✓ Login successful! Redirecting...';
    msg.classList.add('visible');
    setTimeout(() => { window.location.href = 'home.html'; }, 1200);
  }
});
