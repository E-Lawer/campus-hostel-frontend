// Later, we will change this link to your actual backend URL
const BASE_URL = "https://campus-hostel-backend-myvq.onrender.com/api";

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const res = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            password: form.password.value
        })
    });

    const data = await res.json();
    alert(data.message);
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: form.email.value,
            password: form.password.value
        })
    });

    const data = await res.json();
    alert(data.message);
});
