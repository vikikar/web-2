document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slides");

    function showSlides() {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex >= slides.length) { slideIndex = 0; } // Fix condition
        slides[slideIndex].style.display = "block";
        setTimeout(showSlides, 7000); // Set to 3 seconds instead of 5 minutes
    }

    showSlides();
});


document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});



document.addEventListener("DOMContentLoaded", function() {
    (function() {
        emailjs.init("0xSbtzTkQkHx-GDPN"); // Your EmailJS Public Key
    })();

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let submitButton = document.querySelector("#contactForm button");
        submitButton.innerText = "Sending...";
        submitButton.disabled = true;

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value.trim(),
            title: document.getElementById("message").value,
        };

        emailjs.send("service_y9qq4o8", "template_qjykylm", formData)
            .then(function(response) {
                alert("✅ Email sent successfully!");
                document.getElementById("contactForm").reset();
                submitButton.innerText = "Send Message";
                submitButton.disabled = false;
            }, function(error) {
                alert("❌ Failed to send email. Please try again.");
                console.error("Error:", error);
                submitButton.innerText = "Send Message";
                submitButton.disabled = false;
            });
    });
});

/*galley*/
const prevBtn = document.querySelector('.gallery-nav.prev');
const nextBtn = document.querySelector('.gallery-nav.next');
const gallery = document.querySelector('.gallery');

let scrollAmount = 0;
const scrollStep = 220 + 20; // Image width + gap

nextBtn.addEventListener('click', () => {
    if (scrollAmount < gallery.scrollWidth - gallery.clientWidth) {
        scrollAmount += scrollStep;
        gallery.style.transform = `translateX(-${scrollAmount}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    scrollAmount = Math.max(scrollAmount - scrollStep, 0);
    gallery.style.transform = `translateX(-${scrollAmount}px)`;
});
