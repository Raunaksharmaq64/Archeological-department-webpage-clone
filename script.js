document.addEventListener('DOMContentLoaded', () => {
    // Slider Logic
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;

    function showSlide(index) {
        // Since we only have 2 images but 6 dots (pixel match), we wrap indices
        const imgIndex = index % slides.length;
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        slides[imgIndex].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Add click events for all dots
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => showSlide(idx));
    });

    prevBtn.addEventListener('click', () => {
        let index = (currentSlide - 1 + dots.length) % dots.length;
        showSlide(index);
    });

    nextBtn.addEventListener('click', () => {
        let index = (currentSlide + 1) % dots.length;
        showSlide(index);
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        let index = (currentSlide + 1) % dots.length;
        showSlide(index);
    }, 5000);

    // Tab Switching Logic
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTab = item.getAttribute('data-tab');

            // Remove active class from all tabs and panes
            tabItems.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Pause all audio elements
            const audios = document.querySelectorAll('audio');
            audios.forEach(a => a.pause());

            // Add active class to clicked tab and corresponding pane
            item.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});
