async function getPostsByUserId(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();

        const postCardsContainer = document.getElementById('post-cards');

        // Temizleme işlemi: Eğer daha önce kartlar varsa, önce onları temizler.
        postCardsContainer.innerHTML = '';

        posts.forEach(post => {
            const postCard = document.createElement('div');
            postCard.classList.add('post-card');
            postCard.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            postCardsContainer.appendChild(postCard);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (userId) {
        getPostsByUserId(userId);
    } else {
        // Kullanıcıya userId girmesi için.
        let userInput = prompt('Lütfen 1 ile 10 arasında bir kullanıcı ID giriniz.');

        // Girilen değeri kontrol eder.
        if (userInput === null || userInput.trim() === '' || isNaN(userInput) || userInput < 1 || userInput > 10) {
            alert('Geçersiz kullanıcı ID girdiniz. Lütfen 1 ile 10 arasında bir sayı giriniz.');
            throw new Error('Geçersiz kullanıcı ID.');
        }

        // Kullanıcıdan alınan değeri getPostsByUserId fonksiyonuna geçirmek için.
        getPostsByUserId(userInput);
    }
});
