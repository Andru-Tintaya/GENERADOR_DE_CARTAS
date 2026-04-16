document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Form sugerencias
    document.querySelector('.sugerencia-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu sugerencia! La revisaremos pronto. ✨');
        this.reset();
    });
    
    // Stats counter animation
    const stats = document.querySelectorAll('.stat h3');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                let count = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        entry.target.textContent = target + (target > 10 ? 'K+' : '%');
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(count) + (target > 10 ? 'K+' : '%');
                    }
                }, 20);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
    
    // Mobile menu
    document.querySelector('.mobile-menu')?.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
});