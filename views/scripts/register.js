const regform = document.getElementById('register-form');
const regmessage = document.getElementById('regmessage');

regform.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('regusername').value;
  const password = document.getElementById('regpassword').value;

  try {
    const response = await fetch('http://localhost:5000/register', { // Adjust URL if server runs on different port
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.message === 'User created successfully') {
      regmessage.textContent = 'Registration successful!';
      alert(data.message); // Corrected alert message
    } else {
      regmessage.textContent = data.message;
    }
  } catch (error) {
    alert(error.message);
    regmessage.textContent = 'An error occurred. Please try again.';
  }
});

