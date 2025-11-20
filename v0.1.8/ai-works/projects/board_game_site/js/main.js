// Basic JavaScript for the board game explanation site

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links (existing)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile navigation toggle (existing)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('header nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active'); // Optional: style the toggle button itself
        });
    }

    // Highlight active navigation link (existing)
    const currentPath = window.location.pathname.split('/').pop(); // Get current file name
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && linkPath === 'index.html') { // Handle root path
            link.classList.add('active');
        }
    });

    // Fixed Sidebar Table of Contents for rules.html
    const rulesContentContainer = document.querySelector('.rules-content');
    const tocSidebar = document.getElementById('toc-sidebar');
    const tocList = document.getElementById('toc-list');

    if (rulesContentContainer && tocSidebar && tocList) {
        const headings = rulesContentContainer.querySelectorAll('h2');
        const sections = [];

        headings.forEach((heading, index) => {
            const id = heading.id || `section-${index}`;
            heading.id = id; // Ensure all headings have an ID for linking
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = heading.textContent;
            listItem.appendChild(link);
            tocList.appendChild(listItem);
            sections.push({ id: id, element: heading });
        });

        // Highlight active TOC item on scroll
        const highlightActiveLink = () => {
            const scrollY = window.pageYOffset;
            const offsetCorrection = 150; // Adjust based on fixed header height and desired scroll position

            let currentActive = null;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                // Check if the section is within the viewport, with some offset
                if (section.element.offsetTop <= scrollY + offsetCorrection) {
                    currentActive = section.id;
                    break;
                }
            }

            tocList.querySelectorAll('a').forEach(link => {
                link.classList.remove('active');
                if (link.href.includes(currentActive)) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', highlightActiveLink);
        window.addEventListener('resize', highlightActiveLink); // Recalculate on resize
        highlightActiveLink(); // Initial highlight on load
    }

    console.log('main.js loaded and DOM fully parsed.');
});