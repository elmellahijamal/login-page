document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        document.getElementById('loginError').textContent = 'Please enter both username and password.';
        document.getElementById('loginError').style.color = 'red';
        return;
    }

    this.submit();
});
