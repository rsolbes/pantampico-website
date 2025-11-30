// js/main.js

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const hamburger = navToggle.querySelector('.hamburger');
        hamburger.style.transform = navMenu.classList.contains('active') 
            ? 'rotate(45deg)' 
            : 'rotate(0)';
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const hamburger = navToggle.querySelector('.hamburger');
        hamburger.style.transform = 'rotate(0)';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all news cards and value cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.news-card, .value-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Social media links (update with real URLs)
const socialLinks = {
    facebook: 'https://facebook.com/pantampico',
    twitter: 'https://twitter.com/pantampico',
    instagram: 'https://instagram.com/pantampico',
    youtube: 'https://youtube.com/pantampico'
};

// Form validation (for contact page)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        let isValid = true;

        // Basic validation
        for (let [key, value] of formData.entries()) {
            if (!value.trim()) {
                isValid = false;
                alert(`Por favor completa el campo: ${key}`);
                break;
            }
        }

        if (isValid) {
            alert('Formulario enviado correctamente. ¡Gracias por contactarnos!');
            form.reset();
        }
    });
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', () => {
    validateForm('contact-form');
});