document.querySelectorAll('.dropdown-item').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default action for links
        const category = button.getAttribute('data-category');
        console.log('Dropdown item clicked:', category); // Debugging log
        const cards = document.querySelectorAll('.project-card');

        // Scroll to the projects section
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
            console.log('Scrolled to projects section'); // Debugging log
        } else {
            console.log('Projects section not found'); // Debugging log
        }

        if (category === 'all') {
            cards.forEach(card => card.style.display = 'block');
            console.log('Displaying all cards'); // Debugging log
        } else {
            cards.forEach(card => {
                if (card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    console.log('Displaying card for category:', category); // Debugging log
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
        const regularCards = document.querySelectorAll('.project-card'); // Regular project cards

        if (category === 'all') {
            // Show all regular project cards
            regularCards.forEach(card => card.style.display = 'block');
        } else {
            // Filter regular project cards by category
            regularCards.forEach(card => {
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

document.addEventListener("DOMContentLoaded", function() {
    const profilePicContainer = document.querySelector('.profile-pic-container');
    const homeIntro = document.querySelector('.home-intro');

    // Function to fade in the home intro after the profile picture fades in
    function fadeInHomeIntro() {
        homeIntro.classList.add('show');
    }

    // Intersection Observer for profile picture
    const profilePicObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                profilePicObserver.unobserve(entry.target);

                // Fade in the home intro after a slight delay (adjust this value as needed)
                setTimeout(fadeInHomeIntro, 500); // 1500ms (1.5s) delay after the profile picture appears
            }
        });
    }, { threshold: 0.1 });

    profilePicObserver.observe(profilePicContainer);
});


document.querySelectorAll('.pill-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
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

        // Update active button
        document.querySelectorAll('.pill-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

function scrollToTop() {
    console.log("Another Round! button clicked"); // Debugging log
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


