document.getElementById(learnmore).addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(".tab-content").classList.toggle("show-content");
    });

    function toggleContent() {
        var content = document.getElementById('learn more');
        content.classList.toggle('expand');

        // Pindahkan konten ke atas "Learn More" saat ditampilkan
        if (content.classList.contains("expand")) {
            content.parentNode.insertBefore(content, document.querySelector('.learn-more'));
        }

        if (content.style.display === "none" || content.style.display === ""){
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }


// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}