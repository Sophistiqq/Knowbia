const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (!username || !password) {
    return createPopup('Please fill in all fields');
  }
  
  fetch('https://server-knowbia.vercel.app/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        createPopup(data.error);
      } else {
        createPopup(data.message);
      }
    });
});

function createPopup(message) {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.textContent = message;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);
}
