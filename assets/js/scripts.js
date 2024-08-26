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

document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1, // Lower threshold to ensure it triggers even if partially in view
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                appearOnScroll.unobserve(entry.target);
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
