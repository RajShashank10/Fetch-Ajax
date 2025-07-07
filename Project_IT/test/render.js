function renderUsers(users, output) {
    output.innerHTML = '';
    users.forEach(user => {
        const div = document.createElement('div');
        div.className = 'user';
        div.innerHTML = `<strong>${user.name}</strong><br>Email: ${user.email}<br>City: ${user.address.city}<br>12TH: ${user.address.Board["12th"]}`;
        output.appendChild(div);
    });
}