document.getElementById('registerForm').addEventListener('submit', function (e) 
{
  e.preventDefault();
  let valid = true;

  const username        = document.getElementById('username').value.trim();
  const email           = document.getElementById('email').value.trim();
  const password        = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  valid = validate('username', username.length > 0,        'usernameError') && valid;
  valid = validate('email',    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), 'emailError') && valid;
  valid = validate('password', password.length >= 6,       'passwordError') && valid;
  valid = validate('confirmPassword', password === confirmPassword, 'confirmError') && valid;

  if (valid) 
  {
    const msg = document.getElementById('successMsg');
    msg.textContent = '✓ Account created successfully! Redirecting to login...';
    msg.classList.add('visible');
    document.getElementById('registerForm').reset();
    setTimeout(() => { window.location.href = 'index.html'; }, 2000);
  }
});

function validate(fieldId, condition, errorId) 
{
  const input = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  if (!condition) 
  {
    input.classList.add('input-error');
    error.classList.add('visible');
    return false;
  }
  
  input.classList.remove('input-error');
  error.classList.remove('visible');
  return true;
}
