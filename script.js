const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const navMenuMobile = document.getElementById("nav-menu-mobile");

const clickSound = new Audio("click.wav");

menuIcon.addEventListener("click", () => {
    // Toggle menu open/close
    menuIcon.classList.toggle("open");
    navMenu.classList.toggle("active");
    navMenuMobile.classList.toggle("active"); // Toggle mobile menu

    // Update aria-expanded attribute
    const isOpen = menuIcon.classList.contains("open");
    menuIcon.setAttribute("aria-expanded", isOpen);

    // Play sound effect
    clickSound.currentTime = 0; // Restart sound if already playing
    clickSound.play();
});



const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains('active');

        headers.forEach(h => {
            h.classList.remove('active');
            h.nextElementSibling.style.display = 'none';
        });

        if (!isActive) {
            header.classList.add('active');
            content.style.display = 'block';
        }
    });
});

