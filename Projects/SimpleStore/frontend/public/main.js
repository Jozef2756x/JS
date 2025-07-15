const API_BASE = 'http://127.0.0.1:3000';

if (document.getElementById('product-list')) {
  fetch(`${API_BASE}/products`)
    .then(res => res.json())
    .then(products => {
      const list = document.getElementById('product-list');
      products.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `${p.name} - $${p.price}`;
        list.appendChild(li);
      });
    });
}

if (document.getElementById('product-form')) {
  document.getElementById('product-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);

    fetch(`${API_BASE}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price })
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error("Failed to add product");
    })
    .then(data => {
      document.getElementById('status').textContent = 'Product added successfully!';
    })
    .catch(err => {
      document.getElementById('status').textContent = 'Error adding product.';
    });
  });
}

if (document.getElementById('login-form')) {
  document.getElementById('login-form').addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        document.getElementById('login-status').textContent = 'Login successful!';
      } else {
        document.getElementById('login-status').textContent = data.message || 'Login failed.';
      }
    });
  });
}

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = isError ? 'show error' : 'show';
  
  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
  }, 3000);
}
// Register logic
if (document.getElementById('register-form')) {
  document.getElementById('register-form').addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, password })
      });

      const data = await res.json();

      if (res.ok) {
        showToast(data.message); // ✅ success toast
        document.getElementById('register-form').reset();
      } else {
        const message = Array.isArray(data)
          ? data.map(e => e.msg).join(', ')
          : data.error || 'Registration failed.';
        showToast(message, true); // ❌ error toast
      }
    } catch (err) {
      showToast('Server error.', true);
    }
  });
}


