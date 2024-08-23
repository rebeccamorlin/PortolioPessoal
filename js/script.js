document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll('.skill-bar-inner');

    function updateSkills() {
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-skill-level');
            bar.style.width = percentage;
        });
    }

    const skillsSection = document.querySelector('.skills-section');
    const revealSkills = () => {
        if (skillsSection.getBoundingClientRect().top < window.innerHeight) {
            updateSkills();
            window.removeEventListener('scroll', revealSkills);
        }
    };

    window.addEventListener('scroll', revealSkills);
    revealSkills(); // Chama a função uma vez para o caso de a seção já estar na tela
});
