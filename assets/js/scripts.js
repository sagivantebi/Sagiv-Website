document.querySelectorAll('.dropdown-content a').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const cards = document.querySelectorAll('.project-card');

        // Scroll to the projects section
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });

        if (category === 'all') {
            cards.forEach(card => card.style.display = 'block');
        } else {
            cards.forEach(card => {
                if (card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });
});
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const cards = document.querySelectorAll('.project-card');

        if (category === 'all') {
            cards.forEach(card => card.style.display = 'block');
        } else {
            cards.forEach(card => {
                if (card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });
});