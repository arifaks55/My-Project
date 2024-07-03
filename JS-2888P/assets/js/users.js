async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const userCardsContainer = document.getElementById('user-cards');

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                <h3>${user.name}</h3>
                <div class="section">
                    <i class="fas fa-user"></i>
                    <span><strong>Kullanıcı Adı:</strong> ${user.username}</span>
                </div>
                <div class="section">
                    <i class="fas fa-building"></i>
                    <span><strong>Şirket:</strong> ${user.company.name}</span>
                </div>
                <div class="section">
                    <i class="fas fa-location-dot"></i>
                    <span><strong>Adres:</strong> ${user.address.street}, ${user.address.city}</span>
                </div>
                <div class="section">
                    <i class="fas fa-envelope"></i>
                    <span><strong>E-posta:</strong> ${user.email}</span>
                </div>
                <div class="section">
                    <i class="fas fa-phone"></i>
                    <span><strong>Telefon:</strong> ${user.phone}</span>
                </div>
                <div class="section">
                    <i class="fas fa-globe"></i>
                    <span><strong>Website:</strong> ${user.website}</span>
                </div>
            `;
            userCardsContainer.appendChild(userCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getUsers();
});