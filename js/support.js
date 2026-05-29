document.getElementById('supportForm').addEventListener('submit', function (e) 
{
  e.preventDefault();
  let valid = true;

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const issue   = document.getElementById('issueType').value;
  const message = document.getElementById('message').value.trim();

  valid = validate('name',      name.length > 0,                              'nameError')    && valid;
  valid = validate('email',     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),    'emailError')   && valid;
  valid = validate('issueType', issue !== '',                                  'issueError')   && valid;
  valid = validate('message',   message.length >= 10,                         'messageError') && valid;

  if (valid) 
  {
    const msg = document.getElementById('successMsg');
    msg.textContent = '✓ Your request was submitted! We\'ll get back to you soon.';
    msg.classList.add('visible');
    document.getElementById('supportForm').reset();
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
