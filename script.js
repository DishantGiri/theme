// Mobile TOC dropdown toggle
document.addEventListener('DOMContentLoaded', function () {
    var tocToggle = document.querySelector('.mobile-toc-toggle');
    var tocDropdown = document.querySelector('.mobile-toc-dropdown');
        if (tocToggle && tocDropdown) {
            tocToggle.addEventListener('click', function () {
                const isOpen = tocDropdown.style.display === 'block';
                tocDropdown.style.display = isOpen ? 'none' : 'block';
                tocToggle.classList.toggle('toc-open', !isOpen);
            });
            tocDropdown.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                    tocDropdown.style.display = 'none';
                    tocToggle.classList.remove('toc-open');
                });
            });
        }
});
// FAQ toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const dropdown = this.parentElement;
            dropdown.classList.toggle('open');

            // Close other open FAQs
            faqToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    otherToggle.parentElement.classList.remove('open');
                }
            });
        });
    });

    // Table of Contents active state
    const tocLinks = document.querySelectorAll('.toc-list a');
    const sections = document.querySelectorAll('.main-content section');

    function updateActiveTocLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveTocLink);
});