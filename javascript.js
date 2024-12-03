 let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    // Function to change slides
    function goToSlide(index) {
        // Remove active class from all items
        items.forEach(item => item.classList.remove('active'));
        
        // Add active class to the current slide
        items[index].classList.add('active');
    }

    // Function for next slide
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        goToSlide(currentIndex);
    });

    // Function for previous slide
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        goToSlide(currentIndex);
    });

    // Optionally, auto-advance the slides every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        goToSlide(currentIndex);
    }, 5000);

