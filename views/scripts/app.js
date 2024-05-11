const loginform = document.getElementById('login-form');
const message = document.getElementById('message');

loginform.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5000/login', { // Adjust URL if server runs on different port
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.message === 'Login successful') {
      message.textContent = 'Login successful!';
      // Handle successful login (e.g., redirect to another page)
    } else {
      message.textContent = data.message;
    }
  } catch (error) {
    console.error(error);
    message.textContent = 'An error occurred. Please try again.';
  }
});

